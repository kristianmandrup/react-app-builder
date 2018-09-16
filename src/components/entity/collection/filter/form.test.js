import React from 'react';
import {shallow} from 'enzyme';
import {createForm, createFilterForm} from './controls';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const person = {
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer'
    }
  }
}

const type = person

test('createForm', () => {
  const Form = createForm(type)
  // Render controls
  const form = shallow(<Form/>);

  expect(form.text()).toEqual(' Off');
});

test('createFilterForm', () => {
  // Render controls
  const filterForm = createFilterForm(type);

  expect(filterForm.text()).toEqual(' Off');
});
