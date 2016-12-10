import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Validation } from './Validation';
import { AppEvent } from './SyntheticEvent';
import { Wrapper } from './LifeCycle';
import { ComponentUpdateCycle } from './ComponentUpdateCycle';

ReactDOM.render(
  <App name='mattia'/>,
  document.getElementById('root')
);

ReactDOM.render (
  <ComponentUpdateCycle />,
  document.getElementById('validation')
)



