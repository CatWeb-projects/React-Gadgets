import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';
import { DevicesProps } from 'libs/http/api';
import { Button, Icon } from 'ui/atoms';

import './DeviceProduct.scss';

interface Props {
  deviceData?: DevicesProps;
}

export const DeviceProduct: React.FC<Props> = ({ deviceData }) => {
  const { authVerify, favorites, userSave, addFavorites } =
    React.useContext(DeviceContext);

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
                      <Link
                        to={
                          deviceData.colors.length === 1
                            ? `/device/${deviceData.link}`
                            : deviceData.memoryOptions === undefined
                            ? `/device/${deviceData.link
                                .split('-')
                                .slice(0, -1)
                                .join('-')}-${color}`
                            : `/device/${deviceData.link
                                .split('-')
                                .slice(0, -3)
                                .join('-')}-${deviceData.hardDrive}-gb-${color}`
                        }
                        key={key}
                      >
                        <div
                          className={
                            deviceData.color.toLowerCase().match(color)
                              ? 'device-color is-active'
                              : 'device-color'
                          }
                          style={{
                            backgroundColor: Object.values(color).join('')
                          }}
                        ></div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {deviceData.memoryOptions && (
                <div className="device-product__options-memory">
                  <span>{t('memory')}</span>
                  <div className="device-product__options-memory-wrapper">
                    {deviceData.memoryOptions.map((memory, key) => (
                      <Link
                        to={
                          deviceData.memoryOptions.length === 1
                            ? `/device/${deviceData.link}`
                            : `/device/${deviceData.link
                                .split('-')
                                .slice(0, -3)
                                .join(
                                  '-'
                                )}-${memory}-gb-${deviceData.color.toLowerCase()}`
                        }
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
                      </Link>
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
                {deviceData.weight && (
                  <li>
                    {t('weight')} :{' '}
                    {deviceData.weight.toString().split('').length >= 4
                      ? (deviceData.weight * 0.001).toFixed(1)
                      : deviceData.weight}
                    {deviceData.weight.toString().split('').length >= 4
                      ? t('kilogram')
                      : t('gram')}
                  </li>
                )}
                {deviceData.touchScreen && (
                  <li>
                    {t('touchScreen')} :{' '}
                    {deviceData.touchScreen === true ? t('true') : t('false')}
                  </li>
                )}
                {deviceData.chargingTime && (
                  <li>
                    {t('chargingTime')} : {deviceData.chargingTime} {t('hours')}
                  </li>
                )}
                {deviceData.workingTimeDays ||
                  (deviceData.workingTimeHours && (
                    <li>
                      {t('workingTime')} :{' '}
                      {deviceData.workingTimeDays
                        ? deviceData.workingTimeDays
                        : deviceData.workingTimeHours}{' '}
                      {deviceData.workingTimeDays ? t('days') : t('hours')}
                    </li>
                  ))}
                {deviceData.batteryCapacity && (
                  <li>
                    {t('batteryCapacity')} : {deviceData.batteryCapacity}{' '}
                    {t('mah')}
                  </li>
                )}
                {deviceData.bluetooth && (
                  <li>Bluetooth : v{deviceData.bluetooth.toPrecision(2)}</li>
                )}
                {deviceData.power && (
                  <li>
                    {t('power')} : {deviceData.power}W
                  </li>
                )}
                {deviceData.workingDistance && (
                  <li>
                    {t('workingDistance')} : {deviceData.workingDistance}m
                  </li>
                )}
                {deviceData.audioFrequency && (
                  <li>
                    {t('audioFrequency')} : {deviceData.audioFrequency}
                  </li>
                )}
                {deviceData.audioFormats && (
                  <li>
                    {t('audioFormats')} : {deviceData.audioFormats.join(', ')}
                  </li>
                )}
                {deviceData.usbConnectors && (
                  <li>
                    {t('usbConnectors')} : {deviceData.usbConnectors}
                  </li>
                )}
                {deviceData.interface && (
                  <li>
                    {t('interface')} : {deviceData.interface.join(', ')}
                  </li>
                )}
                {deviceData.material && (
                  <li>
                    {t('material')} : {t(`${deviceData.material}`)}
                  </li>
                )}
                {deviceData.supportedWeight && (
                  <li>
                    {t('supportedWeight')} : {deviceData.supportedWeight}
                    {t('kilogram')}
                  </li>
                )}
                {deviceData.maxSpeed && (
                  <li>
                    {t('maxSpeed')} : {deviceData.maxSpeed}km/h
                  </li>
                )}
                {deviceData.batteryType && (
                  <li>
                    {t('batteryType')} : {deviceData.batteryType}
                  </li>
                )}
                {deviceData.errorRange && (
                  <li>
                    {t('errorRange')} : {deviceData.errorRange}
                  </li>
                )}
                {deviceData.measurementLevel && (
                  <li>
                    {t('measurementLevel')} : {deviceData.measurementLevel}
                  </li>
                )}
                {deviceData.sensitivity && (
                  <li>
                    {t('sensitivity')} : {deviceData.sensitivity} dB
                  </li>
                )}
                {deviceData.impendance && (
                  <li>
                    {t('impendance')} : {deviceData.impendance} Ω
                  </li>
                )}
                {deviceData.microphone && (
                  <li>
                    {t('microphone')} :{' '}
                    {deviceData.microphone === true ? t('true') : t('false')}
                  </li>
                )}
                {deviceData.connectionType && (
                  <li>
                    {t('connectionType')} : {t(`${deviceData.connectionType}`)}
                  </li>
                )}
                {deviceData.wireLength && (
                  <li>
                    {t('wireLength')} : {deviceData.wireLength}
                  </li>
                )}
                {deviceData.coldAir && (
                  <li>
                    {t('coldAir')} :{' '}
                    {deviceData.coldAir === true ? t('true') : t('false')}
                  </li>
                )}
                {deviceData.temperatureLevels && (
                  <li>
                    {t('temperatureLevels')} : {deviceData.temperatureLevels}
                  </li>
                )}
                {deviceData.gears && (
                  <li>
                    {t('gears')} : {deviceData.gears}
                  </li>
                )}
                {deviceData.dimensions && (
                  <li>
                    {t('dimensions')} : {deviceData.dimensions}
                  </li>
                )}
              </ul>
              <div className="options-devices">
                <div className="compare-devices">
                  <Button type="black" size="full-width">
                    <Icon type="compare" />
                    {t('compare')}
                  </Button>
                </div>
                <div className="add-to-favorites">
                  <Button
                    onClick={() => addFavorites(deviceData)}
                    type="black"
                    size="full-width"
                    className={
                      authVerify &&
                      favorites.find(
                        (item) =>
                          item.name === deviceData.name &&
                          item.email === userSave
                      )
                        ? 'added-to-favorites'
                        : ''
                    }
                  >
                    <Icon type="heart" />
                    {t('favorites')}
                  </Button>
                </div>
              </div>
            </div>
            <div className="device-product__info-buy">
              {deviceData.price && (
                <div className="device-product__info-price">
                  {`${deviceData.price} ${t('lei')}`}
                </div>
              )}
              <Link to="/checkout" className="device-product__buy">
                {t('buy')}
              </Link>
              {deviceData.credit && (
                <div className="device-product__info-credit">{`${
                  deviceData.credit
                } ${t('credit')}`}</div>
              )}
              {deviceData.cashback && (
                <div className="device-product__info-cashback">{`Cashback ${
                  deviceData.cashback
                } ${t('lei')}`}</div>
              )}
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
