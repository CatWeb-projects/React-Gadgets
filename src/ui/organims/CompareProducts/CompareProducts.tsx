import React from 'react';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';

import './CompareProducts.scss';

const productProperty = [
  'manufacturer',
  'model',
  'workingTimeDays',
  'power',
  'display'
];

export const CompareProducts = () => {
  const { compare } = React.useContext(DeviceContext);

  const { t } = useIntl();

  const activeProperties = React.useMemo(() => {
    return productProperty.filter((i) => {
      const findProperties = compare.filter((item: any) => item[i]);
      return findProperties.length > 0;
    });
  }, [compare]);

  return (
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
            {item.workingTimeDays ? (
              <div className="compare-products__cards-info">
                {item.workingTimeDays}
              </div>
            ) : (
              ''
            )}
            {item.power ? (
              <div className="compare-products__cards-info">{item.power}</div>
            ) : (
              ''
            )}
            {item.display ? (
              <div className="compare-products__cards-info">
                {item.display ? item.display : '-'}
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
    </div>
  );
};
