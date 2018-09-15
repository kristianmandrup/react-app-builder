import React from 'react';
import {cellItemMap} from './cell'
import {getType} from './type'

const components = {
  cellDisplay = ({type, name}) => {
    return cellItemMap.named[name] || cellItemMap.generic[type]
  }
}

const Display = ({item}) => {
  return item.map((prop) => {
    const type = getType(prop)
    const Cell = components.cellDisplay({type, prop.name})
    // TODO: handle object and array (ie. nested display)

    return <CellItemMap {...prop}/>
  })
}
