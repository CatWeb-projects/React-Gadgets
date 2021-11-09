import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';

import './CompareProducts.scss';

const productProperty = {
  manufacturer: 'manufacturer',
  model: 'model',
  segment: 'segment',
  display: 'display',
  displayType: 'displayType',
  resolution: 'resolution',
  color: 'color',
  memory: 'ram',
  hardDrive: 'memory',
  workingTimeDays: 'workingTime',
  power: 'power',
  batteryCapacity: 'batteryCapacity',
  chipset: 'chipset',
  cores: 'cores',
  camera: 'camera',
  frontCamera: 'frontCamera',
  videoCard: 'videoCard',
  videoCardMemory: 'videoCardMemory',
  weight: 'weight'
};

export const CompareProducts = () => {
  const { compare } = React.useContext(DeviceContext);

  const { t } = useIntl();

  const activeProperties = React.useMemo(() => {
    const key = Object.keys(productProperty).filter((i) => {
      const findProperties = compare.filter((item) => item[i]);
      return findProperties.length > 0;
    });
    return key;
  }, [compare]);

  const ProductProps = React.useMemo(
    () =>
      Object.keys(productProperty).reduce(
        (acc, i) => ({
          ...acc,
          [`${i}`]: compare.some((item) => item[i])
        }),
        {} as any
      ),

    [compare]
  );

  return (
    <div className="compare-products-main">
      <div className="compare-products-main__image-wrapper">
        <div></div>
        {compare &&
          compare.map((item) => (
            <div className="compare-products-main__image" key={item.id}>
              <Link route="DeviceInfo" params={{ link: item.link }}>
                <img src={item.imageUrl} alt={item.name} />
              </Link>
            </div>
          ))}
      </div>
      <div className="compare-products">
        <div className="compare-products__title-wrapper">
          {activeProperties &&
            activeProperties.map((item, key) => (
              <div className="compare-products__cards-title" key={key}>
                {t(`${item === 'workingTimeDays' ? 'workingTime' : item}`)}
              </div>
            ))}
        </div>

        {compare &&
          compare.map((item) => (
            <div className="compare-products__wrapper" key={item.id}>
              {item.manufacturer !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.manufacturer}
                </div>
              ) : ProductProps.manufacturer ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.model !== undefined ? (
                <div className="compare-products__cards-info">{item.model}</div>
              ) : ProductProps.model ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.segment !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.segment}
                </div>
              ) : ProductProps.segment ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.display !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.display}
                </div>
              ) : ProductProps.display ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.displayType !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.displayType}
                </div>
              ) : ProductProps.displayType ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.resolution !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.resolution} {t('px')}
                </div>
              ) : ProductProps.resolution ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.color !== undefined ? (
                <div className="compare-products__cards-info">{item.color}</div>
              ) : ProductProps.color ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.memory !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.memory} GB
                </div>
              ) : ProductProps.memory ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.hardDrive !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.hardDrive} GB
                </div>
              ) : ProductProps.hardDrive ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.workingTimeDays || item.workingTimeHours !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.workingTimeDays
                    ? item.workingTimeDays
                    : item.workingTimeHours}{' '}
                  {item.workingTimeDays ? t('days') : t('hours')}
                </div>
              ) : ProductProps.workingTimeDays ||
                ProductProps.workingTimeHours ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.power !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.power} W
                </div>
              ) : ProductProps.power ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.batteryCapacity !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.batteryCapacity} {t('mah')}
                </div>
              ) : ProductProps.batteryCapacity ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.chipset !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.chipset}
                </div>
              ) : ProductProps.chipset ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.cores !== undefined ? (
                <div className="compare-products__cards-info">{item.cores}</div>
              ) : ProductProps.cores ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.camera !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.camera} {t('mpx')}
                </div>
              ) : ProductProps.camera ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.frontCamera !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.frontCamera} {t('mpx')}
                </div>
              ) : ProductProps.frontCamera ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.videoCard !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.videoCard}
                </div>
              ) : ProductProps.videoCard ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.videoCardMemory !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.videoCardMemory} GB
                </div>
              ) : ProductProps.videoCardMemory ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.weight !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.weight.toString().split('').length >= 4
                    ? (item.weight * 0.001).toFixed(1)
                    : item.weight}{' '}
                  {item.weight.toString().split('').length >= 4
                    ? t('kilogram')
                    : t('gram')}
                </div>
              ) : ProductProps.weight ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
