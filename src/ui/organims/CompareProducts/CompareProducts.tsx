import React from 'react';
import { Link, useHistory } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';
import { Button } from 'ui/atoms';

import './CompareProducts.scss';

const productProperty: { [key: string]: string } = {
  manufacturer: 'manufacturer',
  model: 'model',
  segment: 'segment',
  display: 'display',
  displayType: 'displayType',
  resolution: 'resolution',
  color: 'color',
  memory: 'ram',
  hardDrive: 'memory',
  chargingTime: 'chargingTime',
  workingTimeDays: 'workingTime',
  workingTimeHours: 'workingTime',
  power: 'power',
  batteryCapacity: 'batteryCapacity',
  batteryType: 'batteryType',
  chipset: 'chipset',
  cores: 'cores',
  camera: 'camera',
  frontCamera: 'frontCamera',
  videoCard: 'videoCard',
  videoCardMemory: 'videoCardMemory',
  weight: 'weight',
  supportedWeight: 'supportedWeight',
  touchScreen: 'touchScreen',
  workingDistance: 'workingDistance',
  material: 'material',
  maxSpeed: 'maxSpeed',
  audioFrequency: 'audioFrequency',
  audioFormats: 'audioFormats',
  usbConnectors: 'usbConnectors',
  hdmi: 'hdmi',
  interface: 'interface',
  errorRange: 'errorRange',
  measurementLevel: 'measurementLevel',
  sensitivity: 'sensitivity',
  impendance: 'impendance',
  microphone: 'microphone',
  connectionType: 'connectionType',
  wireLength: 'wireLength',
  coldAir: 'coldAir',
  temperatureLevels: 'temperatureLevels',
  gears: 'gears',
  dimensions: 'dimensions',
  releaseDate: 'releaseDate',
  wheelDiameter: 'wheelDiameter',
  speedsNumber: 'speedsNumber',
  brakeType: 'brakeType',
  rimMaterial: 'rimMaterial',
  frameMaterial: 'frameMaterial',
  frameDiameter: 'frameDiameter',
  memoryCard: 'memoryCard',
  diaphragm: 'diaphragm',
  focalDistance: 'focalDistance',
  opticalZoom: 'opticalZoom',
  refreshRate: 'refreshRate',
  electricRange: 'Electric Range'
};

