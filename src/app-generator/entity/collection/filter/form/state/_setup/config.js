// TODO: use property schema to return default value, such as middle of range
// TODO: code taken from controls, make DRY

const midRange = ({min, max}) => Math.round((max - min) / 2)

const isNumber = (value) => !isNaN(value)

const validMinMax = (propSchema = {}) => isNumber(propSchema.min) && isNumber(propSchema.max)

const number = (propSchema = {}) => {
  return validMinMax(propSchema)
    ? midRange(propSchema)
    : 0
}

export const formTypes = {
  string: '',
  boolean: false,
  number,
  integer: number
}

export const person = {
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer',
      min: 0,
      max: 120
    }
  }
}

export const entities = {
  person
}

export const forms = {
  person: {
    filter: {
      autoComplete: 'off'
    }
  }
}
