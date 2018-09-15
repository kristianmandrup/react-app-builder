const data = require('./matches.json')

// index.js
module.exports = () => {
  data.matches = data
    .matches
    .map((item, index) => ({
      id: index,
      ...item
    }))
  return data
}
