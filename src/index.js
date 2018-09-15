import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

const defaultSettings = {}

export function fastFilter(matches = [], settings = defaultSettings) {
  const {display_name, height_in_cm, favourite} = settings
  const nameExpr = RegExp.escape(display_name)
  return matches
    .filter(match => nameExpr.test(match.display_name))
    .filter(match => match.height_in_cm < height_in_cm)
    .filter(match => match.favourite === favourite)
  // ...
}

ReactDOM.render(
  <App filter={fastFilter}/>, document.getElementById('root'));
registerServiceWorker();
