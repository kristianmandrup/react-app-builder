import React from 'react';
import {addStyles} from '../../../styling'
import {Switch, TextField} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

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

const humanize = (str) => str

const string = (props) => {
  const {name, label, type, value, handleChange} = props
  const classes = props.classes || {}
  const displayLabel = label || humanize(name)
  return (<TextField
    id={name}
    name={name}
    label={displayLabel}
    aria-labelledby="label"
    className={classes.string}
    value={value}
    onChange={handleChange}
    margin="normal"/>)
}

const number = (props) => {
  const {name, value, handleChange} = props
  const classes = props.classes || {}
  return (<Slider
    id={name}
    name={name}
    className={classes.number}
    value={value}
    aria-labelledby="label"
    onChange={handleChange}/>)
}

const boolean = (props) => {
  const {name, value, handleChange, layout} = props
  const classes = props.classes || {}
  const color = (layout && layout.color) || 'primary'
  return (<Switch
    name={name}
    aria-labelledby="label"
    className={classes.string}
    checked={value}
    onChange={handleChange}
    value={value}
    color={color}/>)
}
const types = {
  string,
  integer: number,
  number,
  boolean,
  default: string
}

const map = addStyles({styles, types})

export const controlMap = (type) => {
  return map[type] || map.default
}
