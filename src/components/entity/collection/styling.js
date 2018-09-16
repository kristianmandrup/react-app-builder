import {withStyles} from '@material-ui/core/styles';

export const addStyle = types => (acc, key) => {
  // get component for type
  const typeStyle = types[key]
  // decorate type display component with styles
  acc[key] = withStyles(styles)(typeStyle);
  return acc
}

export const addStyles = (styles, types) => Object
  .keys(types)
  .reduce(addStyle(types), {})
