import React from 'react';
import {CellDisplay} from './cell'

const identity = (item) => item

// By default uses identity function as filter ;)
const Display = ({
  list,
  filter = identity
}) => {
  const filtered = list.filter(filter)
  return list
    .filter(filter)
    .map((item) => {
      return <CellDisplay item={item}/>
    })
}
