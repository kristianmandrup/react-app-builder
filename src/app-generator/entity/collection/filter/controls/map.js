import React from 'react';
import {addStyles} from '../../styling'

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
  const {name, value, handleChange, classes} = props
  return (<TextField
    id={name}
    name={name}
    label="Name"
    aria-labelledby="label"
    className={classes.string}
    value={display_name}
    onChange={this.handleChange}
    margin="normal"/>)
}

const number = (props) => {
  const {name, value, handleChange} = props
  return (<Slider
    id={name}
    name={name}
    className={classes.number}
    value={height_in_cm}
    aria-labelledby="label"
    onChange={handleChange}/>)
}

const boolean = (props) => {
  const {name, value, handleChange, layout} = props
  const color = (layout && layout.color) || 'primary'
  return (<Switch
    name={props.name}
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

const map = addStyles(styles, types)

export const controlMap = (type) => {
  return map[type] || map.default
}
