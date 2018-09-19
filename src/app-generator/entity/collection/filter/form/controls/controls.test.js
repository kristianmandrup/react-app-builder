import React from 'react';
import {shallow, render} from 'enzyme';
import {DisplayControls} from './controls';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const fields = [
  {
    name: 'person',
    value: 'mike'
  }, {
    name: 'age',
    value: 32
  }
]

test('Filter Controls', () => {
  // Render controls

  const controls = render(<DisplayControls fields={fields}/>);
  const text = controls.text()
  const html = controls.html()
  expect(text).toMatch(/person/);
  expect(html).toMatch(/mike/);
});
