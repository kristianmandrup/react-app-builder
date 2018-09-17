import React from 'react';
import {shallow, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {map, names, generic, types} from './map'

configure({adapter: new Adapter()});

describe('names', () => {
  test('has age', () => {
    expect(names.age).toBeDefined()
  })

  test('can display string component', () => {
    const DisplayProp = names.age
    const cell = render(<DisplayProp value={'x'}/>);
    expect(cell.text()).toMatch(/x/);
  })
})

describe('types', () => {
  test('has integer', () => {
    expect(types.integer).toBeDefined()
  })

  test('can display integer component', () => {
    const DisplayProp = types.integer
    const cell = render(<DisplayProp value={32}/>);
    expect(cell.text()).toMatch(/32/);
  })
})

describe('generic', () => {
  test('has boolean', () => {
    expect(generic.boolean).toBeDefined()
  })

  test('can display integer component', () => {
    const DisplayProp = types.integer
    const cell = render(<DisplayProp value={17}/>);
    expect(cell.text()).toMatch(/17/);
  })

  test('can display boolean component', () => {
    const DisplayProp = types.boolean
    const cell = render(<DisplayProp name='married' value={true} type='boolean'/>);
    expect(cell.text()).toMatch(/on/);
  })

  test('can display component - determines value is boolean', () => {
    const DisplayProp = types.boolean
    const cell = render(<DisplayProp name='married' value={true}/>);
    expect(cell.text()).toMatch(/on/);
  })
})

describe('map', () => {
  test('contains generic', () => {
    expect(map.generic).toBeDefined()
  })

  test('contains named', () => {
    expect(map.named).toBeDefined()
  })

  describe('named', () => {

    test('has age', () => {
      expect(map.named.age).toBeDefined()
    })

  })
})
