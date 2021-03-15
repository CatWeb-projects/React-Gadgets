import React from 'react';
import { Redirect, useParams } from 'estafette-router';

export const DeviceInfo = () => {
  const { link } = useParams<any>();

  console.log(link);

  if (link) {
    return <Redirect toRoute="DeviceInfo" toParams={{ link: link }} />;
  }

  return (
    <div className="device-info">
      <div>Hello Devices</div>
    </div>
  );
};
