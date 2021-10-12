import React from 'react';
import { useRequest } from 'estafette';
import { Footer, Header, Products } from 'ui/organims';
import { catalog, DevicesProps } from 'libs/http/api';
import { Categories } from 'ui/molecules';

export const Gadgets = () => {
  const { request, data: gadgetsData } = useRequest<DevicesProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      catalog.gadgets.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(catalog.gadgets.action());

  React.useMemo(() => gadgetsData, [gadgetsData]);

  return (
    <div className="main-container">
      <div className="gadgets">
        <Header />
        <Categories />
        <Products products={gadgetsData} />
        {gadgetsData?.length > 4 && <Categories />}
        <Footer />
      </div>
    </div>
  );
};
