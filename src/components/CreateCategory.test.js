import React from 'react';
import { shallow } from 'enzyme';
import CreateCategory from './CreateCategory';
describe('CreateCategory', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<CreateCategory />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});