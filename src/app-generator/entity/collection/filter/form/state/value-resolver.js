export const createResolver = value => arg => {
  return typeof value === 'function'
    ? value(arg)
    : value
}

export const createTypeValueResolver = (typeDef) => (propSchema) => {
  const resolve = createResolver(typeDef)
  return resolve(propSchema)
}

const resolvePropType = (propSchema) => propSchema.type || 'string'

export const createValueResolver = ({schema, formTypes}) => key => {
  const propSchema = schema[key]
  const propType = resolvePropType(propSchema)
  const typeDef = formTypes[propType]
  const resolveTypeValue = createTypeValueResolver(typeDef)
  const value = resolveTypeValue(propSchema)
  console.log({typeDef, propSchema, propType, value})
  return value
}
