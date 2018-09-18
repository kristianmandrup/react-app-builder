import React from 'react';
import {shallow, render} from 'enzyme';
import {createFilter, createFormFactory, createFilterFormFactory} from './form';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {formTypes, entities} from './state/_setup/config'

configure({adapter: new Adapter()});

const values = {
  name: 'Kristian',
  age: 32
}

const createInputTester = (form, input) => ({name, value}) => {
  inputs
    .name
    .simulate('change', {
      target: {
        name,
        value
      }
    });
  expect(filterForm.state('name')).toEqual(value);
}

const testInputs = ({inputs, form}) => Object
  .keys(inputs)
  .map(key => {
    const testInput = createInputTester(form, inputs[key])
    testInput({name: key, value: values[key]})
  })

const makeFilter = (name = 'person') => {
  const createFilterForm = createFilterFormFactory({entities, formTypes})
  return createFilter({name})
}

describe('form', () => {
  test('createForm', () => {
    const createForm = createFormFactory({entities, formTypes})
    const form = createForm({name: 'person'})
    const {name, age} = form.initialState
    expect(form.initialState).toBeDefined()
    expect(name).toBe('')
    expect(age).toBe(60)
  })

  test('createFilter', () => {
    const config = {
      filter: (items) => items,
      initialState: {
        name: '',
        age: 60
      }
    }
    const filter = createFilter({config})
    const form = render(<filter.Form/>)
    expect(form.text()).toBeDefined()
  })

  test('createFilterFormFactory', () => {
    // Render controls
    const filter = makeFilter()
    expect(filter.FormStateContainer).toBeDefined()
    expect(filter.Form).toBeDefined()
  })

  test.only('form state management', () => {
    const filter = makeFilter()
    const filterForm = render(<filter.Form/>)
    expect(filterForm.text()).toMatch(/age/)
    const inputs = {
      name: filterForm.find('form#name'),
      age: filterForm.find('form#age')
    }

    expect(inputs.name.exists()).toBe(true)
    expect(inputs.age.exists()).toBe(true)

    testInputs({inputs, form: filterForm})
  })
})
