import React from 'react';
import {map} from './map'
import {getType} from './type'

const components = {
  cellDisplay: ({type, name}) => {
    return map.named[name] || cellItemMap.generic[type]
  }
}

const Display = ({item}) => {
  return item.map((prop) => {
    const type = getType(prop.value)
    const CellDisplay = components.cellDisplay({type, name: prop.name})
    // TODO: handle object and array (ie. nested display)

    return <CellDisplay {...prop}/>
  })
}
