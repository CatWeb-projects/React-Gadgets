import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { Icon } from 'ui/atoms';

import './Footer.scss';

export const Footer = () => {
  const { t } = useIntl();

  return (
    <div className="footer">
      <div className="upper-footer">
        <div>
          <h5>{t('shop')}</h5>
          <span>{t('tel')}: + 373 79160000</span>
          <span>sales@devices.md</span>
        </div>
        <div>
          <h5>{t('customer_support')}</h5>
          <span>{t('tel')}: + 373 79890000</span>
          <span>advertising@devices.md</span>
          <a href="/contacts">{t('contacts')}</a>
        </div>
        <div>
          <h5>{t('services')}</h5>
          <a href="/protection">Smart Protection</a>
          <a href="/tradein">Trade-in</a>
        </div>
      </div>
      <div className="lower-footer">
        <div className="lower-footer__logo">
          <Link to="/">
            <Icon type="logo" />
          </Link>
        </div>
        <div className="copyright">
          <h5>{t('copyright')}</h5>
        </div>
        <div className="lower-footer__media">
          <Link to="facebook.com">
            <Icon type="facebook" />
          </Link>
          <Link to="youtube.com">
            <Icon type="youtube" />
          </Link>
          <Link to="instagram.com">
            <Icon type="instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
};
