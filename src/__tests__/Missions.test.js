/* eslint-disable*/

import renderer from 'react-test-renderer';
import Missions from '../__mocks__/MissionsMock';

it('renders correctly', () => {
  const tree = renderer
    .create(<Missions />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
