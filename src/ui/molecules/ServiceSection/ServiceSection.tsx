import React from 'react';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { Icon } from 'ui/atoms';

import './ServiceSection.scss';

export const ServiceSection = () => {
  const { t } = useIntl();

  return (
    <div className="service-section">
      <div className="smart-protection service">
        <Link to="/protection">
          <div className="serv">
            <h3>Smart Protection</h3>
            <span>{t('protection')}</span>
          </div>
          <div>
            <Icon type="play-button-arrowhead" />
          </div>
        </Link>
      </div>
      <div className="trade-in service">
        <Link to="/tradein">
          <div className="serv">
            <h3>Trade In</h3>
            <span>{t('tradein')}</span>
          </div>
          <div>
            <Icon type="play-button-arrowhead" />
          </div>
        </Link>
      </div>
    </div>
  );
};
