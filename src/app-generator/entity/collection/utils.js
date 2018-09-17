export const mapToList = (collection) => Array.isArray(collection)
  ? collection
  : $mapToList(collection)

const $mapToList = (map) => {
  Object
    .keys(map)
    .reduce((acc, key) => {
      acc.push(map[key])
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
