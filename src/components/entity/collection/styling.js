import {withStyles} from '@material-ui/core/styles';

export const addStyles = (styles, types) => {
  return Object
    .keys(types)
    .reduce((acc, key) => {
      const typeStyle = types[key]
      acc[key] = withStyles(styles)(typeStyle);
      return acc
    }, {})
}
