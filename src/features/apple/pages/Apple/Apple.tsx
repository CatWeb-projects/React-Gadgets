import React from 'react';
import { Footer, Header, Products } from 'ui/organims';
import { DevicesProps } from 'libs/http/api';
import { Categories } from 'ui/molecules';
import { DeviceContext } from 'contexts/Devices-Context';

export const Apple = () => {
  const { devicesData } = React.useContext(DeviceContext);

  const [filter, setFilter] = React.useState<DevicesProps[]>([]);

  React.useEffect(() => {
    if (devicesData) {
      setFilter(
        devicesData.filter((device) => device.manufacturer === 'Apple')
      );
    }

    return () => {};
  }, [devicesData]);

  return (
    <div className="main-container">
      <div className="gadgets">
        <Header />
        <Categories />
        {filter && <Products products={filter} />}
        <Categories />
        <Footer />
      </div>
    </div>
  );
};
