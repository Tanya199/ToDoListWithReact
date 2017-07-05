/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import './styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(<App/>, document.getElementById('app'));
