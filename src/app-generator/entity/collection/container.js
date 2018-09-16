import React from 'react';
import {Provider, Subscribe, Container} from 'unstated';

export const CollectionContainer = (type) => (filter, list) => {
  return (
    <Subscribe to={[filter]}>
      <Display list={list} filter={filter}/>
    </Subscribe>
  )
}
