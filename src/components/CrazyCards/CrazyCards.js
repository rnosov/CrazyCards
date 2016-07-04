/**
 * CrazyCards Main Entry Point and REST API consumer
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import CustomerForm from '../CustomerForm';
import CrazyTable from '../CrazyTable';
import fetch from '../../core/fetch';

const cardFields = [
  'name',
  'apr',
  'balanceTransferOfferDuration',
  'purchaseOfferDuration',
  'creditAvailable',
];
const initialState = { status: 'form' };

class CrazyCards extends Component {

  state = initialState;

  fetchCards = async (employmentStatus, annualIncome) => {
    this.setState({ status: 'Loading, please wait' });
    const query = `{cards(
      employmentStatus:"${employmentStatus}",
      annualIncome:${+(annualIncome)}
      ){${cardFields.join()}}}`;
    const response = await fetch(`/graphql?query=${query}`);
    const data = await response.json();
    if (!data || !data.data || !data.data.cards || data.errors)
      this.setState({ status: 'There was an error while loading data' });
    else
      this.setState({ status: 'table', data: data.data.cards });
  };

  render() {
    switch (this.state.status) {
      case 'form': return <CustomerForm onSubmit={this.fetchCards} />;
      case 'table': return( <CrazyTable
                              data={this.state.data}
                              goBack={ () => this.setState(initialState) }
                            />);
      default: return <h4>{this.state.status}</h4>;
    }
  }

}

export default CrazyCards;
