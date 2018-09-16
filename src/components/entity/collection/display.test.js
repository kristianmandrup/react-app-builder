import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Display} from './display'

configure({adapter: new Adapter()});

describe('Display', () => {
  test('displays a collection list', () => {
    const item = {
      name: 'person',
      value: 'mike'
    }
    const list = [item]

    const display = shallow(<Display list={list}/>);
    expect(display.text()).toEqual(' mike');
  })
})
