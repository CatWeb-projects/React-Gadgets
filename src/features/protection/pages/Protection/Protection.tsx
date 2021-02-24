import React from 'react';
import { Footer, Header } from 'ui/organims';

import './Protection.scss';

export const Protection = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="protection-image">
        <img
          src="https://www.solidarity.com.bh/wp-content/uploads/2020/11/smartdev.jpg"
          alt="protection"
        />
      </div>
      <Footer />
    </div>
  );
};
