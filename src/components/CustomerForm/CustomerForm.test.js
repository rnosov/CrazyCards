/**
 * CrazyCards Customer Form tests
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CustomerForm from './CustomerForm';

describe('CustomerForm', () => {

  it('Renders Annual Income input field', () => {
    const wrapper = shallow(<CustomerForm onSubmit={ () => {} }/>);
    expect(wrapper.find('#annualIncome')).to.have.length(1);
  });

  it('Renders employmentStatus field', () => {
    const wrapper = shallow(<CustomerForm onSubmit={ () => {} }/>);
    expect(wrapper.find('#employmentStatus')).to.have.length(1);
  });

  it('Renders apply button correctly', () => {
    const wrapper = shallow(<CustomerForm onSubmit={ () => {} }/>);
    expect(wrapper.contains(<button type="submit" className="pure-button button-primary">Apply</button>)).to.be.true;
  });

});
