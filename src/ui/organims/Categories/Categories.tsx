import React from 'react';
import { useRequest } from 'estafette';
import { useIntl } from 'estafette-intl';
import { categoriesTypes } from 'libs/http/api';

import './Categories.scss';

export const Categories = () => {
  const { t } = useIntl();
  const { request, data } = useRequest<any>();

  React.useEffect(() => {
    onFetch();

    return () => {
      categoriesTypes.cancel();
    };
    //eslint-disable-next-line
  }, []);

  const onFetch = () => request(categoriesTypes.action());

  console.log(data, 'categories');

  return (
    <div className="categories">
      {data &&
        data.map((cat: any) => (
          <a className="categories__card" href={cat.link} key={cat.id}>
            <div className="categories__img">
              <img
                src={cat.imgUrl}
                alt={cat.name}
                onMouseOver={(e) => (e.currentTarget.src = cat.imgHover)}
                onMouseOut={(e) => (e.currentTarget.src = cat.imgUrl)}
              />
            </div>
            <div className="categories__title">
              <span>{t(`${cat.translate}`)}</span>
            </div>
          </a>
        ))}
    </div>
  );
};
