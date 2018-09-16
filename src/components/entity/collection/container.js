import React from 'react';
import {Provider, Subscribe, Container} from 'unstated';

const Container = (type) => (filter, list) => {
  return (
    <Subscribe to={[filter]}>
      <Display list={list}/>
    </Subscribe>
  )
}
