import React from 'react'
import {addStyles, addStyle} from './styling'

const component = (props) => {
  const {classes} = props
  console.log({classes});
  return (<div className={classes.main}/>)
}

const types = {
  person: {
    string: component
  }
}

const person = types.person

describe('addStyle', () => {
  test('it can decorate component with styles', () => {
    const styledCmp = addStyle({styles, types: person})
    expect(styledCmp({}, 'string')).toBeDefined()
  })
})

describe('addStyles', () => {
  test('it can decorate component with styles', () => {
    const styledCmps = addStyles({styles, types: person})
    const styledCmp = styledCmps['string']()
    expect(styledCmp()).toBeDefined()
  })
})
