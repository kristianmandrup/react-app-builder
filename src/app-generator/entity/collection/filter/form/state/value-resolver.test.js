import {person} from './_setup/config'
import {formTypes} from './_setup/config'
import {createTypeValueResolver, resolvePropType, createValueResolver} from './value-resolver'

describe('resolvePropType', () => {
  test('resolves via .type', () => {
    const type = resolvePropType({type: 'number'})
    expect(type).toBe('number')
  })

  test('resolves default type: string', () => {
    const type = resolvePropType({})
    expect(type).toBe('string')
  })
})

describe('createTypeValueResolver', () => {
  test('resolves type value using primitive value', () => {
    const resolve = createTypeValueResolver({typeValue: 2})
    const value = resolve({})
    expect(value).toBe(2)
  })

  test('resolves type value using function', () => {
    const resolve = createTypeValueResolver({
      typeValue: () => 5
    })
    const value = resolve({})
    expect(value).toBe(5)
  })
})

describe('createValueResolver', () => {
  test('resolves value for schema key via correct type resolver', () => {
    const schema = person.properties
    const resolveValue = createValueResolver({schema, formTypes})
    const key = 'age'
    const value = resolveValue(key)
    expect(value).toBe(60)
  })
})
