import React from 'react';
import ReactDOM from 'react-dom';
import { CreateRouter } from 'estafette-router';
import { routes } from 'routes';

import 'styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <CreateRouter routes={routes} />
  </React.StrictMode>,
  document.getElementById('root')
);
