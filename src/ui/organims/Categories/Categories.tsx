import React from 'react';
import { useRequest } from 'estafette';
import { useIntl } from 'estafette-intl';
import { categoriesTypes } from 'libs/http/api';

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
            <div>
              <img src={cat.imgUrl} alt="" />
            </div>
            <div>
              <span>{t(`${cat.translate}`)}</span>
            </div>
          </a>
        ))}
    </div>
  );
};
