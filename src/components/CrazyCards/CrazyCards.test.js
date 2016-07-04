/**
 * CrazyCards Main Entry Point tests
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CrazyCards from './CrazyCards';
import CrazyTable from '../CrazyTable';
import CustomerForm from '../CustomerForm';


describe('CrazyCards', () => {

  it('Renders status messages correctly', () => {
    const wrapper = shallow(<CrazyCards />);
    wrapper.setState({'status':'qwerty'});
    expect(wrapper.contains(<h4>qwerty</h4>)).to.be.true;
  });

});
