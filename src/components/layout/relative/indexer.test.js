import {createIndexer, contains, createPlacer} from './indexer'

const items = {
  map: {
    height_in_cm: {},
    favourite: {},
    display_name: {}
  },
  list: ['height_in_cm', 'favourite', 'display_name']
}

const indexer = createIndexer({items, keys})

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

describe('createIndexer', () => {
  test('contains mover methods', () => {
    methods.map(fn => expect(typeof indexer[fn]).toBe('function'))
  })

  describe('mover', () => {
    describe('first', () => {
      test('moves display_name into first position', () => {
        const display_name = items.list[2]
        mover.first(display_name)
        expect(display_name.index).toBe(-1)
      })
    })

    describe('relative', () => {
      test('moves items using relative positions', () => {
        expect(moved[0].name).toBe('display_name')
        expect(moved[1].name).toBe('height_in_cm')
        expect(moved[2].name).toBe('favourite')
      })
    })
  })
})
