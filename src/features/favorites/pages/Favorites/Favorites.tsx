import React from 'react';
import { DeviceContext } from 'contexts/Devices-Context';
import { Footer, Header, Products } from 'ui/organims';
import { Categories } from 'ui/molecules';

export const Favorites = () => {
  const { authVerify, favorites } = React.useContext(DeviceContext);

  return (
    <div className="main-container">
      <div className="favorites">
        <Header />
        <Categories />
        {authVerify ? (
          <>
            <Products products={favorites} />
            <Categories />
          </>
        ) : (
          <div className="protection-image">
            <img
              src="https://www.solidarity.com.bh/wp-content/uploads/2020/11/smartdev.jpg"
              alt="protection"
            />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};
