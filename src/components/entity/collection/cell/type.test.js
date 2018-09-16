import {type} from './type'
const {get} = type

describe('get', () => {
  test('it can determine string from a string value', () => {
    expect(get('hello')).toBe('string')
  })
})
