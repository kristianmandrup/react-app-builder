import React from 'react';
import {addStyles} from './styling';
import {controlMap} from './map'

const FilterControls = (props) => {
  return props.map(prop => {
    const type = prop.$type
    const FilterControl = controlMap[type]
    return (<FilterControl value={prop} type={prop.type}/>)
  })
}

const midRange = ({min, max}) => Math.round((max - min) / 2)

const number = (schemaProp) => (schemaProp.min
  ? midRange(schemaProp)
  : 0)

const types = {
  string: (schemaProp) => '',
  boolean: (schemaProp) => false,
  number,
  integer: number
}

export const controls = addStyles(styles, types)
