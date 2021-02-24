import React from 'react';
import { useIntl } from 'estafette-intl';

import './Features.scss';

export const Features = () => {
  const { t } = useIntl();

  return (
    <div className="features">
      <div className="features__item">
        <div className="support support-first"></div>
        <div className="title">
          <h5>{t('guarantee')}</h5>
        </div>
        <div className="info">{t('free')}</div>
      </div>
      <div className="features__item">
        <div className="support support-second"></div>
        <div className="title">
          <h5>{t('delivery')}</h5>
        </div>
        <div className="info">{t('time')}</div>
      </div>
      <div className="features__item">
        <div className="support support-third"></div>
        <div className="title">
          <h5>{t('security')}</h5>
        </div>
        <div className="info">{t('repair')}</div>
      </div>
      <div className="features__item">
        <div className="support support-fourth"></div>
        <div className="title">
          <h5>{t('credit_approval')}</h5>
        </div>
        <div className="info">{t('approval')}</div>
      </div>
    </div>
  );
};
