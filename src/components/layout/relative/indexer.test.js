import {createIndexer} from './indexer'
import {types} from './types'

describe('createIndexer', () => {
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
