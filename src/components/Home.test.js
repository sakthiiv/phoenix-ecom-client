import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
describe('Home', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});