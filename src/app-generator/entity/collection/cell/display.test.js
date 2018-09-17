import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Display} from './display'

configure({adapter: new Adapter()});

describe('Display', () => {
  test('can display a single collection cell', () => {
    const item = {
      name: 'person',
      value: 'mike'
    }
    const cell = shallow(<Display item={item}/>);
    expect(cell.text()).toEqual(' mike');
  })
})
