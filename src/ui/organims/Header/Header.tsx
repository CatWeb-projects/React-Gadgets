import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';
import { auth } from 'libs/http/api';
import { Search } from 'ui/organims';
import { Button, Icon } from 'ui/atoms';

import './Header.scss';

export const Header = () => {
  const { request, data, errors } = useRequest<any>();
  const { t, locale, setLocale } = useIntl();

  const { authVerify, setAuthVerify } = React.useContext(DeviceContext);
  const [profile, setProfile] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onChangeLanguage = (value: string) => {
    setLocale(value);
  };

  const onProfileClick = () => {
    setProfile((i) => !i);
  };

  React.useEffect(() => {
    const token = localStorage.getItem('refresh-token');
    if (token) {
      request(auth.checkAuth.action({ refreshToken: token }));
      setAuthVerify(true);
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (data && data.refreshToken) {
      localStorage.setItem('refresh-token', data.refreshToken);
      setAuthVerify(true);
      setProfile(false);
    }

    return () => {
      auth.checkAuth.cancel();
    };
    // eslint-disable-next-line
  }, [data]);

  const onRegistration = (email: string, password: string) => {
    try {
      request(
        auth.registration.action({
          email,
          password
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const onLogin = (email: string, password: string) => {
    try {
      request(
        auth.login.action({
          email,
          password
        })
      );
      setAuthVerify(true);
      setEmail('');
      setPassword('');
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = (refreshToken: string) => {
    try {
      request(auth.logout.action(refreshToken));
      localStorage.removeItem('refresh-token');

      setAuthVerify(false);
    } catch (e) {
      console.log(e);
    }
  };

  const user = React.useMemo(() => data.user, [data]);

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
            <Link to="/favorites">
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

          {authVerify ? (
            <div className="header__user">
              <Button
                onClick={() => onLogout(user?.refreshToken)}
                className="logged-in"
              >
                <Icon type="user" />
                {user && (
                  <span>{`${user.email?.[0].toUpperCase()}${user.email
                    ?.split('@')[0]
                    .slice(1)}`}</span>
                )}
              </Button>
            </div>
          ) : (
            <div className="header__user">
              <Button onClick={() => onProfileClick()}>
                <Icon type="user" />
                <span>{t('account')}</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {profile && (
        <div className="profile">
          <div className="profile__wrapper">
            <form>
              <label htmlFor="email">E-mail: </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password: </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="registration">
                <Button
                  onClick={() => onLogin(email, password)}
                  type="black"
                  className="login"
                >
                  Login
                </Button>
                <Button
                  onClick={() => onRegistration(email, password)}
                  type="black"
                  className="register"
                >
                  Registration
                </Button>
              </div>
            </form>
            <Button className="close" onClick={() => onProfileClick()}>
              X
            </Button>
            {errors && <div className="errors">{errors.error}</div>}
          </div>
        </div>
      )}
    </div>
  );
};
