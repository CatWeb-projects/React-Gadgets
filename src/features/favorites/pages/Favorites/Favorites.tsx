import React from 'react';
import { DeviceContext } from 'contexts/Devices-Context';
import { Footer, Header, Products } from 'ui/organims';
import { Categories } from 'ui/molecules';

export const Favorites = () => {
  const { authVerify, userFavorites } = React.useContext(DeviceContext);

  return (
    <div className="main-container">
      <div className="favorites">
        <Header />
        <Categories />
        {authVerify && userFavorites?.length !== 0 ? (
          <>
            <Products products={userFavorites} />
            {userFavorites?.length > 4 && <Categories />}
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
