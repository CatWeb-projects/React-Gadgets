import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DevicesProps, DevicesCardProps } from 'libs/http/api';

import './Recommended.scss';

interface Props {
  cardData?: DevicesCardProps;
  gadgetsData?: DevicesProps[];
}

export const Recommended: React.FC<Props> = ({ gadgetsData, cardData }) => {
  const { t } = useIntl();

  return (
    <div className="recommended">
      {cardData && (
        <Link to={cardData.link}>
          <div
            className="recommended__banner"
            style={{ backgroundImage: `url(${cardData.imgUrl})` }}
          >
            {cardData.name && <h4>{t(`${cardData.name}`)}</h4>}
            {gadgetsData && (
              <span>
                {gadgetsData.length}+ {t('products')}
              </span>
            )}
          </div>
        </Link>
      )}

      <div className="recommended__items">
        {gadgetsData &&
          gadgetsData
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 3)
            .map((gadget: any) => (
              <div key={gadget.id} className="recommended__item">
                <Link to={gadget.link}>
                  <img src={gadget.imageUrl} alt={gadget.name} />
                </Link>

                <Link to={gadget.link}>
                  <div className="recommended__title">{gadget.name}</div>
                </Link>

                <div className="recommended__price-wrapper">
                  <div className="recommended__price">
                    {gadget.credit && (
                      <span>
                        {gadget.credit} {t('credit')}
                      </span>
                    )}

                    <h5>
                      {gadget.price} {t('lei')}
                    </h5>

                    {gadget.cashback && (
                      <span>
                        Cashback {gadget.cashback} {t('lei')}
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
