// TODO: Ideally generate from rawJSON data
export const types = {
  person: {
    display_name: {
      type: 'string'
    },
    height_in_cm: {
      type: 'integer',
      min: 130,
      max: 220
    },
    favourite: {
      type: 'boolean'
    }
  }
}
