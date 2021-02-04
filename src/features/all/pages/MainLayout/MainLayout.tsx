import React from 'react';
import { useRequest } from 'estafette';
import { gadgets } from 'libs/http/api';
import { SlickSlider } from 'ui/organims';
import { Header, Tags } from 'ui/molecules';

import './MainLayout.scss';

export const MainLayout = () => {
  const { request, data } = useRequest<any>();

  React.useEffect(() => {
    onFetch();

    return () => {
      gadgets.cancel();
    };
  }, []);

  // console.log(data, 'api');

  const onFetch = () => request(gadgets.action());

  return (
    <div className="main-container">
      <Header />
      <Tags />
      <SlickSlider />
    </div>
  );
};
