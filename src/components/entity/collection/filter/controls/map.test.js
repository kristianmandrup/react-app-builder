import React from 'react';
import {shallow} from 'enzyme';
import {Controls} from './Controls';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('Filter Controls', () => {
  // Render controls
  const controls = shallow(<Controls/>);

  expect(controls.text()).toEqual(' Off');

  // checkbox   .find('input')   .simulate('change');

  expect(checkbox.text()).toEqual(' On');
});
