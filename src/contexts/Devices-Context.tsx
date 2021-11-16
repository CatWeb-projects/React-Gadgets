import React from 'react';
import { useRequest } from 'estafette';
import { catalog, DevicesProps } from 'libs/http/api';

interface ProviderProps {
  children: React.ReactNode;
}

interface Props {
  devicesData: DevicesProps[];
  favorites: DevicesProps[];
  compare: DevicesProps[];
  authVerify: boolean;
  userSave: string;
  userFavorites: DevicesProps[];
  userCompare: DevicesProps[];
  setFavorites: React.Dispatch<React.SetStateAction<DevicesProps[]>>;
  setCompare: React.Dispatch<React.SetStateAction<DevicesProps[]>>;
  setAuthVerify: React.Dispatch<React.SetStateAction<boolean>>;
  addFavorites: (product: DevicesProps) => void;
  addToCompare: (product: DevicesProps) => void;
  setUserSave: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue = {
  devicesData: [],
  favorites: [],
  compare: [],
  authVerify: false,
  userSave: '',
  userFavorites: [],
  userCompare: [],
  setFavorites: () => {},
  setCompare: () => {},
  setAuthVerify: () => {},
  addFavorites: () => {},
  addToCompare: () => {},
  setUserSave: () => {}
};

export const DeviceContext = React.createContext<Props>(defaultValue);

export const ProviderContext = (props: ProviderProps) => {
  const [favorites, setFavorites] = React.useState<DevicesProps[]>([]);
  const [authVerify, setAuthVerify] = React.useState<boolean>(false);
  const [userSave, setUserSave] = React.useState<string>('');
  const [compare, setCompare] = React.useState<DevicesProps[]>([]);

  const { request, data: devicesData } = useRequest<DevicesProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      catalog.devices.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(catalog.devices.action());

  React.useEffect(() => {
    const data = localStorage.getItem('favorites');
    if (data) {
      return setFavorites(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorites = React.useCallback(
    (product: DevicesProps) => {
      if (
        authVerify &&
        favorites.find(
          (item) => product.id === item.id && item.email === userSave
        )
      ) {
        setFavorites(
          favorites.filter((item) => {
            if (item.email === userSave && item.id !== product.id) {
              return true;
            } else if (item.email !== userSave) {
              return [
                ...favorites,
                { ...item, email: item.email !== userSave }
              ];
            }
            return null;
          })
        );
      } else if (authVerify) {
        setFavorites([...favorites, { ...product, email: userSave }]);
      }
      // eslint-disable-next-line
    },
    [authVerify, favorites, userSave]
  );

  const { userFavorites } = React.useMemo(
    () => ({
      userFavorites: favorites.filter(
        (favorite: DevicesProps) => favorite.email === userSave
      )
    }),
    [favorites, userSave]
  );

  React.useEffect(() => {
    const data = localStorage.getItem('compare');
    if (data) {
      return setCompare(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('compare', JSON.stringify(compare));
  }, [compare]);

  const { userCompare } = React.useMemo(
    () => ({
      userCompare: compare.filter(
        (device: DevicesProps) => device.email === userSave
      )
    }),
    [compare, userSave]
  );

  const addToCompare = React.useCallback(
    (product: DevicesProps) => {
      if (
        authVerify &&
        compare.find(
          (item) => item.email === userSave && item.id === product.id
        )
      ) {
        setCompare(
          compare.filter((item) => {
            if (item.email === userSave && item.id !== product.id) {
              return true;
            } else if (item.email !== userSave) {
              return [...compare, { ...item, email: item.email !== userSave }];
            }
            return null;
          })
        );
      } else if (authVerify && userCompare.length > 3) {
        setCompare((i) => i);
      } else if (authVerify) {
        setCompare([...compare, { ...product, email: userSave }]);
      }
    },
    [compare, userSave, authVerify, userCompare]
  );

  const values = {
    devicesData,
    authVerify,
    setAuthVerify,
    favorites,
    setFavorites,
    addFavorites,
    userSave,
    setUserSave,
    userFavorites,
    compare,
    setCompare,
    addToCompare,
    userCompare
  };

  const { children } = props;

  return (
    <DeviceContext.Provider value={values}>{children}</DeviceContext.Provider>
  );
};
