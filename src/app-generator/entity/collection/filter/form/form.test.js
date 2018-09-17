import React from 'react';
import {shallow, render} from 'enzyme';
import {createForm, createFilterForm} from './form';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const forms = {
  person: {
    filter: {
      autoComplete: 'off'
    }
  }
}

const person = {
  properties: {
    name: {
      type: 'string',
      value: 'mike'
    },
    age: {
      type: 'integer',
      value: 32
    }
  }
}

// TODO: use property schema to return default value, such as middle of range
// TODO: code taken from controls, make DRY

const midRange = ({min, max}) => Math.round((max - min) / 2)

const number = (schemaProp) => (schemaProp.min
  ? midRange(schemaProp)
  : 0)

const formTypes = {
  string: '',
  boolean: false,
  number,
  integer: number
}

const type = person

describe('form', () => {
  test.only('createForm', () => {
    const form = createForm({entity: 'person'})
    const {name, age} = form.initialState
    console.log({form, name, age})
    expect(form.initialState).toBeDefined()
  })

  test('createFilterForm', () => {
    // Render controls
    const filterForm = createFilterForm(type)
    expect(filterForm.text()).toMatch(/age/)
  })
})
