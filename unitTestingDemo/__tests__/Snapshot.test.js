// __tests__/Intro-test.js
import React from 'react';
import Intro from '../components/Intro';

import renderer from 'react-test-renderer';

test('renders correctly snapshot testing', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});