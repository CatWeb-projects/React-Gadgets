import React from 'react';
import { SlickSlider, Header, Categories } from 'ui/organims';
import { Tags } from 'ui/molecules';

import './MainLayout.scss';

export const MainLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <Tags />
      <SlickSlider />
      <Categories />
    </div>
  );
};
