import {error} from "util";

export const createTypeValueResolver = ({typeValue}) => arg => {
  return (typeof typeValue === 'function')
    ? typeValue(arg)
    : typeValue
}

export const resolvePropType = (propSchema = {}) => propSchema.type || 'string'

export const createValueResolver = ({schema, formTypes}) => key => {
  const propSchema = schema[key]
  const propType = resolvePropType(propSchema)
  const typeDef = formTypes[propType]
  !typeDef && error(`No form type defined for ${propType}`)
  const resolveTypeValue = createTypeValueResolver({typeValue: typeDef})
  const value = resolveTypeValue(propSchema)
  return value
}
