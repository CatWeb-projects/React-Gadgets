import React from 'react';
import ReactDOM from 'react-dom';
import { CreateRouter } from 'estafette-router';
import { CreateIntl } from 'estafette-intl';
import { routes } from 'routes';
import { messages } from 'libs/messages';

import 'styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <CreateIntl defaultLocale="en" messages={messages}>
      <CreateRouter routes={routes} />
    </CreateIntl>
  </React.StrictMode>,
  document.getElementById('root')
);
