import {createPlacer, createPlaceAt} from './placer'
import {mapToList, normalizeMap} from './utils'

export const createIndexer = ({items, keys}) => {
  const placeAt = createPlaceAt(items)
  const before = (item) => placeAt(item, 'before')
  const after = (item) => placeAt(item, 'after')

  console.log('createIndexer', {items, keys})

  const placer = createPlacer(items, keys)
  const {first, last} = placer
  const firstAndLast = (item) => {
    first(item);
    last(item)
    return item
  }
  const reArrange = (item) => {
    before(item);
    after(item)
    return item
  }
  const shuffle = (item) => firstAndLast(item) || reArrange(item)

  const itemsMap = Array.isArray(items)
    ? listToMap(items)
    : items

  const listToIndex = mapToList(normalizeMap(itemsMap))
  console.log({listToIndex})

  const indexAll = () => listToIndex
    .map(shuffle)
    .map(shuffle)

  return {
    indexAll,
    shuffle,
    reArrange,
    firstAndLast,
    before,
    after,
    first,
    last
  }
}
