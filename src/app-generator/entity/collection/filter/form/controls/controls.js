import React from 'react';
import {addStyles} from '../../../styling';
import {controlMap} from './map'
import {mapToList, error} from '../../../utils'

const styles = {
  main: {
    color: 'red'
  }
}

export const DisplayControls = ({fields}) => {
  !fields && error('DisplayControls: must take a fields (entity value) to render filter controls for')
  const list = mapToList(fields)

  return list.map((prop, _) => {
    const {name, type, value} = prop
    const FilterControl = controlMap(type)
    !FilterControl && error(`DisplayControls: unable to find Filter control for ${type}`)
    return (<FilterControl key={name} name={name} value={value} type={type}/>)
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
