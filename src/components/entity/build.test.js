import {buildAll} from './build'
import {types} from './types'

describe('buildAll', () => {
  const built = build(types.person)

  test('builds collection', () => {
    expect(built.collection).toBe()
  })

  test('built collection has a filter', () => {
    expect(built.collection.filter).toBe()
  })
})
