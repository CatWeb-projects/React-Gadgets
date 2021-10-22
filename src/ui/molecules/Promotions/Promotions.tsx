import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { promotions, PromotionsProps } from 'libs/http/api';

import './Promotions.scss';

export const Promotions = () => {
  const { t } = useIntl();
  const { request, data: promotionsData } = useRequest<PromotionsProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      promotions.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(promotions.action());

  return (
    <div className="promotions">
      <div className="promotions__wrapper">
        {promotionsData &&
          promotionsData.slice(0, 2).map((promotion) => (
            <Link key={promotion.id} to={promotion.link}>
              <div
                className="promotions__bg"
                style={{ backgroundImage: `url(${promotion.imgUrl})` }}
              >
                <h4>{t(`${promotion.title}`)}</h4>
                <span>{t(`${promotion.description}`)}</span>
              </div>
            </Link>
          ))}
      </div>
      <div className="promotions__link">
        <Link to="/promotions">{t('promotions_link')}</Link>
      </div>
    </div>
  );
};
