import React from 'react';
import { CompareProducts, Footer, Header } from 'ui/organims';
import { Categories } from 'ui/molecules';

export const Compare = () => {
  return (
    <div className="main-container">
      <div className="compare">
        <Header />
        <Categories />
        <CompareProducts />
        <Footer />
      </div>
    </div>
  );
};
