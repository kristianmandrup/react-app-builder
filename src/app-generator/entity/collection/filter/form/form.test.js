import React from 'react';
import {shallow, render} from 'enzyme';
import {createFilter, createFormFactory, createFilterFormFactory} from './form';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {formTypes, entities} from './state/_setup/config'

configure({adapter: new Adapter()});

describe('form', () => {
  test('createForm', () => {
    const createForm = createFormFactory({entities, formTypes})
    const form = createForm({name: 'person'})
    const {name, age} = form.initialState
    expect(form.initialState).toBeDefined()
    expect(name).toBe('')
    expect(age).toBe(60)
  })

  test.only('createFilter', () => {
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
    const createFilterForm = createFilterFormFactory({entities, formTypes})
    const filter = createFilter({name: 'person'})
    expect(filter.FormStateContainer).toBeDefined()
    expect(filter.Form).toBeDefined()
    // const filterForm = render(<form.FilterForm/>)
    // expect(filterForm.text()).toMatch(/age/)
  })
})
