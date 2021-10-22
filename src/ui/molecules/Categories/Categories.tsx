import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { categoriesTypes, CategoriesTypesProps } from 'libs/http/api';

import './Categories.scss';

export const Categories = () => {
  const { request, data: categoriesData } =
    useRequest<CategoriesTypesProps[]>();

  const { t } = useIntl();

  React.useEffect(() => {
    onFetch();

    return () => {
      categoriesTypes.cancel();
    };
    //eslint-disable-next-line
  }, []);

  const onFetch = () => request(categoriesTypes.action());

  return (
    <div className="categories">
      {categoriesData &&
        categoriesData.map((cat) => (
          <Link
            className={`categories__card ${cat.link.slice(1)}`}
            route="Devices"
            params={{ link: cat.link.slice(1) }}
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
              <img src={cat.imgUrl && cat.imgUrl} alt={cat.name} />
            </div>
            <div className="categories__title">
              <span>{t(`${cat.translate}`)}</span>
            </div>
          </Link>
        ))}
    </div>
  );
};
