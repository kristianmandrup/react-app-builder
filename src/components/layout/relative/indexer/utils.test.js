import {normalizeMap, contains, listToMap, mapToList} from './utils'
import {items, $items} from './_setup'

describe('normalizeMap', () => {
  test('normalizes property map without names', () => {
    const map = items._map
    expect(map.display_name.name).toBe(undefined)
    const normalized = normalizeMap(map)
    expect(normalized.display_name.name).toBe('display_name')
  })
})

describe('listToMap', () => {
  test('converts list to a map/object', () => {
    const map = listToMap(items.list)
    expect(Array.isArray(map)).toBe(false)
    expect(map.display_name).toBe()
  })
})

describe('mapToList', () => {
  test('converts map/object to a list', () => {
    const list = mapToList(items.map)
    expect(Array.isArray(list)).toBe(true)
    expect(list[0]).toBe()
  })
})

describe('contains', () => {
  test('true when match', () => {
    const item = $items.map.first
    const match = contains(keys.first, item)
    expect(match).toBe(true)
  })

  test('false when no match', () => {
    const item = $items.map.last
    const match = contains(keys.first, item)
    expect(match).toBe(false)
  })

  test('false when no keys', () => {
    const item = $items.map.last
    const match = contains([], item)
    expect(match).toBe(false)
  })
})
