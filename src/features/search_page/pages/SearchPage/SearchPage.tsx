import React from 'react';
import { useRequest } from 'estafette';
import { useParams } from 'estafette-router';
import { Footer, Header, Products } from 'ui/organims';
import { Categories } from 'ui/molecules';
import { catalog, DevicesProps } from 'libs/http/api';

export const SearchPage = () => {
  const { link } = useParams<{ link: string }>();
  const { request, data } = useRequest<DevicesProps[]>();
  const query = link.substring(6, link.length);

  React.useEffect(() => {
    onFetch();

    return () => {
      catalog.searchDevices.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(catalog.searchDevices.action(query));

  const searchData = React.useMemo(() => data, [data]);

  return (
    <div className="main-container">
      <div className="gadgets">
        <Header />
        <Categories />
        <Products products={searchData} />
        {searchData?.length > 4 && <Categories />}
        <Footer />
      </div>
    </div>
  );
};
