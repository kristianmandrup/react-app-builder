import {buildAll} from './build'
import {formTypes, forms, entities} from './collection/filter/form/state/_setup/config'

describe('buildAll', () => {
  const built = buildAll({entities, formTypes, forms})

  test('builds collection', () => {
    expect(built.collection.person).toBeDefined()
  })

  test('built collection has a filter', () => {
    expect(built.collection.person.filter).toBeDefined()
  })
})
