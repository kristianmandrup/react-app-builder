import {createPlacer, createPlaceAt, place} from './placer'
import {listToMap} from './utils'
import {items, $items, keys, decorate} from './_setup'

describe('createPlacer', () => {
  describe('first', () => {
    const placer = createPlacer(items.map, keys)

    test('positions index first', () => {
      const indexedItems = placer.first($items.map.first)
      expect($items.map.first.index).toBe(-1)
    })
  })

  describe('last', () => {
    const placer = createPlacer(items.map, keys)

    test('positions index last', () => {
      const indexedItems = placer.last($items.map.last)
      const id = $items.map.last.name
      const newMap = listToMap(indexedItems)
      expect(newMap[id].index).toBe(999)
    })
  })
})

describe('place', () => {
  describe('before', () => {
    test('sets index of src < target', () => {
      // reset target
      const item = $items.map.last
      const target = $items.map.first
      target.index = null
      const placed = place.before(item, target)
      expect(placed.index).toBeLessThan(target.index || 0)
    })
  })

  describe('after', () => {
    test('sets index of src < target', () => {
      // reset target
      const item = $items.map.first
      const target = $items.map.last
      target.index = null
      const placed = place.after(item, target)
      expect(placed.index).toBeGreaterThan(target.index || 0)
    })
  })
})

describe('createPlaceAt', () => {
  test('creates function', () => {
    const map = decorate.randomIndexes(items.map)
    const placeAt = createPlaceAt(map)
    expect(typeof placeAt).toBe('function')
  })

  describe('placeAt', () => {
    test('skip when no placement match', () => {
      const map = decorate.randomIndexes(items.map)
      const placeAt = createPlaceAt(map)

      const placed = placeAt({
        name: 'unplaced',
        before: 'display_name'
      }, 'after')
      expect(placed).toBe(false)
    })

    test('before sets index < target', () => {
      const map = decorate.randomIndexes(items.map)
      const placeAt = createPlaceAt(map)

      const placed = placeAt({
        name: 'unplaced',
        before: 'display_name'
      }, 'before')
      expect(placed.index).toBeLessThan(map.display_name.index)
    })

    test('after sets index > target', () => {
      const map = decorate.randomIndexes(items.map)
      const placeAt = createPlaceAt(map)

      const placed = placeAt({
        name: 'unplaced',
        after: 'display_name'
      }, 'after')
      expect(placed.index).toBeGreaterThan(map.display_name.index)
    })
  })
})
