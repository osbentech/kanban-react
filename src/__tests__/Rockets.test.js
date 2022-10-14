/* eslint-disable*/

import renderer from 'react-test-renderer';
import Rockets from '../__mocks__/RocketsMock';

it('renders correctly', () => {
  const tree = renderer
    .create(<Rockets />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
