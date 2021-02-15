import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { catalog, PhonesProps, recommended } from 'libs/http/api';

import './Recommended.scss';

export const Recommended = () => {
  const { t } = useIntl();
  const { request, data } = useRequest<PhonesProps>();
  const { request: requestPhones, data: phonesData } = useRequest<any>();

  React.useEffect(() => {
    onFetch();
    onFetchPhonesData();

    return () => {
      recommended.phones.cancel();
      catalog.phones.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(recommended.phones.action());
  const onFetchPhonesData = () => requestPhones(catalog.phones.action());

  const phonesCard = React.useMemo(() => data, [data]);
  React.useMemo(() => phonesData, [phonesData]);

  console.log(phonesData);

  return (
    <div className="recommended">
      <Link to={phonesCard.link}>
        <div
          className="recommended__banner"
          style={{ backgroundImage: `url(${phonesCard.imgUrl})` }}
        >
          {phonesCard.name && <h4>{t(`${phonesCard.name}`)}</h4>}
        </div>
      </Link>
      <div className="recommended__items">
        {phonesData.slice(0, 3).map((phone: any) => (
          <div key={phone.id} className="recommended__item">
            <Link to={phone.link}>
              <img src={phone.imageUrl} alt={phone.name} />
            </Link>
            <Link to={phone.link}>
              <div className="recommended__title">{phone.name}</div>
            </Link>
            <div className="recommended__price-wrapper">
              <div className="recommended__price">
                {phone.credit && (
                  <span>
                    {phone.credit} {t('credit')}
                  </span>
                )}
                <h5>
                  {phone.price} {t('lei')}
                </h5>
                {phone.cashback && (
                  <span>
                    Cashback {phone.cashback} {t('lei')}
                  </span>
                )}
              </div>
              <div className="icons-wrapper"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
