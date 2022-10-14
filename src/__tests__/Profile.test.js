/* eslint-disable*/

import renderer from 'react-test-renderer';
import Profile from '../__mocks__/ProfileMock';

it('renders correctly', () => {
  const tree = renderer
    .create(<Profile />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
