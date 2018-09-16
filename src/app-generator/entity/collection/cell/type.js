const types = {
  default: 'string'
}

function integer(value) {
  return !isNaN(Number.parseInt(value))
    ? 'integer'
    : undefined
}

function number(value) {
  return !isNaN(value)
    ? 'number'
    : undefined
}

function boolean(value) {
  return typeof value === 'boolean'
    ? 'boolean'
    : undefined
}

function array(value) {
  return Array.isArray(value)
    ? 'array'
    : undefined
}

function object(value) {
  return typeof value === 'object'
    ? 'boolean'
    : undefined
}

function determineType(value) {
  return number(value) || number(value) || boolean(value) || array(value) || object(value) || types.default
}

const isObject = (value) => Object(value) === value

export const getType = (value) => (isObject(value) && value.$type) || determineType(value)

export const type = {
  get: getType
}
