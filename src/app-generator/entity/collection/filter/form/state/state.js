import {error, isObject} from "../../../utils";
import {createValueResolver} from './value-resolver'

export const createSchemaResolver = ({entities}) => ({name}) => {
  const schema = entities[name] || {}
  return schema.properties || schema
}

export const createInitialStateFactory = ({entities, formTypes}) => {
  !isObject(entities) && error('createInitialState: entities must be an object')
  !isObject(formTypes) && error('createInitialState: formTypes must be an object')

  return ({name}) => {
    !name && error('createInitialState: missing name')

    const resolveSchema = createSchemaResolver({entities})
    const schema = resolveSchema({name})
    const keys = Object.keys(schema)
    const resolveValue = createValueResolver({schema, formTypes})
    const reducer = (acc, key) => {
      const value = resolveValue(key)
      acc[key] = value
      return acc
    }
    return keys.reduce(reducer, {})
  }
}
