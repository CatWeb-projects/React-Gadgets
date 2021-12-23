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
        categoriesData.map((cat) => (
          <Link
            className={`categories__card ${cat.link.slice(1)}`}
            route="Devices"
            params={{ link: cat?.link.slice(1) }}
            key={cat.id}
            // onMouseOver={(e) =>
            //   (e.currentTarget.style.color = `${cat.shadowColor}`)
            // }
            // onMouseOut={(e) => (e.currentTarget.style.color = `#fff`)}
          >
            <div
              className="categories__img"
              // onMouseOver={(e) =>
              //   (e.currentTarget.style.boxShadow = `0 0 16px 8px ${cat.shadowColor}`)
              // }
              // onMouseOut={(e) => (e.currentTarget.style.boxShadow = `none`)}
            >
              <img src={cat?.imgUrl} alt={cat.name} />
            </div>
            <div className="categories__title">
              <span>{t(`${cat.translate}`)}</span>
            </div>
          </Link>
        ))}
    </div>
  );
};
