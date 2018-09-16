import context from 'jest-plugin-context';
import {createIndexer} from './indexer'
import {items, $items, keys, methods} from './_setup'

describe('createIndexer', () => {
  const indexer = createIndexer({items: items.map, keys})

  test('contains indexer methods', () => {
    methods.map(fn => expect(typeof indexer[fn]).toBe('function'))
  })

  describe('indexer', () => {
    describe('first', () => {
      test('put item in first position: -1', () => {
        const item = $items.map.first
        console.log({item})
        const indexed = indexer.first({
          ...item,
          first: true
        })
        console.log({item, indexed})
        expect(item.index).toBe(-1)
      })
    })

    describe('last', () => {
      test('put item in last position: 999', () => {
        const item = $items.map.last
        const indexed = indexer.last({
          ...item,
          last: true
        })
        expect(item.index).toBe(999)
      })
    })

    describe('before', () => {
      test('put item before display_name', () => {
        const item = $items.map.first
        const display_name = items.map.display_name
        display_name.index = 3
        const indexed = indexer.before({
          ...item,
          before: 'display_name'
        })

        // console.log({indexed, display_name})
        expect(indexed.index).toBeLessThan(display_name.index)
      })
    })

    describe('after', () => {
      test('put item after display_name', () => {
        const item = $items.first
        const display_name = items.map.display_name
        display_name.index = 3
        const indexed = indexer.after({
          ...item,
          after: 'display_name'
        })
        expect(indexed.index).toBeGreaterThan(display_name.index)
      })
    })

    describe('reArrange', () => {
      test('put item before display_name', () => {
        const item = $items.first
        const display_name = items.map.display_name
        display_name.index = 3
        const indexed = indexer.reArrange({
          ...item,
          before: 'display_name'
        })
        // console.log('reArrange', {indexed, item})
        expect(indexed.index).toBeLessThan(display_name.index)
      })
    }),

    describe('firstAndLast', () => {
      test('put item in first position: -1', () => {
        const item = $items.map.first
        const oldIndex = item.index
        const indexed = indexer.firstAndLast({
          ...item,
          first: true
        })
        // console.log('firstAndLast', {indexed, item})
        expect(item.index).toBe(-1)
      })
    }),

    describe('shuffle', () => {
      test('put display_name in first position', () => {
        const item = $items.map.last
        const indexed = indexer.shuffle({
          ...item,
          last: true
        })
        // console.log({item, indexed})
        expect(item.index).toBe(999)
      })
    })

    describe.only('indexAll', () => {
      context('map', () => {
        test('moves items using relative positions', () => {
          const indexed = indexer.indexAll()
          // console.log({indexed})

          expect(indexed[0].name).toBe('height_in_cm')
          expect(indexed[1].name).toBe('favourite')
          expect(indexed[2].name).toBe('display_name')
        })
      })

      context('list', () => {
        const toIndex = items.list

        test('moves items using relative positions', () => {
          const indexed = indexer.indexAll(toIndex)
          // console.log({indexed})
          expect(indexed[0].name).toBe('height_in_cm')
          expect(indexed[1].name).toBe('favourite')
          expect(indexed[2].name).toBe('display_name')
        })
      })
    })
  })
})
