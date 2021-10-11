import React from 'react';
import { useRequest } from 'estafette';
import { useIntl } from 'estafette-intl';
import { categoriesTypes, CategoriesTypesProps } from 'libs/http/api';

import './Categories.scss';

export const Categories = () => {
  const { t } = useIntl();
  const { request, data } = useRequest<CategoriesTypesProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      categoriesTypes.cancel();
    };
    //eslint-disable-next-line
  }, []);

  const onFetch = () => request(categoriesTypes.action());

  const categoriesData = React.useMemo(() => data, [data]);

  return (
    <div className="categories">
      {categoriesData &&
        categoriesData.map((cat) => (
          <a
            className="categories__card"
            href={cat.link}
            key={cat.id}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = `${cat.shadowColor}`)
            }
            onMouseOut={(e) => (e.currentTarget.style.color = `#fff`)}
          >
            <div
              className="categories__img"
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 16px 8px ${cat.shadowColor}`)
              }
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = `none`)}
            >
              <img src={cat.imgUrl && cat.imgUrl} alt={cat.name} />
            </div>
            <div className="categories__title">
              <span>{t(`${cat.translate}`)}</span>
            </div>
          </a>
        ))}
    </div>
  );
};
