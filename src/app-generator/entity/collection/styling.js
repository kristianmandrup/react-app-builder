import {withStyles} from '@material-ui/core/styles';
import {error} from 'util';

export const createAddStyle = ({types, keys, styles}) => (acc, key) => {
  types = types || {}
  // get component for type
  const typeStyle = types[key]
  !typeStyle && error(`Missing type for ${key} in ${keys}`)
  // decorate type display component with styles
  acc[key] = withStyles(styles)(typeStyle);
  return acc
}

export const addStyles = ({
  styles = {},
  types = {}
}) => {
  const keys = Object.keys(types)
  const reducer = createAddStyle({types, keys, styles})
  return keys.reduce(reducer, {})
}
