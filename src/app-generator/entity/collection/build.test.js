import {buildFactory} from './build'
import {formTypes, forms, entities} from './filter/form/state/_setup/config'

describe('build', () => {
  const buildCollection = buildFactory({formTypes, forms, entities})
  const built = buildCollection({name: 'person'})

  test('builds filter', () => {
    expect(built.filter).toBeDefined()
  })
})
