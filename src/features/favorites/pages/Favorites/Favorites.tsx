import React from 'react';
import { DeviceContext } from 'contexts/Devices-Context';
import { Footer, Header, Products } from 'ui/organims';
import { Categories } from 'ui/molecules';

export const Favorites = () => {
  const { favorites } = React.useContext(DeviceContext);

  return (
    <div className="main-container">
      <div className="favorites">
        <Header />
        <Categories />
        <Products products={favorites} />
        <Categories />
        <Footer />
      </div>
    </div>
  );
};
