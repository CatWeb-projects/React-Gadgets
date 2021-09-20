import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { Search } from 'ui/organims';
import { Button, Icon } from 'ui/atoms';

import './Header.scss';

export const Header = () => {
  const { t, locale, setLocale } = useIntl();

  const onChangeLanguage = (value: string) => {
    setLocale(value);
  };

  const [profile, setProfile] = React.useState<boolean>(false);

  const onProfileClick = () => {
    setProfile((i) => !i);
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header__logo">
          <Link to="/">
            <Icon type="logo" />
          </Link>
        </div>

        <div className="header__menu">
          <Icon type="menu" />
          {t('categories')}
        </div>

        <Search />

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
            <Button onClick={() => onProfileClick()}>
              <Icon type="user" />
              <span>{t('account')}</span>
            </Button>
          </div>
        </div>
      </div>

      {profile && (
        <div className="profile">
          <div className="profile__wrapper">
            <form>
              <label htmlFor="email">E-mail: </label>
              <input type="text" />
              <label htmlFor="email">Password: </label>
              <input type="text" />
              <div className="registration">
                <Button type="black" className="login">
                  Login
                </Button>
                <Button type="black" className="register">
                  Registration
                </Button>
              </div>
            </form>
            <Button className="close" onClick={() => onProfileClick()}>
              X
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
