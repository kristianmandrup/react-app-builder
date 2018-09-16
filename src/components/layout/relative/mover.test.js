import {buildAll} from './build'
import {types} from './types'

describe('createMover', () => {
  const items = ['height_in_cm', 'favourite', 'display_name']

  const mover = createMover(items, keys)

  const methods = ['first', 'last', 'before', 'after']

  test('contains mover methods', () => {
    methods.map(fn => expect(typeof mover[fn]).toBe('function'))
  })

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

  describe('mover', () => {
    describe('first', () => {
      test('moves display_name into first position', () => {
        const display_name = items[2]
        mover.first(display_name)
        expect(moved[0].name).toBe('display_name')
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
