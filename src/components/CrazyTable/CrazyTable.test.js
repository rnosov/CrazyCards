/**
 * CrazyCards Crazy Table tests
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CrazyTable from './CrazyTable';

describe('CrazyTable', () => {

  it('Renders Card name correctly', () => {
    const wrapper = shallow(<CrazyTable data={[{name:'Test123'}]} goBack={ () => {} }/>);
    expect(wrapper.contains('Test123')).to.be.true;
  });

  it('Renders APR correctly', () => {
    const wrapper = shallow(<CrazyTable data={[{apr:0.1}]} goBack={ () => {} }/>);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.contains('10.0%')).to.be.true;
  });

  it('Sums Correctly', () => {
    const wrapper = shallow(<CrazyTable data={[
      {name:'x',creditAvailable:123},
      {name:'y',creditAvailable:456},
      {name:'z',creditAvailable:789},
    ]} goBack={ () => {} }/>);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.contains(123+456)).to.be.true;
  });

});
