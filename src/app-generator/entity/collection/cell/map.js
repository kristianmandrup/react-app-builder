import React from 'react';
import {Typography} from '@material-ui/core';
import {addStyles} from '../styling';
import {getType} from './type'

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

const transform = {
  generic: {
    boolean: (value) => (value
      ? 'on'
      : 'off')
  },
  named: {}
}

const valueDisplay = (props) => {
  let {name, type} = props
  const {value} = props
  type = type || getType(value)

  const classes = props.classes || {}
  let transformer = name
    ? transform.named[name]
    : undefined
  transformer = transformer || transform.generic[type]
  const displayValue = transformer
    ? transformer(value)
    : value
  return (
    <Typography
      className={classes[type]}
      variant="body1"
      gutterBottom
      align="center">{displayValue}
    </Typography>
  )
}

export const types = {
  string: valueDisplay,
  integer: valueDisplay,
  number: valueDisplay,
  boolean: valueDisplay,
  default: valueDisplay
}

export const generic = addStyles({styles, types})

// TODO: to be "injected" by global app configuration
export const names = {
  age: (props) => {
    const {type, value} = props
    const classes = props.classes || {}
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

const named = addStyles({styles, types: names})

export const map = {
  generic,
  named
}
