import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import './app/lib/fontawesome';
import App from './app/app';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
