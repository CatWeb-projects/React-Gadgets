import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';

import './CompareProducts.scss';

const productProperty: any = {
  manufacturer: 'manufacturer',
  model: 'model',
  workingTimeDays: 'workingTime',
  power: 'power',
  display: 'display',
  batteryCapacity: 'batteryCapacity',
  chipset: 'chipset'
};

export const CompareProducts = () => {
  const { compare } = React.useContext(DeviceContext);

  const { t } = useIntl();

  const activeProperties = React.useMemo(() => {
    const key = Object.keys(productProperty).filter((i) => {
      const findProperties = compare.filter((item: any) => item[i]);
      return findProperties.length > 0;
    });
    return key;
  }, [compare]);

  return (
    <div className="compare-products-main">
      <div className="compare-products-main__image-wrapper">
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
                {t(`${item}`)}
              </div>
            ))}
        </div>

        {compare &&
          compare.map((item) => (
            <div className="compare-products__wrapper" key={item.id}>
              {item.manufacturer ? (
                <div className="compare-products__cards-info">
                  {item.manufacturer}
                </div>
              ) : (
                ''
              )}
              {item.model ? (
                <div className="compare-products__cards-info">{item.model}</div>
              ) : (
                ''
              )}
              {item.workingTimeDays !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.workingTimeDays}
                  days
                </div>
              ) : item.workingTimeDays === undefined ? (
                <div className="compare-products__cards-info">- days</div>
              ) : (
                ''
              )}
              {item.power !== undefined ? (
                <div className="compare-products__cards-info">{item.power}</div>
              ) : [...compare, { ...item, power: item.power }].length > 0 ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.display !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.display}
                </div>
              ) : item.display === undefined ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.batteryCapacity !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.batteryCapacity}
                </div>
              ) : item.batteryCapacity === undefined ? (
                <div className="compare-products__cards-info">-</div>
              ) : (
                ''
              )}
              {item.chipset !== undefined ? (
                <div className="compare-products__cards-info">
                  {item.chipset}
                </div>
              ) : item.chipset === undefined ? (
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
