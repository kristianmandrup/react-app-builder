import {buildAll} from './build'
import {types} from './types'

describe('buildAll', () => {
  const built = buildAll(types.person)

  test('builds collection', () => {
    expect(built.collection.person).toBeDefined()
  })

  test('built collection has a filter', () => {
    expect(built.collection.person.filter).toBeDefined()
  })
})
