import {map} from './type'

// type
const person = {
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer'
    }
  }
}

describe('build', () => {
  const built = build(person)

  test('builds filter', () => {
    expect(built.filter).toBe()
  })
})
