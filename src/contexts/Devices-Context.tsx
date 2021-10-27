import React from 'react';
import { useRequest } from 'estafette';
import { catalog, DevicesProps } from 'libs/http/api';

interface ProviderProps {
  children: React.ReactNode;
}

interface Props {
  devicesData: DevicesProps[];
  favorites: DevicesProps[];
  authVerify: boolean;
  userSave: string;
  userFavorites: DevicesProps[];
  setFavorites: React.Dispatch<React.SetStateAction<DevicesProps[]>>;
  setAuthVerify: React.Dispatch<React.SetStateAction<boolean>>;
  addFavorites: (product: DevicesProps) => void;
  setUserSave: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue = {
  devicesData: [],
  favorites: [],
  authVerify: false,
  userSave: '',
  userFavorites: [],
  setFavorites: () => {},
  setAuthVerify: () => {},
  addFavorites: () => {},
  setUserSave: () => {}
};

export const DeviceContext = React.createContext<Props>(defaultValue);

export const ProviderContext = (props: ProviderProps) => {
  const [favorites, setFavorites] = React.useState<DevicesProps[]>([]);
  const [authVerify, setAuthVerify] = React.useState<boolean>(false);
  const [userSave, setUserSave] = React.useState<string>('');

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
        product &&
        favorites.find(
          (item) => product.name === item.name && item.email === userSave
        )
      ) {
        setFavorites(favorites.filter((item) => product.name !== item.name));
      } else if (authVerify && product) {
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

  const values = {
    devicesData,
    authVerify,
    setAuthVerify,
    favorites,
    setFavorites,
    addFavorites,
    userSave,
    setUserSave,
    userFavorites
  };

  const { children } = props;

  return (
    <DeviceContext.Provider value={values}>{children}</DeviceContext.Provider>
  );
};
