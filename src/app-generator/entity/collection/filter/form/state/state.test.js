import {createInitialStateFactory} from './state';

const person = {
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

const entities = {
  person
}

const forms = {
  person: {
    filter: {
      autoComplete: 'off'
    }
  }
}

// TODO: use property schema to return default value, such as middle of range
// TODO: code taken from controls, make DRY

const midRange = ({min, max}) => Math.round((max - min) / 2)

const number = (schemaProp) => (schemaProp.min
  ? midRange(schemaProp)
  : 0)

const formTypes = {
  string: '',
  boolean: false,
  number,
  integer: number
}

const type = person

describe('state', () => {
  test('createSchemaResolver', () => {
    const resolveSchema = createSchemaResolver({entities})
    const schema = resolveSchema({name: 'person'})
    expect(schema).toEqual(entities.person)
  })

  test('createInitialState', () => {
    const createInitialState = createInitialStateFactory({entities})
    const state = createInitialState({name: 'person'})
    const {name, age} = state
    console.log({name, age})
    expect(name).toEqual('')
    expect(age).toEqual(60)
  })
})
