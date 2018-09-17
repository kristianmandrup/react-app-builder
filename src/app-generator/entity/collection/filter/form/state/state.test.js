import {createSchemaResolver, createInitialStateFactory} from './state';
import {entities, formTypes} from './_setup/config'

describe('state', () => {
  test('createSchemaResolver', () => {
    const resolveSchema = createSchemaResolver({entities})
    const schema = resolveSchema({name: 'person'})
    expect(schema).toEqual(entities.person.properties)
  })

  test('createInitialState', () => {
    const createInitialState = createInitialStateFactory({entities, formTypes})
    const state = createInitialState({name: 'person'})
    const {name, age} = state
    expect(name).toEqual('')
    expect(age).toEqual(60)
  })
})
