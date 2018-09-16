import {contains, createResolver, error, identical} from './utils'

export const indexOn = (keys, {match, nomatch, key}) => item => {
  const placeKeys = keys[key]
  const name = item.name
  !placeKeys && error(`indexOn: keys ${keys} map missing ${key} entry`)
  const newIndex = contains(placeKeys, name)
    ? createResolver(match)(item)
    : createResolver(nomatch)(item)
  item.index = newIndex
  return item
}

const keepIndex = (item) => item.index

export const createPlacer = (items, keys) => ({
  first: (item) => {
    const mapper = indexOn(keys, {
      key: 'first',
      match: -1,
      nomatch: keepIndex
    })
    // index any item with a matching first key to 999
    return Object
      .values(items)
      .map(mapper)
  },
  last: (item) => {
    const mapper = indexOn(keys, {
      key: 'last',
      match: 999,
      nomatch: keepIndex
    })

    // index any item with a matching last key to 999
    return Object
      .values(items)
      .map(mapper)
  }
})

import {isObject} from './utils'

const createInvalidObj = method => (value, label) => {
  if (!isObject(value)) {
    error(`${method}: ${label} must be an Object, was ${typeof value}: ${value}`)
  }
}

const adjust = (item, target, adjustment) => {
  const parsed = parseInt(target.index)
  const targetIndex = isNaN(parsed)
    ? 0
    : parsed
  item.index = targetIndex + adjustment
  return item
}

export const place = {
  before: (item, target) => {
    const invalidObj = createInvalidObj('before')
    invalidObj(item, 'item') || invalidObj(target, 'target')
    return adjust(item, target, -1)
  },
  after: (item, target) => {
    const invalidObj = createInvalidObj('after')
    invalidObj(item, 'item') || invalidObj(target, 'target')
    return adjust(item, target, 1)
  }
}

export const createPlaceAt = items => (item, at) => {
  const refName = item[at]

  // skip and try next placement strategy
  if (!refName) 
    return false

  const target = items[refName]
  !target && error(`No such display/component ${items}`)

  identical(item, target) && error(`item ${item.name} and relative layout target ${refName} cannot be the same`)

  const locationFn = place[at]
  !locationFn && error(`No such positioning function ${at}`)
  const newItem = locationFn(item, target)
  return newItem
}
