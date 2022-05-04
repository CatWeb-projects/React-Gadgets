import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';

import './Categories.scss';

export const Categories = () => {
  const { categoriesData } = React.useContext(DeviceContext);

  const { t } = useIntl();

  return (
    <div className="categories">
      {categoriesData &&
        categoriesData.map((category) => (
          <Link
            className={`categories__card ${category.link.slice(1)}`}
            route="Devices"
            params={{ link: category?.link.slice(1), properties: 'all' }}
            key={category.id}
            // onMouseOver={(e) =>
            //   (e.currentTarget.style.color = `${category.shadowColor}`)
            // }
            // onMouseOut={(e) => (e.currentTarget.style.color = `#fff`)}
          >
            <div
              className="categories__img"
              // onMouseOver={(e) =>
              //   (e.currentTarget.style.boxShadow = `0 0 16px 8px ${category.shadowColor}`)
              // }
              // onMouseOut={(e) => (e.currentTarget.style.boxShadow = `none`)}
            >
              <img src={category?.imgUrl} alt={category.name} />
            </div>
            <div className="categories__title">
              <span>{t(`${category.translate}`)}</span>
            </div>
          </Link>
        ))}
    </div>
  );
};
