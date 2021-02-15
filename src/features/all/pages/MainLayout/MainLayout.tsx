import React from 'react';
import { SlickSlider, Header, Recommended } from 'ui/organims';
import { Promotions, Tags, Categories } from 'ui/molecules';

import './MainLayout.scss';

export const MainLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <Tags />
      <SlickSlider />
      <Categories />
      <Promotions />
      <Recommended />
    </div>
  );
};
