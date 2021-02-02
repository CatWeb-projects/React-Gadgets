import React from 'react';
import { useRequest } from 'estafette';
import { gadgets } from 'libs/http/api/gadgets';
import { Header } from 'ui/molecules';

import './MainLayout.scss';

export const MainLayout = () => {
  const { request, data } = useRequest<any>();

  React.useEffect(() => {
    onFetch();

    return () => {
      gadgets.cancel();
    };
    //eslint-disable-next-line
  }, []);

  console.log(data, 'api');

  const onFetch = () => request(gadgets.action());

  return (
    <div className="main-container">
      <Header />
    </div>
  );
};
