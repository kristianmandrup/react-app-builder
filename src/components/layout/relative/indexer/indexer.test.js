import context from 'jest-plugin-context';
import {random} from './utils'
import {createIndexer} from './indexer'
import {items, $items} from './_setup'

describe('createIndexer', () => {
  const indexer = createIndexer({items: items.map, keys})

  test('contains indexer methods', () => {
    methods.map(fn => expect(typeof indexer[fn]).toBe('function'))
  })

  describe('indexer', () => {
    describe('first', () => {
      test('put item in first position: -1', () => {
        const item = $items.last
        indexer.first({
          ...item,
          first: true
        })
        expect(item.index).toBe(-1)
      })
    })

    describe('last', () => {
      test('put item in last position: 999', () => {
        const item = $items.first
        indexer.last({
          ...item,
          last: true
        })
        expect(item.index).toBe(999)
      })
    })

    describe('before', () => {
      test('put item before other item', () => {
        const item = $items.first
        const oldIndex = item.index
        indexer.before({
          ...item,
          before: 'display_item'
        })
        expect(item.index).toBeLessThan(oldIndex)
      })
    })

    describe('after', () => {
      test('put item before other item', () => {
        const item = $items.first
        const oldIndex = item.index
        indexer.before({
          ...item,
          after: 'display_item'
        })
        expect(item.index).toBeGreaterThan(oldIndex)
      })
    })

    describe('reArrange', () => {
      test('put item in last position: 999', () => {
        const item = $items.first
        const oldIndex = item.index
        indexer.reArrange({
          ...item,
          before: 'display_item'
        })
        expect(item.index).toBeLessThan(oldIndex)
      })
    }),

    describe('firstAndLast', () => {
      test('put item in last position: 999', () => {
        const item = $items.first
        const oldIndex = item.index
        indexer.firstAndLast({
          ...item,
          last: true
        })
        expect(item.index).toBeGreaterThan(oldIndex)
      })
    }),

    describe.only('shuffle', () => {
      test('put display_name in first position', () => {
        const last = $items.last
        indexer.shuffle(last)
        expect(last.index).toBe(-1)
      })
    })

    describe.skip('indexAll', () => {
      context('map', () => {
        const toIndex = items.map
        console.log({toIndex})

        test('moves items using relative positions', () => {
          const indexed = indexer.indexAll()
          console.log({indexed})

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
