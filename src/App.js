import React from 'react';
// import Button from '@material-ui/core/Button';
import {TopBar, DisplayMatches, FilterForm} from './components'

import createDb from './database/db'
const {matches} = createDb()

export const App = () => {
  return (
    <div>
      <TopBar></TopBar>
      <FilterForm/>
      <DisplayMatches filter={this.props.filter} matches={matches}/>
    </div>
  );
}
