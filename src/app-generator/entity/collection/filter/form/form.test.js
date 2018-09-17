import React from 'react';
import {shallow, render} from 'enzyme';
import {createFormFactory, createFilterFormFactory} from './form';
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

  test('createFilterFormFactory', () => {
    // Render controls
    const createFilterForm = createFilterFormFactory({entities, formTypes})
    const FilterForm = createFilterForm({name: 'person'})
    const filterForm = render(<FilterForm/>)
    expect(filterForm.text()).toMatch(/age/)
  })
})
