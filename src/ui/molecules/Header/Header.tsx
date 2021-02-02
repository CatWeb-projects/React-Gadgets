import React from 'react';
import { Link } from 'estafette-router';
import { Button, Icon } from 'ui/atoms';

import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header__logo">
          <Link to="/">
            <Icon type="play" />
          </Link>
        </div>

        <div className="header__menu">
          <Icon type="menu" />
          All Categories
        </div>

        <div className="header__search">
          <input type="text" placeholder="find over 100 products" />
          <Button>
            <Icon type="zoom" />
          </Button>
        </div>

        <div className="header__main-menu">
          <div className="header__favorites">
            <Link to="/">
              <Icon type="heart" />
            </Link>
          </div>

          <div className="header__cart">
            <Link to="/">
              <Icon type="shopping-cart" />
            </Link>
          </div>

          <div className="header__languages">
            <a href="#change-language">
              <Icon type="languages" />
              <h5>en</h5>
            </a>
          </div>

          <div className="header__user"></div>
        </div>
      </div>
    </div>
  );
};
