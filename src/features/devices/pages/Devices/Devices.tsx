import React from 'react';
import { useParams } from 'estafette-router';
import { DeviceContext } from 'contexts/Devices-Context';
import { Footer, Header, Products } from 'ui/organims';
import { Categories } from 'ui/molecules';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { DevicesProps } from 'libs/http/api';

export const Devices = () => {
  const { devicesData } = React.useContext(DeviceContext);
  const [filter, setFilter] = React.useState<DevicesProps[]>([]);
  const { link, properties } =
    useParams<{ link: string; properties: string }>();

  React.useEffect(() => {
    if (link) {
      setFilter(devicesData.filter((item) => item.type.match(link)));
    }
    if (link === 'apple') {
      setFilter(devicesData.filter((item) => item.manufacturer === 'Apple'));
    }
    if (
      devicesData.find((item) => item.manufacturer.toLowerCase() === properties)
    ) {
      setFilter(
        devicesData.filter(
          (item) =>
            item.manufacturer.toLowerCase() === properties &&
            item.type.match(link)
        )
      );
    }
  }, [devicesData, link, properties]);

  useScrollToTop();

  return (
    <div className="main-container">
      <div className="devices">
        <Header />
        <Categories />
        <Products products={filter} />
        {filter?.length > 4 && <Categories />}
        <Footer />
      </div>
    </div>
  );
};
