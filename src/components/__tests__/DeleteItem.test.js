import React from 'react';
import { shallow } from 'enzyme';
import DeleteItem from '../DeleteItem';
describe('Admin', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<DeleteItem />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});