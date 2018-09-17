import React from 'react'
import {addStyles, createAddStyle} from './styling'

const component = (props) => {
  const {classes} = props
  return (<div className={classes.main}/>)
}

const styles = {
  main: {
    color: 'red'
  }
}

const types = {
  person: {
    string: component
  }
}

const person = types.person

describe('createAddStyle', () => {
  test('it create a reducer function that can decorate a component with styles', () => {
    const styledCmp = createAddStyle({styles, types: person})

    // use empty accumulator
    const reduced = styledCmp({}, 'string')

    expect(reduced['string']).toBeDefined()
  })
})

describe('addStyles', () => {
  test('it can decorate component with styles', () => {
    const styledCmps = addStyles({styles, types: person})
    const styledCmp = styledCmps['string']()
    const props = {}
    expect(styledCmp(props)).toBeDefined()
  })
})
