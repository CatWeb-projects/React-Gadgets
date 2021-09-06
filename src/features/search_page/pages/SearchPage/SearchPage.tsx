import React from 'react';
import { useRequest } from 'estafette';
import { useParams } from 'estafette-router';
import { Footer, Header, Products } from 'ui/organims';
import { Categories } from 'ui/molecules';
import { catalog, DevicesProps } from 'libs/http/api';

export const SearchPage = () => {
  const { link } = useParams<{ link: string }>();
  const query = link.substring(6, link.length);
  const { request, data } = useRequest<DevicesProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      catalog.searchDevices.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(catalog.searchDevices.action(query));

  return (
    <div className="main-container">
      <div className="gadgets">
        <Header />
        <Categories />
        <Products products={data} />
        <Footer />
      </div>
    </div>
  );
};
