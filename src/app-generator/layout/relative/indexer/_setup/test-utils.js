export const random = (max) => Math.floor(Math.random() * max)

export const decorate = {
  randomIndexes: (map) => Object
    .keys(map)
    .reduce((acc, key) => {
      map[key].index = random(100)
      return map
    }, {})
}
