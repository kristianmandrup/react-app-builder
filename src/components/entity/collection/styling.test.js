import React from 'react'
import {addStyles, addStyle} from './styling'

const component = (props) => {
  const {classes} = props
  console.log({classes});
  return (<div className={classes.main}/>)
}

const types = {
  string: component
}

describe('addStyle', () => {
  test('it can decorate component with styles', () => {
    const styledCmp = addStyle(styles, component)
    expect(styledCmp()).toBe()
  })
})

describe('addStyles', () => {
  test('it can decorate component with styles', () => {
    const styledCmps = addStyles(styles, types)
    const styledCmp = styledCmps['string']()
    expect(styledCmp()).toBe()
  })
})
