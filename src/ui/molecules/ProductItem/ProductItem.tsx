import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';
import { DevicesProps } from 'libs/http/api';
import { Button, Icon } from 'ui/atoms';

interface Props {
  product?: DevicesProps;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  const { authVerify, favorites, addFavorites } =
    React.useContext(DeviceContext);
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
          <div className="item-product__price-wrapper options-devices-card-wrapper">
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
            <div className="options-devices">
              <div className="compare-devices">
                <Button type="black">
                  <Icon type="compare" />
                </Button>
                <div className="options-devices-info compare-info">
                  {t('compare')}
                </div>
              </div>
              <div className="add-to-favorites">
                <Button
                  onClick={() => addFavorites(product)}
                  type="black"
                  className={
                    authVerify &&
                    favorites.find((item: any) => item.name === product.name)
                      ? 'added-to-favorites'
                      : ''
                  }
                >
                  <Icon type="heart" />
                </Button>
                <div className="options-devices-info favorites-info">
                  {t('favorites')}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
