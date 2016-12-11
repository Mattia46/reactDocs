import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Validation } from './Validation';
import { AppEvent } from './SyntheticEvent';
import { Wrapper } from './LifeCycle';
import { ComponentUpdateCycle } from './ComponentUpdateCycle';
import MapFetch from './Map&Fetch';
import Children from './Children';
import Main from './Children2';

ReactDOM.render(
  <App name='mattia'/>,
  document.getElementById('root')
);

ReactDOM.render (
  <Main />,
  document.getElementById('validation')
)


