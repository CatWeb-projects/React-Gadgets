import React from 'react';
import { useRequest } from 'estafette';
import { catalog, DevicesProps } from 'libs/http/api';
import { Footer, Header, Products } from 'ui/organims';

export const Phones = () => {
  const { request, data: phonesData } = useRequest<DevicesProps[]>();

  React.useEffect(() => {
    onFetchPhonesData();

    return () => {
      catalog.phones.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetchPhonesData = () => request(catalog.phones.action());

  React.useMemo(() => phonesData, [phonesData]);

  return (
    <div className="main-container">
      <div className="phones">
        <Header />
        <Products products={phonesData} />
        <Footer />
      </div>
    </div>
  );
};
