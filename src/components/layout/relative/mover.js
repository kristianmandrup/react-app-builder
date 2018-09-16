const contains = (list, item) => list.indexOf(item) >= 0

export const createMover = ({items, keys}) => {
  const $before = (item, target) => {
    item = items.index = target.index - 1
  }

  const $after = (item, target) => {
    item = items.index = target.index + 1
  }

  const first = (item) => {
    // first goes to top
    items = items.map(item => {
      item.index = contains(keys.first, item.name)
        ? 0
        : item.index
      return item
    })
  }

  const last = (item) => {
    // last goes to bottom
    items = items.map(item => {
      item.index = contains(keys.last, item.name)
        ? item.index
        : 9999
      return item
    })
  }

  const before = (item) => {
    item.before && $before(item, item.before)
  }
  const after = (item) => {
    item.after && $after(item, item.after)
  }

  const firstAndLast = (item) => {
    return first(item) || last(item)
  }

  const reArrange = (item) => {
    return before(item) || after(item)
  }

  const shuffle = (item) => {
    return firstAndLast(item) || reArrange(item)
  }

  const shuffleAll = (items) => {
    return items
      .map(shuffle)
      .map(shuffle)
  }

  return shuffleAll(items)
}
