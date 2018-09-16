import context from 'jest-plugin-context';
import {createIndexer, contains, createPlacer, place, placeAt} from './indexer'

const items = {
  map: {
    height_in_cm: {},
    favourite: {},
    display_name: {}
  },
  list: ['height_in_cm', 'favourite', 'display_name']
}

const methods = ['first', 'last', 'before', 'after']

const layout = {
  empty: {
    height_in_cm: {},
    favourite: {},
    display_name: {}
  },
  shuffling: {
    height_in_cm: {
      first: true
    },
    favourite: {
      last: true
    },
    display_name: {
      before: 'height_in_cm'
    }
  }
}

const keys = {
  first: ['display_name'],
  last: ['height_in_cm']
}

const $items = {
  first: items.list[2],
  last: items.list[1]
}

describe('contains', () => {
  test('true when match', () => {
    const item = $items.first
    const match = contains(keys.first, item)
    expect(match).toBe(true)
  })

  test('false when no match', () => {
    const item = $items.last
    const match = contains(keys.first, item)
    expect(match).toBe(false)
  })

  test('false when no keys', () => {
    const item = $items.last
    const match = contains([], item)
    expect(match).toBe(false)
  })
})

describe('createPlacer', () => {

  describe('first', () => {
    const placer = createPlacer(items, keys.first)
    const indexedItem = placer.first($items.first)

    test('positions index first', () => {
      expect(indexedItem.index).toBe(-1)
    })
  })

  describe('last', () => {
    const placer = createPlacer(items, keys.last)
    const indexedItem = placer.first($items.last)

    test('positions index last', () => {
      expect(indexedItem.index).toBe(999)
    })
  })
})

describe('place', () => {
  describe('before', () => {
    test('sets index of src < target', () => {
      const placedBefore = place.before($items.last, $items.first)
      expect(placedBefore.index).toBeLessThan($items.first.index)
    })
  })

  describe('after', () => {
    test('sets index of src < target', () => {
      const placedAfter = place.after($items.first, $items.last)
      expect(placedAfter.index).toBeGreaterThan($items.last.index)
    })
  })
})

describe('createPlaceAt', () => {
  const placeAt = createPlaceAt(items.list)
  test('creates function', () => {
    expect(typeof createPlaceAt(items.list)).toBe('function')
  })

  describe('placeAt', () => {
    test('before sets index < target', () => {
      const placedBefore = placeAt($items.last, 'before')
      expect(placedBefore.index).toBeLessThan($items.first.index)
    })
  })

})

describe('createIndexer', () => {
  const indexer = createIndexer({items, keys})

  test('contains indexer methods', () => {
    methods.map(fn => expect(typeof indexer[fn]).toBe('function'))
  })

  describe('indexer', () => {
    describe('first', () => {
      test('put display_name in first position', () => {
        const last = $items.last
        mover.first(last)
        expect(last.index).toBe(-1)
      })
    })

    describe('indexAll', () => {
      context('map', () => {
        const toIndex = items.map

        test('moves items using relative positions', () => {
          const indexed = indexer.indexAll(toIndex)

          expect(indexed[0].name).toBe('display_name')
          expect(indexed[1].name).toBe('height_in_cm')
          expect(indexed[2].name).toBe('favourite')
        })
      })

      context('list', () => {
        const toIndex = items.list

        test('moves items using relative positions', () => {
          const indexed = indexer.indexAll(toIndex)
          expect(indexed[0].name).toBe('display_name')
          expect(indexed[1].name).toBe('height_in_cm')
          expect(indexed[2].name).toBe('favourite')
        })
      })
    })
  })
})
