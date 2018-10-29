import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from '../NoMatch';
describe('Admin', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<NoMatch />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});