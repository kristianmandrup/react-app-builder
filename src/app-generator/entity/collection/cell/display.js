import React from 'react';
import {map} from './map'
import {getType} from './type'

const named = map.named || {}
const generic = map.generic || {}

const components = {
  cellDisplay: ({type, name}) => {
    return named[name] || generic[type] || generic.default
  }
}

export const Display = ({item}) => {
  return item.map(properties => {
    const {value} = properties
    const type = properties.type || getType(value)
    const {name} = properties
    const CellDisplay = components.cellDisplay({type, name})
    // TODO: handle object and array (ie. nested display)
    return <CellDisplay key={name} type={type} name={name} value={value}/>
  })
}
