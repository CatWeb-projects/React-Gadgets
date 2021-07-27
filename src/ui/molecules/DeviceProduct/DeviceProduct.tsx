import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DevicesProps } from 'libs/http/api';

import './DeviceProduct.scss';

interface Props {
  deviceData?: DevicesProps;
}

export const DeviceProduct: React.FC<Props> = ({ deviceData }) => {
  const { t } = useIntl();

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
              {deviceData.colors && (
                <div className="device-product__options-colors">
                  <span>Culoare</span>
                  <div className="device-product__options-colors-wrapper">
                    {deviceData.colors.map((color, key) => (
                      <a
                        href={`/device/${deviceData.link
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
              )}
              {deviceData.memoryOptions && (
                <div className="device-product__options-memory">
                  <span>Memorie</span>
                  <div className="device-product__options-memory-wrapper">
                    {deviceData.memoryOptions.map((memory, key) => (
                      <a
                        href={`/device/${deviceData.link
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
              )}
              <ul className="device-product__info-specs">
                {deviceData.segment && <li>Segment : {deviceData.segment}</li>}
                {deviceData.camera && <li>Camera : {deviceData.camera} Mpx</li>}
                {deviceData.frontCamera && (
                  <li>Camera frontala : {deviceData.frontCamera} Mpx</li>
                )}
                {deviceData.chipset && <li>Chipset : {deviceData.chipset}</li>}
                {deviceData.cores && <li>Nr.nuclee : {deviceData.cores}</li>}
                {deviceData.chipsetFrequency && (
                  <li>Frecvența procesor : {deviceData.chipsetFrequency}</li>
                )}
                {deviceData.processor && (
                  <li>Tip procesor : {deviceData.processor}</li>
                )}
                {deviceData.resolution && (
                  <li>Rezolutie : {deviceData.resolution}</li>
                )}
                {deviceData.hardDrive && (
                  <li>Memorie interna : {deviceData.hardDrive} GB</li>
                )}
                {deviceData.memory && (
                  <li>Memorie RAM : {deviceData.memory} GB</li>
                )}
                {deviceData.displayType && (
                  <li>Display : {deviceData.displayType}</li>
                )}
                {deviceData.videoCard && (
                  <li>Model placă video : {deviceData.videoCard}</li>
                )}
                {deviceData.videoCardMemory && (
                  <li>Memorie video : {deviceData.videoCardMemory} GB</li>
                )}
              </ul>
            </div>
            <div className="device-product__info-buy">
              <div className="device-product__info-price">
                {`${deviceData.price} ${t('lei')}`}
              </div>
              <Link to="/checkout" className="device-product__buy">
                {t('buy')}
              </Link>
              <div className="device-product__info-credit">{`${
                deviceData.credit
              } ${t('credit')}`}</div>
              <div className="device-product__info-cashback">{`Cashback ${
                deviceData.cashback
              } ${t('lei')}`}</div>
              <Link to="/credit" className="device-product__credit">
                {t('buy_credit')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
