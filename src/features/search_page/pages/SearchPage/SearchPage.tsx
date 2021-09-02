import React from 'react';
import { Footer, Header } from 'ui/organims';
import { Categories } from 'ui/molecules';

export const SearchPage = () => {
  return (
    <div className="main-container">
      <div className="gadgets">
        <Header />
        <Categories />
        <Footer />
      </div>
    </div>
  );
};
