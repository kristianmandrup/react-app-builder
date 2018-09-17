export const mapToList = (collection, opts = {}) => Array.isArray(collection)
  ? collection
  : $mapToList(collection, opts)

const defaults = {
  transform: ({key, value}) => isObject(value)
    ? value
    : ({key, value})
}

const $mapToList = (map, opts = {}) => {
  const transform = opts.transform || defaults.transform
  const keys = Object.keys(map)
  return keys.reduce((acc, key) => {
    const item = transform({key, value: map[key]})
    acc.push(item)
    return acc
  }, [])
}

export const error = (msg) => {
  throw new Error(msg)
}

export const warn = (msg) => {
  console.warn(msg)
}

export const str = (value) => JSON.stringify(value, null, 2)
export const isObject = (value) => Object(value) === value
