import React from 'react';
import { useRequest } from 'estafette';
import { DeviceContext } from 'contexts/Devices-Context';
import { DevicesCardProps, DevicesProps, recommended } from 'libs/http/api';
import { SlickSlider, Header, Recommended, Footer } from 'ui/organims';
import {
  Promotions,
  Tags,
  Categories,
  ServiceSection,
  Collection,
  Features
} from 'ui/molecules';

import './MainLayout.scss';

const CardKeys: { [key: string]: string } = {
  phones: 'smartphones',
  laptops: 'laptops',
  gadgets: 'gadgets',
  audio: 'audio'
};

export const MainLayout = () => {
  const { devicesData } = React.useContext(DeviceContext);
  const { request, data: devicesCards } = useRequest<DevicesCardProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {};
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(recommended.devices.action());

  // const { phonesCardData, phonesDeviceData } = React.useMemo(
  //   () => ({
  //     phonesCardData: devicesCards.find((card: DevicesCardProps) => card.name === 'phones'),
  //     phonesDeviceData: devicesData.filter(
  //       (device: DevicesProps) => device.type === 'smartphones'
  //     )
  //   }),
  //   [devicesData, devicesCards]
  // );

  const filtering = React.useMemo(
    () =>
      Object.keys(CardKeys).reduce(
        (acc, i) => ({
          ...acc,
          [`${i}CardData`]: devicesCards.find(
            (card: DevicesCardProps) => card.name === i
          ),
          [`${i}DeviceData`]: devicesData.filter(
            (device: DevicesProps) => device.type === CardKeys[i]
          )
        }),
        {} as any
      ),
    [devicesData, devicesCards]
  );

  return (
    <div className="main-container">
      <Header />
      <Tags />
      <SlickSlider />
      <Categories />
      <Promotions />
      <Recommended
        cardData={filtering.phonesCardData}
        devicesData={filtering.phonesDeviceData}
      />
      <ServiceSection />
      <Recommended
        cardData={filtering.laptopsCardData}
        devicesData={filtering.laptopsDeviceData}
      />
      <Recommended
        cardData={filtering.audioCardData}
        devicesData={filtering.audioDeviceData}
      />
      <Collection />
      <Recommended
        cardData={filtering.gadgetsCardData}
        devicesData={filtering.gadgetsDeviceData}
      />
      <Features />
      <Footer />
    </div>
  );
};
