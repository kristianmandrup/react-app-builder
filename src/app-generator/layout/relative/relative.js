// use before, after, first, last y: {   before: 'x' }, x: {   first: true }
import {createIndexer} from './indexer'

export const matcher = (layout) => test => Object
  .keys(layout)
  .find(key => {
    const obj = layout[key]
    return test(obj)
  })

const createKeyOf = key => (obj) => obj[key]

export const createKeysOf = obj => ({
  // all layout objects that have a first key
  first: match(createKeyOf('first')),
  // all layout objects that have a last key
  last: match(createKeyOf('last'))
})

export const sortList = (list) => list.sort((a, b) => b.index - a.index)
export const sortMap = (obj) => {
  const keys = Object.keys(obj)
  const sortedKeys = keys.sort(key => obj[key].index)
  return sortedKeys.map(key => obj[key])
}

export const relative = ({layout, items}) => {
  items = items.map((item, index) => item.index = index * 50)
  const match = matcher(layout)
  const keys = createKeysOf(obj)
  const indexer = createIndexer({items, keys})
  const indexedItems = move()

  const sort = Array.isArray(indexedItems)
    ? sortList
    : sortMap
  return sort(indexedItems)
}
