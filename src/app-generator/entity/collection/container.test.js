import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CollectionContainer} from './container'

configure({adapter: new Adapter()});

describe('CollectionContainer', () => {
  test('displays a collection container', () => {
    const item = {
      name: 'person',
      value: 'mike'
    }
    const list = [item]

    const container = shallow(<CollectionContainer list={list}/>);
    expect(container.text()).toEqual(' mike');
  })
})
