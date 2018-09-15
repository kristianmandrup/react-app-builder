import React from 'react';
import {CellDisplay} from './cell'

const Display = ({list}) => {
  return list.map((item) => {
    return <CellDisplay item={item}/>
  })
}
