import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DevicesProps } from 'libs/http/api';

interface Props {
  product?: DevicesProps;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  const { t } = useIntl();

  return (
    <div className="item-product__item">
      {product && (
        <>
          <Link
            route="DeviceInfo"
            params={{
              link: product.link
            }}
          >
            <img src={product.imageUrl} alt={product.name} />
          </Link>
          <Link route="DeviceInfo" params={{ link: product.link }}>
            <div className="item-product__title">{product.name}</div>
          </Link>
          <div className="item-product__price-wrapper">
            <div className="item-product__price">
              {product.credit && (
                <span>
                  {product.credit} {t('credit')}
                </span>
              )}

              <h5>
                {product.price} {t('lei')}
              </h5>

              {product.cashback && (
                <span>
                  Cashback {product.cashback} {t('lei')}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
