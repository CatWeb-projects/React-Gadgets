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
                  <span>{t('color')}</span>
                  <div className="device-product__options-colors-wrapper">
                    {deviceData.colors.map((color, key) => (
                      <a
                        href={
                          deviceData.colors.length === 1
                            ? `/device/${deviceData.link}`
                            : `/device/${deviceData.link
                                .split('-')
                                .slice(0, -3)
                                .join('-')}-${deviceData.hardDrive}-gb-${color}`
                        }
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
                  <span>{t('memory')}</span>
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
                {deviceData.segment && (
                  <li>
                    {t('segment')} : {deviceData.segment}
                  </li>
                )}
                {deviceData.camera && (
                  <li>
                    {t('camera')} : {deviceData.camera} {t('mpx')}
                  </li>
                )}
                {deviceData.frontCamera && (
                  <li>
                    {t('frontCamera')} : {deviceData.frontCamera} {t('mpx')}
                  </li>
                )}
                {deviceData.chipset && (
                  <li>
                    {t('chipset')} : {deviceData.chipset}
                  </li>
                )}
                {deviceData.cores && (
                  <li>
                    {t('cores')} : {deviceData.cores}
                  </li>
                )}
                {deviceData.chipsetFrequency && (
                  <li>
                    {t('chipsetFrequency')} : {deviceData.chipsetFrequency}
                  </li>
                )}
                {deviceData.resolution && (
                  <li>
                    {t('resolution')} : {deviceData.resolution} {t('px')}
                  </li>
                )}
                {deviceData.memory && (
                  <li>
                    {t('ram')} : {deviceData.memory} GB
                  </li>
                )}
                {deviceData.hardDrive && (
                  <li>
                    {t('memory')} : {deviceData.hardDrive} GB
                  </li>
                )}
                {deviceData.display && (
                  <li>
                    {t('display')} : {deviceData.display}
                  </li>
                )}
                {deviceData.displayType && (
                  <li>
                    {t('displayType')} : {deviceData.displayType}
                  </li>
                )}
                {deviceData.videoCard && (
                  <li>
                    {t('videoCard')} : {deviceData.videoCard}
                  </li>
                )}
                {deviceData.videoCardMemory && (
                  <li>
                    {t('videoCardMemory')} : {deviceData.videoCardMemory} GB
                  </li>
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
