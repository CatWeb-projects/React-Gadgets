import React from 'react';
import { useRequest } from 'estafette';
import { useParams } from 'estafette-router';
import { Footer, Header } from 'ui/organims';
import { Categories, DeviceProduct } from 'ui/molecules';
import { catalog, DevicesProps } from 'libs/http/api';

export const DeviceInfo = () => {
  const { link } = useParams<{ link: string }>();

  const { request: requestPhones, data: phoneData } = useRequest<DevicesProps>({
    data: {}
  });
  const { request: requestLaptop, data: laptopData } = useRequest<DevicesProps>(
    { data: {} }
  );
  const {
    request: requestGadgets,
    data: gadgetsData
  } = useRequest<DevicesProps>({ data: {} });

  React.useEffect(() => {
    onFetchPhoneData();
    onFetchLaptopData();
    onFetchGadgetsData();

    return () => {
      catalog.phone.cancel();
      catalog.laptop.cancel();
      catalog.gadget.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetchPhoneData = () => requestPhones(catalog.phone.action(link));
  const onFetchLaptopData = () => requestLaptop(catalog.laptop.action(link));
  const onFetchGadgetsData = () => requestGadgets(catalog.gadget.action(link));

  // const deviceData: DevicesProps = phoneData ? phoneData : laptopData;

  let deviceData: any = {};

  const CheckDevicesAPI = () => {
    if (phoneData) {
      return (deviceData = phoneData);
    } else if (laptopData) {
      return (deviceData = laptopData);
    }
    return (deviceData = gadgetsData);
  };
  CheckDevicesAPI();

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
