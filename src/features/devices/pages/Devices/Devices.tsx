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
  const { link, properties } = useParams<{
    link: string;
    properties: string;
  }>();

  React.useEffect(() => {
    if (devicesData && link) {
      setFilter(devicesData.filter((item) => item.type.match(link)));
    }
    if (devicesData && link === 'apple') {
      setFilter(devicesData.filter((item) => item.manufacturer === 'Apple'));
    }
    if (
      devicesData.find((item) =>
        Object.values(item).some((prop: any) =>
          prop.toString().match(properties)
        )
      )
    ) {
      const meta = devicesData.filter((item) => {
        const x = Object.values(item);
        const y = x.some(
          (i) => link && item.type.match(link) && i.toString().match(properties)
        );
        return y;
      });
      setFilter(meta);
      console.log(meta);
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
