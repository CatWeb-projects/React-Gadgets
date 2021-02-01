import React from 'react';
import { useRequest } from 'estafette';
import { gadgets } from 'libs/http/api/gadgets';

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

  return <div className="main-container"></div>;
};