export const CompareProducts = () => {
  const { userCompare, addToCompare } = React.useContext(DeviceContext);
  const [loading, setLoading] = React.useState<boolean>(true);

  const { t } = useIntl();
  const { push } = useHistory();

  const activeProperties = React.useMemo(() => {
    const key = Object.keys(productProperty)
      .filter((i) => {
        const findProperties = userCompare.filter((device) => device[i]);
        return findProperties.length > 0;
      })
      .map((x) => productProperty[x])
      .filter((elem, index, self) => index === self.indexOf(elem));
    return key;
  }, [userCompare]);

  const ProductProps = React.useMemo(
    () =>
      Object.keys(productProperty).reduce(
        (acc, i) => ({
          ...acc,
          [`${i}`]: userCompare.some((device) => device[i])
        }),
        {} as any
      ),

    [userCompare]
  );

  React.useEffect(() => {
    if (userCompare.length === 0 && loading === false) {
      return push('Main');
    }

    return () => {
      setLoading(false);
    };
    // eslint-disable-next-line
  }, [userCompare.length, loading]);

  return (
    <>
      {userCompare?.length > 0 && (
        <div className="compare-products-main">
          <div className="compare-products-main__image-wrapper">
            <div></div>
            {userCompare.map((device) => (
              <div className="compare-products-main__image" key={device.id}>
                <Link route="DeviceInfo" params={{ link: device.link }}>
                  <img src={device.imageUrl} alt={device.name} />
                </Link>
                <Button
                  className="compare-products-main__button"
                  onClick={() => addToCompare(device)}
                >
                  {t('delete')}
                </Button>
              </div>
            ))}
          </div>
          <div className="compare-products">
            <div className="compare-products__title-wrapper">
              {activeProperties &&
                activeProperties.map((device, key) => (
                  <div className="compare-products__cards-title" key={key}>
                    {device === 'hdmi' ? 'HDMI' : t(`${device}`)}
                  </div>
                ))}
            </div>

            {userCompare &&
              userCompare.map((device) => (
                <div className="compare-products__wrapper" key={device.id}>
                  {device.manufacturer !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.manufacturer}
                    </div>
                  ) : ProductProps.manufacturer ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.model !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.model}
                    </div>
                  ) : ProductProps.model ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.segment !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.segment}
                    </div>
                  ) : ProductProps.segment ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.display !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.display}
                    </div>
                  ) : ProductProps.display ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.displayType !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.displayType}
                    </div>
                  ) : ProductProps.displayType ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.resolution !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.resolution} {t('px')}
                    </div>
                  ) : ProductProps.resolution ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.color !== undefined ? (
                    <div
                      className="compare-products__cards-info"
                      style={{
                        backgroundColor: device.color
                      }}
                    ></div>
                  ) : ProductProps.color ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.memory !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.memory} GB
                    </div>
                  ) : ProductProps.memory ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.hardDrive !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.hardDrive} GB
                    </div>
                  ) : ProductProps.hardDrive ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.chargingTime !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.chargingTime} {t('hours')}
                    </div>
                  ) : ProductProps.chargingTime ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.workingTimeDays ||
                  device.workingTimeHours !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.workingTimeDays
                        ? device.workingTimeDays
                        : device.workingTimeHours}{' '}
                      {device.workingTimeDays ? t('days') : t('hours')}
                    </div>
                  ) : ProductProps.workingTimeDays ||
                    ProductProps.workingTimeHours ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.power !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.power} W
                    </div>
                  ) : ProductProps.power ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.batteryCapacity !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.batteryCapacity} {t('mah')}
                    </div>
                  ) : ProductProps.batteryCapacity ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.batteryType !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.batteryType}
                    </div>
                  ) : ProductProps.batteryType ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.chipset !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.chipset}
                    </div>
                  ) : ProductProps.chipset ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.cores !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.cores}
                    </div>
                  ) : ProductProps.cores ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.camera !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.camera} {t('mpx')}
                    </div>
                  ) : ProductProps.camera ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.frontCamera !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.frontCamera} {t('mpx')}
                    </div>
                  ) : ProductProps.frontCamera ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.videoCard !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.videoCard}
                    </div>
                  ) : ProductProps.videoCard ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.videoCardMemory !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.videoCardMemory} GB
                    </div>
                  ) : ProductProps.videoCardMemory ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.weight !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.weight.toString().split('').length >= 4
                        ? (device.weight * 0.001).toFixed(1)
                        : device.weight}{' '}
                      {device.weight.toString().split('').length >= 4
                        ? t('kilogram')
                        : t('gram')}
                    </div>
                  ) : ProductProps.weight ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.supportedWeight !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.supportedWeight} {t('kilogram')}
                    </div>
                  ) : ProductProps.supportedWeight ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.touchScreen !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.touchScreen === true ? t('true') : t('false')}
                    </div>
                  ) : ProductProps.touchScreen ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.material !== undefined ? (
                    <div className="compare-products__cards-info">
                      {t(`${device.material}`)}
                    </div>
                  ) : ProductProps.material ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.maxSpeed !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.maxSpeed}km/h
                    </div>
                  ) : ProductProps.maxSpeed ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.errorRange !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.errorRange}
                    </div>
                  ) : ProductProps.errorRange ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.measurementLevel !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.measurementLevel}
                    </div>
                  ) : ProductProps.measurementLevel ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.workingDistance !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.workingDistance}
                    </div>
                  ) : ProductProps.workingDistance ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.audioFrequency !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.audioFrequency}
                    </div>
                  ) : ProductProps.audioFrequency ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.audioFormats !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.audioFormats.join(', ')}
                    </div>
                  ) : ProductProps.audioFormats ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.usbConnectors !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.usbConnectors}
                    </div>
                  ) : ProductProps.usbConnectors ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.hdmi !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.hdmi}
                    </div>
                  ) : ProductProps.hdmi ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.interface !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.interface.join(', ')}
                    </div>
                  ) : ProductProps.interface ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.sensitivity !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.sensitivity} dB
                    </div>
                  ) : ProductProps.sensitivity ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.impendance !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.impendance} Ω
                    </div>
                  ) : ProductProps.impendance ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.microphone !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.microphone === true ? t('true') : t('false')}
                    </div>
                  ) : ProductProps.microphone ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.connectionType !== undefined ? (
                    <div className="compare-products__cards-info">
                      {t(`${device.connectionType}`)}
                    </div>
                  ) : ProductProps.connectionType ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.wireLength !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.wireLength}
                    </div>
                  ) : ProductProps.wireLength ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.coldAir !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.coldAir === true ? t('true') : t('false')}
                    </div>
                  ) : ProductProps.coldAir ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.temperatureLevels !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.temperatureLevels}
                    </div>
                  ) : ProductProps.temperatureLevels ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.gears !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.gears}
                    </div>
                  ) : ProductProps.gears ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.dimensions !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.dimensions}
                    </div>
                  ) : ProductProps.dimensions ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.releaseDate !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.releaseDate}
                    </div>
                  ) : ProductProps.releaseDate ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.wheelDiameter !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.wheelDiameter}"
                    </div>
                  ) : ProductProps.wheelDiameter ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.speedsNumber !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.speedsNumber}
                    </div>
                  ) : ProductProps.speedsNumber ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.brakeType !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.brakeType}
                    </div>
                  ) : ProductProps.brakeType ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.rimMaterial !== undefined ? (
                    <div className="compare-products__cards-info">
                      {t(`${device.rimMaterial}`)}
                    </div>
                  ) : ProductProps.rimMaterial ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.frameMaterial !== undefined ? (
                    <div className="compare-products__cards-info">
                      {t(`${device.frameMaterial}`)}
                    </div>
                  ) : ProductProps.frameMaterial ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.frameDiameter !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.frameDiameter}"
                    </div>
                  ) : ProductProps.frameDiameter ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.memoryCard !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.memoryCard.join(', ')}
                    </div>
                  ) : ProductProps.memoryCard ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.diaphragm !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.diaphragm}
                    </div>
                  ) : ProductProps.diaphragm ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.focalDistance !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.focalDistance}
                    </div>
                  ) : ProductProps.focalDistance ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.opticalZoom !== undefined ? (
                    <div className="compare-products__cards-info">
                      x{device.opticalZoom}
                    </div>
                  ) : ProductProps.opticalZoom ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.refreshRate !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.refreshRate}
                    </div>
                  ) : ProductProps.refreshRate ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                  {device.electricRange !== undefined ? (
                    <div className="compare-products__cards-info">
                      {device.electricRange}km/h
                    </div>
                  ) : ProductProps.electricRange ? (
                    <div className="compare-products__cards-info">-</div>
                  ) : (
                    ''
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
