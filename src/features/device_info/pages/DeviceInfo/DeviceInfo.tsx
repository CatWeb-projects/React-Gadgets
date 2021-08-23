import React from 'react';
import { useRequest } from 'estafette';
import { useParams } from 'estafette-router';
import { Footer, Header } from 'ui/organims';
import { Categories, DeviceProduct } from 'ui/molecules';
import { catalog, DevicesProps } from 'libs/http/api';

export const DeviceInfo = () => {
  const { request, data: phoneData } = useRequest<DevicesProps>({ data: {} });
  const { request: requestLaptop, data: laptopData } = useRequest<DevicesProps>(
    { data: {} }
  );
  const { link } = useParams<{ link: string }>();

  React.useEffect(() => {
    onFetchPhoneData();
    onFetchLaptopData();

    return () => {
      catalog.phone.cancel();
      catalog.laptop.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetchPhoneData = () => request(catalog.phone.action(link));
  const onFetchLaptopData = () => requestLaptop(catalog.laptop.action(link));

  const deviceData: DevicesProps = phoneData ? phoneData : laptopData;
  React.useMemo(() => deviceData, [deviceData]);

  return (
    <div className="main-container">
      <div className="device-info">
        <Header />
        <Categories />
        <DeviceProduct deviceData={deviceData} />
        <Footer />
      </div>
    </div>
  );
};
