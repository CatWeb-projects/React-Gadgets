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
  authVerify: boolean;
  setDevicesData: React.Dispatch<React.SetStateAction<DevicesProps[]>>;
  setAuthVerify: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue = {
  devicesData: [],
  authVerify: false,
  setDevicesData: () => {},
  setAuthVerify: () => {}
};

export const DeviceContext = React.createContext<Props>(defaultValue);

export const ProviderContext = (props: ProviderProps) => {
  const [devicesData, setDevicesData] = React.useState<DevicesProps[]>([]);
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

  const values = {
    devicesData,
    setDevicesData,
    authVerify,
    setAuthVerify
  };

  const { children } = props;

  return (
    <DeviceContext.Provider value={values}>{children}</DeviceContext.Provider>
  );
};
