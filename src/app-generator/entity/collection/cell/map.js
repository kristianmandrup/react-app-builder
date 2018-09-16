import React from 'react';
import {addStyles} from '../styling';

// TODO: to be overridden by global app config
const styles = {
  root: {
    width: '100%',
    maxWidth: 500
  },
  string: {},
  integer: {},
  number: {},
  boolean: {}
};

const string = (props) => {
  const {classes, type, value} = props
  return (
    <Typography
      className={classes[type]}
      variant="body1"
      gutterBottom
      align="center">{value}
    </Typography>
  )
}

const types = {
  string,
  integer: string,
  number: string,
  boolean: string
}

const generic = addStyles(styles, types)

// TODO: to be "injected" by global app configuration
const names = {
  age: (props) => {
    const {classes, type, value} = props
    return (
      <Typography
        className={classes[type]}
        variant="body2"
        gutterBottom
        align="right">{value}
      </Typography>
    )
  }
}

const named = addStyles(styles, names)

export const map = {
  generic,
  named
}
