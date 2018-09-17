import {types as $types} from './types'
import {buildFactory} from './collection'
import {entities, forms, formTypes} from './collection/filter/form/state/_setup/config'

const createCollection = ({entities, forms, formTypes}) => {
  const keys = Object.keys(entities)
  return keys.reduce((acc, key) => {
    const name = entities[key]
    const build = buildFactory({entities, forms, formTypes})
    acc[key] = build({name});
    return acc
  }, {})
}

export const buildAll = ({
  entities = $types,
  forms,
  formTypes
}) => {
  const collection = createCollection(({entities, forms, formTypes}))
  return {collection}
}
