import React from 'react';
import { useRequest } from 'estafette';
import { useParams } from 'estafette-router';
import { Footer, Header } from 'ui/organims';
import { Categories, DeviceProduct } from 'ui/molecules';
import { catalog, DevicesProps } from 'libs/http/api';

export const DeviceInfo = () => {
  const { link } = useParams<{ link: string }>();

  const { request, data } = useRequest<DevicesProps>();

  React.useEffect(() => {
    onFetch();

    return () => {
      catalog.device.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(catalog.device.action(link));

  const deviceData = React.useMemo(() => data, [data]);

  React.useEffect(() => {
    if (deviceData.link && link !== deviceData.link) {
      return window.location.reload();
    }
  }, [link, deviceData.link]);

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
