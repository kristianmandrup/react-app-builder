export const items = {
  _map: {
    height_in_cm: {},
    favourite: {},
    display_name: {}
  },
  map: {
    height_in_cm: {
      name: 'height_in_cm'
    },
    favourite: {
      name: 'favourite'
    },
    display_name: {
      name: 'display_name'
    }
  },
  list: ['height_in_cm', 'favourite', 'display_name']
}

export const methods = ['first', 'last', 'before', 'after']

export const layout = {
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

export const keys = {
  first: ['height_in_cm'],
  last: ['favourite']
}

export const $items = {
  list: {
    first: items.list[2],
    last: items.list[1]
  },
  map: {
    first: items.map.height_in_cm,
    last: items.map.favourite
  }
}
