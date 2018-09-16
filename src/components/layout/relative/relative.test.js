import context from 'jest-plugin-context';

describe('matcher', () => {
  test('true when match', () => {
    const item = $items.first
    const match = contains(keys.first, item)
    expect(match).toBe(true)
  })
})

const obj = {
  x: {
    first: true
  },
  y: {
    last: true
  },
  a: {}
}

const badObj = {
  ...obj,
  b: 0
}

describe('createKeysOf', () => {
  const keys = createKeysOf(obj)

  test('first keys found', () => {
    expect(keys.first).toInclude('x')
  })

  test('last keys found', () => {
    expect(keys.first).toInclude('y')
  })
})

describe('sortList', () => {
  const items = [
    {
      name: 'mid',
      index: 2
    }, {
      name: 'last',
      index: 999
    }, {
      name: 'first',
      index: -1
    }
  ]

  test('sorts list by ascending index', () => {
    const sorted = sortList(items)
    expect(sorted[0].name).toBe('first')
    expect(sorted[2].name).toBe('last')
  })
})

describe('sortMap', () => {
  const map = {
    mid: {
      name: 'mid',
      index: 2
    },
    last: {
      name: 'last',
      index: 999
    },
    first: {
      name: 'first',
      index: -1
    }
  }

  test('sorts list by ascending index', () => {
    const sorted = sortList(map)
    expect(sorted[0].name).toBe('first')
    expect(sorted[2].name).toBe('last')
  })
})

describe('relative', () => {})
