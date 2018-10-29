import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from '../NoMatch';

const location = { pathname: '/product-detail'};
describe('Admin', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<NoMatch location={location}/>);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});