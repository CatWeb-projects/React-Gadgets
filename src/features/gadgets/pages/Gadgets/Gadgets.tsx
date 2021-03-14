import React from 'react';
import { useRequest } from 'estafette';
import { Footer, Header, Products } from 'ui/organims';
import { catalog, DevicesProps } from 'libs/http/api';

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
        <Products products={gadgetsData} />
        <Footer />
      </div>
    </div>
  );
};
