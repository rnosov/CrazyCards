/**
 * CrazyCards Crazy Table UI
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';

class CrazyTable extends Component {

  static propTypes = {
    goBack: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
  };
  state = {};

  render() {
    let totalCredit = 0;
    return (
      <div>
        <h1>Available Cards</h1>
        <table width="100%" className="pure-table pure-table-striped pure-table-horizontal">
          <tbody>
            {this.props.data.map(card => {
              const {name} = card, selected = this.state[name];
              if (selected) totalCredit += card.creditAvailable;
              return(
                <tr key={name}>
                  <td>
                    <button
                      onClick={() => this.setState({ [name]:!selected })}
                      className={'pure-button button-'+(selected?'success':'primary')}
                    >
                      {(selected ? '✔ ' : '') + name}
                    </button>
                    {selected?(
                      <div class="pure-g">
                        <div className="pure-u-1">APR: <strong>{(card.apr*100).toFixed(1)+'%'}</strong></div>
                        <div className="pure-u-1">Balance Transfer Offer Duration: <strong>{card.balanceTransferOfferDuration} months</strong></div>
                        <div className="pure-u-1">Purchase Offer Duration: <strong>{card.purchaseOfferDuration} months</strong></div>
                        <div className="pure-u-1">Credit Available: <strong>£{card.creditAvailable}</strong></div>
                      </div>
                    ):''}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3>Total Credit Available: £{totalCredit}</h3>
        <button onClick={this.props.goBack} className="pure-button button-warning">
          Apply Again
        </button>
      </div>
    );
  }
}

export default CrazyTable;
