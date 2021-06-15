import React from 'react';
import { useRequest } from 'estafette';
import { catalog, DevicesProps } from 'libs/http/api';
import { Footer, Header, Products } from 'ui/organims';
import { Categories } from 'ui/molecules';

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
        <Categories />
        <Products products={phonesData} />
        <Categories />
        <Footer />
      </div>
    </div>
  );
};
