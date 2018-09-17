export const createTypeValueResolver = ({typeValue}) => arg => {
  return typeof typeValue === 'function'
    ? typeValue(arg)
    : typeValue
}

export const resolvePropType = (propSchema) => propSchema.type || 'string'

export const createValueResolver = ({schema, formTypes}) => key => {
  const propSchema = schema[key]
  const propType = resolvePropType(propSchema)
  const typeDef = formTypes[propType]
  const resolveTypeValue = createTypeValueResolver(typeDef)
  const value = resolveTypeValue(propSchema)
  console.log({typeDef, propSchema, propType, value})
  return value
}
