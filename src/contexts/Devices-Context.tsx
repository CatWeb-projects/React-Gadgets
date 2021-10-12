import React from 'react';
import { useRequest } from 'estafette';
import { catalog } from 'libs/http/api';

interface ProviderProps {
  children: React.ReactNode;
}

interface DevicesProps {
  id: number;
  name: string;
  price: number;
  credit?: number;
  cashback?: number;
  model: string;
  color: string;
  weight: number;
  popularity: number;
  manufacturer: string;
  imageUrl: string;
  type: string;
  link: string;
  colors: string[];
  memoryOptions: number[];
  camera?: number;
  frontCamera?: number;
  chipset?: string;
  resolution?: string;
  hardDrive?: number;
  memory?: number;
  cores?: number;
  chipsetFrequency?: string;
  segment?: string;
  display?: string;
  displayType?: string;
  videoCard?: string;
  videoCardMemory?: string;
  touchScreen?: boolean;
  chargingTime?: number;
  workingTimeDays?: number;
  workingTimeHours?: number;
  batteryCapacity?: number;
  bluetooth?: number;
  power?: number;
  workingDistance?: number;
  audioFrequency?: string;
  audioFormats?: string[];
  usbConnectors?: number;
}

interface Props {
  devicesData: DevicesProps[];
  favorites: DevicesProps[];
  authVerify: boolean;
  setDevicesData: React.Dispatch<React.SetStateAction<DevicesProps[]>>;
  setFavorites: React.Dispatch<React.SetStateAction<DevicesProps[]>>;
  setAuthVerify: React.Dispatch<React.SetStateAction<boolean>>;
  addFavorites: (product: DevicesProps) => void;
}

const defaultValue = {
  devicesData: [],
  favorites: [],
  authVerify: false,
  setDevicesData: () => {},
  setFavorites: () => {},
  setAuthVerify: () => {},
  addFavorites: () => {}
};

export const DeviceContext = React.createContext<Props>(defaultValue);

export const ProviderContext = (props: ProviderProps) => {
  const [devicesData, setDevicesData] = React.useState<DevicesProps[]>([]);
  const [favorites, setFavorites] = React.useState<DevicesProps[]>([]);
  const [authVerify, setAuthVerify] = React.useState<boolean>(false);

  const { request, data } = useRequest<DevicesProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      catalog.devices.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(catalog.devices.action());

  React.useEffect(() => {
    setDevicesData(data);
  }, [data]);

  React.useMemo(() => devicesData, [devicesData]);

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
        favorites.find((item) => product.name === item.name)
      ) {
        setFavorites(favorites.filter((item) => product.name !== item.name));
      } else if (authVerify && product) {
        setFavorites([...favorites, product]);
      }
      // eslint-disable-next-line
    },
    [authVerify, favorites]
  );

  const values = {
    devicesData,
    setDevicesData,
    authVerify,
    setAuthVerify,
    favorites,
    setFavorites,
    addFavorites
  };

  const { children } = props;

  return (
    <DeviceContext.Provider value={values}>{children}</DeviceContext.Provider>
  );
};
