import React from 'react';
import {shallow, render} from 'enzyme';
import {controlMap} from './map';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const cell = {
  name: 'person',
  value: 'mike'
}

test('Control map', () => {
  // Render controls
  const Control = controlMap('string')
  const control = render(<Control {...cell}/>);
  const html = control.html()
  const text = control.text()
  expect(text).toMatch(/person/);
  expect(html).toMatch(/mike/);
});
