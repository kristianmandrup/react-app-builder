import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Container} from './container'

configure({adapter: new Adapter()});

describe('Container', () => {
  test('displays a collection container', () => {
    const item = {
      name: 'person',
      value: 'mike'
    }
    const list = [item]

    const container = shallow(<Container list={list}/>);
    expect(container.text()).toEqual(' mike');
  })
})