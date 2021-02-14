import * as React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { Button, Icon } from 'ui/atoms';

import './Header.scss';

export const Header = () => {
  const { t, locale, setLocale } = useIntl();

  const onChangeLanguage = (value: string) => {
    setLocale(value);
  };

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
          {t('categories')}
        </div>

        <div className="header__search">
          <input type="text" placeholder={t('search')} />
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
            <div className="locale-language">
              <Icon type="languages" />
              <h5>{locale}</h5>
            </div>
            <div className="header__languages-overlay lang-overlay">
              <h5 onClick={() => onChangeLanguage('en')}>en</h5>
              <h5 onClick={() => onChangeLanguage('ru')}>ru</h5>
              <h5 onClick={() => onChangeLanguage('ro')}>ro</h5>
            </div>
          </div>

          <div className="header__user">
            <Link to="/">
              <Icon type="user" />
              <span>{t('account')}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
