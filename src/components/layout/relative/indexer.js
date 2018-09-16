export const contains = (keys, name) => keys.indexOf(name) >= 0

export const indexOn = (keys, {match, nomatch, key}) => item => {
  item.index = contains(keys[key], item.name)
    ? match(item)
    : nomatch(item)
  return item
}

const keepIndex = (item) => item.index

export const createPlacer = (items, keys) => ({
  first: (item) => {
    // index any item with a matching first key to 999
    return items.map(indexOn(keys, {
      key: 'first',
      match: () => -1,
      nomatch: keepIndex
    }))
  },
  last: (item) => {
    // index any item with a matching last key to 999
    items = items.map(indexOn(keys, {
      key: 'last',
      match: keepIndex,
      nomatch: 999
    }))
  }
})

const createLast = keys => (item) => {}

const place = {
  before: (item, target) => {
    item.index = target.index - 1
    return item
  },
  after: (item, target) => {
    items.index = target.index + 1
    return item
  }
}

const placed = (item, at) => {
  const refName = item[at]
  if (!refName) 
    return
  const target = items[refName]
  if (!target) {
    throw Error(`No such display/component ${items}`)
  }
  return place[at](item, items[refName])
}

const before = (item) => placed(item, 'before')

const after = (item) => placed(item, 'after')

export const createMover = ({items, keys}) => {

  const placer = createPlacer(items, keys)
  const {first, last} = placer
  const firstAndLast = (item) => first(item) || last(item)
  const reArrange = (item) => before(item) || after(item)
  const shuffle = (item) => firstAndLast(item) || reArrange(item)

  const shuffleAll = (items) => items
    .map(shuffle)
    .map(shuffle)

  return {
    shuffleAll,
    shuffle,
    reArrange,
    firstAndLast,
    before,
    after,
    first,
    last
  }
}
