import React from 'react';
// cleanup, fireEvent, waitForElement
import {render} from 'react-testing-library'
import 'jest-dom/extend-expect'

import {createFilter, createFormFactory, createFilterFormFactory} from './form';
import {formTypes, entities, forms} from './state/_setup/config'
import 'react-testing-library/cleanup-after-each'

import {apiFor} from '../../../../_test/utils'

const values = {
  name: 'Kristian',
  age: 32
}

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup)

const createInputTester = (form, input) => ({name, value}) => {
  const api = apiFor(input)
  // api.setFieldValue(name, value) api.submit()
  api.change(name, value)
  expect(filterForm.state('name')).toEqual(value);
}

const testInputs = ({inputs, form}) => Object
  .keys(inputs)
  .map(key => {
    const testInput = createInputTester(form, inputs[key])
    testInput({name: key, value: values[key]})
  })

const makeFilter = (name = 'person') => {
  const createFilterForm = createFilterFormFactory({entities, formTypes, forms})
  return createFilterForm({name})
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
    console.log('createFilter', {
      form: form.html()
    })
    expect(form.text()).toBeDefined()
  })

  test('createFilterFormFactory', () => {
    // Render controls
    const {filter, config} = makeFilter()
    expect(config).toBeDefined()
    expect(filter.FormStateContainer).toBeDefined()
    expect(filter.Form).toBeDefined()
  })

  test.only('form state management', () => {
    const {filter, config} = makeFilter()
    expect(config.initialState.name).toBeDefined()

    const {getByTestId, container} = render(<filter.Form/>)
    console.log({filter, state: filter.state, container})

    expect(filterForm.text()).toMatch(/age/)
    const inputs = {
      name: getByTestId('name'),
      age: getByTestId('age')
    }
    console.log({inputs})

    expect(inputs.name).toBeTruthy()
    expect(inputs.age).toBeTruthy()

    // testInputs({inputs, form: filterForm})
  })
})
