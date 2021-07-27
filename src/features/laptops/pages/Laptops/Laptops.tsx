import React from 'react';
import { useRequest } from 'estafette';
import { catalog, DevicesProps } from 'libs/http/api';
import { Footer, Header, Products } from 'ui/organims';
import { Categories } from 'ui/molecules';

export const Laptops = () => {
  const { request, data: laptopsData } = useRequest<DevicesProps[]>();

  React.useEffect(() => {
    onFetchLaptops();

    return () => {
      catalog.phones.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetchLaptops = () => request(catalog.laptops.action());

  React.useMemo(() => laptopsData, [laptopsData]);

  return (
    <div className="main-container">
      <div className="laptops">
        <Header />
        <Categories />
        <Products products={laptopsData} />
        <Categories />
        <Footer />
      </div>
    </div>
  );
};
