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
            <Icon type="music" />
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
        <div className="header__favorites">
          <Button>
            <Icon type="heart" />
          </Button>
        </div>
        <div className="header__languages">
          <a href="#change-language">
            <Icon type="languages" />
            en
          </a>
        </div>
      </div>
    </div>
  );
};
