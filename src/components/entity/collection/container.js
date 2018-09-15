import React from 'react';
import {Provider, Subscribe, Container} from 'unstated';

const container = (type) => (filter, list) => {
  return (
    <Subscribe to={[filter]}>
      <Display list={list}/>
    </Subscribe>
  )
