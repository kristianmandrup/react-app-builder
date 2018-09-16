import {types as $types} from './types'
import {build} from './collection'

const createCollection = (types) => {
  Object
    .keys(types)
    .reduce((acc, key) => {
      const type = types[key]
      acc[key] = build(type);
      return acc
    }, {})
}

export const buildAll = (types = $types) => ({collection: createCollection(types)})
