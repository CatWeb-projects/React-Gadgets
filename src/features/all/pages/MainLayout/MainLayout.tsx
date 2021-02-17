import React from 'react';
import { useRequest } from 'estafette';
import {
  catalog,
  GadgetsProps,
  GadgetsCardProps,
  recommended
} from 'libs/http/api';
import { SlickSlider, Header, Recommended } from 'ui/organims';
import { Promotions, Tags, Categories, ServiceSection } from 'ui/molecules';

import './MainLayout.scss';

export const MainLayout = () => {
  const { request, data } = useRequest<GadgetsCardProps>();
  const { request: requestPhones, data: phonesData } = useRequest<
    GadgetsProps[]
  >();
  const {
    request: requestLaptopsCard,
    data: laptopsCardData
  } = useRequest<GadgetsCardProps>();
  const { request: requestLaptops, data: laptopsData } = useRequest<
    GadgetsProps[]
  >();

  React.useEffect(() => {
    onFetch();
    onFetchPhonesData();
    onFetchLaptopsCard();
    onFetchLaptops();

    return () => {
      recommended.phones.cancel();
      catalog.phones.cancel();
      recommended.laptops.cancel();
      catalog.laptops.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(recommended.phones.action());
  const onFetchPhonesData = () => requestPhones(catalog.phones.action());
  const onFetchLaptopsCard = () =>
    requestLaptopsCard(recommended.laptops.action());
  const onFetchLaptops = () => requestLaptops(catalog.laptops.action());

  const phonesCard = React.useMemo(() => data, [data]);
  React.useMemo(() => phonesData, [phonesData]);
  React.useMemo(() => laptopsCardData, [laptopsCardData]);
  React.useMemo(() => laptopsData, [laptopsData]);

  return (
    <div className="main-container">
      <Header />
      <Tags />
      <SlickSlider />
      <Categories />
      <Promotions />
      <Recommended cardData={phonesCard} gadgetData={phonesData} />
      <ServiceSection />
      <Recommended cardData={laptopsCardData} gadgetData={laptopsData} />
    </div>
  );
};
