import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Routes} from './routes/Routes';

import {history} from './services/history/history'

ReactDOM.render(
  <Router history = {history}>
    <Routes/>
  </Router>,
  document.getElementById('root')
);
