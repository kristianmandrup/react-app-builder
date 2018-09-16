const error = (msg) => {
  throw new Error(msg)
}

const str = (value) => JSON.stringify(value, null, 2)
const identical = (a, b) => a === b

export const isObject = (value) => Object(value) === value

export const contains = (keys, value) => {
  const name = typeof value === 'string'
    ? value
    : value.name
  return keys.indexOf(name) >= 0
}

export const normalizeMap = (map) => Object
  .keys(map)
  .reduce((acc, key) => {
    acc[key] = {
      ...map[key],
      name: key
    }
    return acc
  }, {})

export const listToMap = (list) => list.reduce((acc, item) => {
  acc[item.name] = item
  return acc
}, {})

export const mapToList = (map) => Object
  .keys(map)
  .reduce((acc, key) => {
    acc.push(map[key])
    return acc
  }, [])

const createResolver = value => item => {
  return typeof value === 'function'
    ? value(item)
    : value
}
