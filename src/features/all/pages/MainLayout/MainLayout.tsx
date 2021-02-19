import React from 'react';
import { useRequest } from 'estafette';
import {
  catalog,
  DevicesProps,
  DevicesCardProps,
  recommended
} from 'libs/http/api';
import { SlickSlider, Header, Recommended } from 'ui/organims';
import {
  Promotions,
  Tags,
  Categories,
  ServiceSection,
  Collection
} from 'ui/molecules';

import './MainLayout.scss';

export const MainLayout = () => {
  const { request, data } = useRequest<DevicesCardProps>();
  const { request: requestPhones, data: phonesData } = useRequest<
    DevicesProps[]
  >();
  const {
    request: requestLaptopsCard,
    data: laptopsCardData
  } = useRequest<DevicesCardProps>();
  const { request: requestLaptops, data: laptopsData } = useRequest<
    DevicesProps[]
  >();
  const {
    request: requestGadgetsCard,
    data: gadgetsCardData
  } = useRequest<DevicesCardProps>();
  const { request: requestGadgets, data: gadgetsData } = useRequest<
    DevicesProps[]
  >();

  React.useEffect(() => {
    onFetch();
    onFetchPhonesData();
    onFetchLaptopsCard();
    onFetchLaptops();
    onFetchGadgetsCard();
    onFetchGadgets();

    return () => {
      recommended.phones.cancel();
      catalog.phones.cancel();
      recommended.laptops.cancel();
      catalog.laptops.cancel();
      recommended.gadgets.cancel();
      catalog.gadgets.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(recommended.phones.action());
  const onFetchPhonesData = () => requestPhones(catalog.phones.action());
  const onFetchLaptopsCard = () =>
    requestLaptopsCard(recommended.laptops.action());
  const onFetchLaptops = () => requestLaptops(catalog.laptops.action());
  const onFetchGadgetsCard = () =>
    requestGadgetsCard(recommended.gadgets.action());
  const onFetchGadgets = () => requestGadgets(catalog.gadgets.action());

  const phonesCard = React.useMemo(() => data, [data]);
  React.useMemo(() => phonesData, [phonesData]);
  React.useMemo(() => laptopsCardData, [laptopsCardData]);
  React.useMemo(() => laptopsData, [laptopsData]);
  React.useMemo(() => gadgetsCardData, [gadgetsCardData]);
  React.useMemo(() => gadgetsData, [gadgetsData]);

  return (
    <div className="main-container">
      <Header />
      <Tags />
      <SlickSlider />
      <Categories />
      <Promotions />
      <Recommended cardData={phonesCard} gadgetsData={phonesData} />
      <ServiceSection />
      <Recommended cardData={laptopsCardData} gadgetsData={laptopsData} />
      <Collection />
      <Recommended cardData={gadgetsCardData} gadgetsData={gadgetsData} />
    </div>
  );
};
