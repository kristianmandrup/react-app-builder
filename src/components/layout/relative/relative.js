// use before, after, first, last y: {   before: 'x' }, x: {   first: true }

const matcher = (layout) => test => Object
  .keys(layout)
  .find(key => {
    const obj = layout[key]
    return test(obj)
  })

import {createMover} from './mover'

const relative = ({layout, items}) => {
  items = items.map((item, index) => item.index = index * 50)
  const match = matcher(layout)
  const keys = {
    first: match((obj) => obj.first),
    last: match((obj) => obj.last)
  }
  const move = createMover({items, keys})
  move()

  return item.sort((a, b) => b.index - a.index)
}
