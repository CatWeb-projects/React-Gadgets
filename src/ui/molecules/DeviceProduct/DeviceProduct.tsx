import React from 'react';
import { Link } from 'estafette-router';
import { DevicesProps } from 'libs/http/api';

import './DeviceProduct.scss';

interface Props {
  deviceData?: DevicesProps;
}

export const DeviceProduct: React.FC<Props> = ({ deviceData }) => {
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
              <div className="device-product__options-colors">
                <span>Culoare</span>
                <div className="device-product__options-colors-wrapper">
                  {deviceData.colors &&
                    deviceData.colors.map((color, key) => (
                      <a
                        href={`/phones/${deviceData.link
                          .split('-')
                          .slice(0, -3)
                          .join('-')}-${deviceData.hardDrive}-gb-${color}`}
                        key={key}
                      >
                        <div
                          className={
                            color === deviceData.color.toLowerCase()
                              ? 'device-color is-active'
                              : 'device-color'
                          }
                          style={{ backgroundColor: color }}
                        ></div>
                      </a>
                    ))}
                </div>
              </div>
              <div className="device-product__options-memory">
                <span>Culoare</span>
                <div className="device-product__options-memory-wrapper">
                  {deviceData.memoryOptions &&
                    deviceData.memoryOptions.map((memory, key) => (
                      <a
                        href={`${deviceData.link
                          .split('-')
                          .slice(0, -3)
                          .join(
                            '-'
                          )}-${memory}-gb-${deviceData.color.toLowerCase()}`}
                        key={key}
                      >
                        <div
                          className={
                            memory === deviceData.hardDrive
                              ? 'memory-option is-selected'
                              : 'memory-option'
                          }
                        >
                          {memory} GB
                        </div>
                      </a>
                    ))}
                </div>
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
