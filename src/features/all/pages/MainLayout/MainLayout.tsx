import React from 'react';
import { useRequest } from 'estafette';
import { DeviceContext } from 'contexts/Devices-Context';
import { DevicesCardProps, recommended } from 'libs/http/api';
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

export const MainLayout = () => {
  const { devicesData } = React.useContext<any>(DeviceContext);
  const { request, data: devicesCards } = useRequest<DevicesCardProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {};
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(recommended.devices.action());

  React.useEffect(() => {}, []);

  return (
    <div className="main-container">
      <Header />
      <Tags />
      <SlickSlider />
      <Categories />
      <Promotions />
      <Recommended
        cardData={devicesCards.find((card: any) => card.name === 'phones')}
        devicesData={devicesData.filter(
          (device: any) => device.type === 'smartphones'
        )}
      />
      <ServiceSection />
      <Recommended
        cardData={devicesCards.find((card: any) => card.name === 'laptops')}
        devicesData={devicesData.filter(
          (device: any) => device.type === 'laptops'
        )}
      />
      <Collection />
      <Recommended
        cardData={devicesCards.find((card: any) => card.name === 'gadgets')}
        devicesData={devicesData.filter(
          (device: any) => device.type === 'gadgets'
        )}
      />
      <Features />
      <Footer />
    </div>
  );
};
