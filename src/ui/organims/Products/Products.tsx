import React from 'react';
import { DevicesProps } from 'libs/http/api';
import { ProductItem } from 'ui/molecules';

import './Products.scss';

interface PhonesProps {
  products?: DevicesProps[] | null;
}

export const Products: React.FC<PhonesProps> = ({ products }) => {
  return (
    <div className="item-product">
      <div className="item-product__items">
        {products &&
          products
            .sort((a, b) => b.popularity - a.popularity)
            .map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};
