import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DevicesProps, DevicesCardProps } from 'libs/http/api';
import { ProductItem } from 'ui/molecules';

interface Props {
  cardData?: DevicesCardProps;
  devicesData?: DevicesProps[];
}

export const Recommended: React.FC<Props> = ({ devicesData, cardData }) => {
  const { t } = useIntl();

  return (
    <div className="item-product">
      {cardData && (
        <Link route="Devices" params={{ link: cardData.link.slice(1) }}>
          <div
            className="item-product__banner"
            style={{ backgroundImage: `url(${cardData.imgUrl})` }}
          >
            {cardData.name && <h4>{t(`${cardData.name}`)}</h4>}
            {devicesData && devicesData.length > 0 && (
              <span>
                {devicesData.length}+ {t('products')}
              </span>
            )}
          </div>
        </Link>
      )}

      <div className="item-product__items recommended-item">
        {devicesData &&
          devicesData
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 3)
            .map((device) => <ProductItem key={device.id} product={device} />)}
      </div>
    </div>
  );
};
