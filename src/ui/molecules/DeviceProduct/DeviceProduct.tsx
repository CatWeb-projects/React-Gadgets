import React from 'react';
import { Link } from 'estafette-router';
import { DevicesProps } from 'libs/http/api';

import './DeviceProduct.scss';

interface Props {
  deviceData?: DevicesProps;
}

export const DeviceProduct: React.FC<Props> = ({ deviceData }) => {
  console.log(deviceData, 'deviceData');
  return (
    <div className="device-product">
      {deviceData && (
        <div className="device-product__wrapper">
          <div className="device-product__name">
            <h3>{deviceData.name}</h3>
          </div>
          <div className="device-product__info">
            <div className="device-product__info-image">
              <img src={deviceData.imageUrl} alt={deviceData.name} />
            </div>
            <div className="device-product__info-specifications">
              <div className="device-product__info-specifications-colors">
                <span>Culoare</span>
                {deviceData.colors &&
                  deviceData.colors.map((color, key) => (
                    <div
                      className="device-color"
                      style={{ backgroundColor: color }}
                      key={key}
                    ></div>
                  ))}
              </div>
              <ul className="device-product__info-specs">
                <li>Camera : {deviceData.camera} Mpx</li>
                <li>Camera frontala : {deviceData.frontCamera} Mpx</li>
                <li>Chipset : {deviceData.chipset}</li>
                <li>Tip procesor : {deviceData.processor}</li>
                <li>Rezolutie : {deviceData.resolution}</li>
                <li>Memorie interna : {deviceData.hardDrive} GB</li>
                <li>Memorie RAM : {deviceData.memory} GB</li>
              </ul>
            </div>
            <div className="device-product__info-buy">
              <div className="device-product__info-price">
                {deviceData.price}
              </div>
              <Link>cumpara</Link>
              <div className="device-product__info-credit"></div>
              <div className="device-product__info-cashback"></div>
              <Link>solicita credit</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
