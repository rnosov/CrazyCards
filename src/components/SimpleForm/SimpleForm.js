/**
 * CrazyCards Base Form Component
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { humanize } from 'underscore.string';
import DatePicker from 'react-datepicker';

class SimpleForm extends Component {

  labelClassName = 'pure-control-group';
  handleChange = ev => this.setState({ [ev.target.id]: ev.target.value });

  handleDate(id) {
    return date => this.setState({ [id]: date });
  }

  renderLabel(label, id, control, afterText = '') {
    return (
      <div key={id} className={this.labelClassName}>
        <label htmlFor={id}>{label}</label>
        {control} {afterText}
      </div>
    );
  }

  renderInput(id, type = 'text', afterText = '') {
    const label = humanize(id);
    return this.renderLabel(label, id,
      <input
        id={id}
        placeholder={label}
        type={type}
        value={this.state[id] !== void 0 ? this.state[id] : ''}
        onChange={this.handleChange}
      />, afterText);
  }

  renderSelect(id, options) {
    const label = humanize(id);
    return this.renderLabel(label, id,
      <select id={id} onChange={this.handleChange} value={this.state[id]}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    );
  }

  renderDatePicker(id) {
    const label = humanize(id);
    return this.renderLabel(label, id,
      <DatePicker
        selected={this.state[id]}
        onChange={this.handleDate(id)}
        id={id}
        placeholderText={label}
      />
    );
  }
}

export default SimpleForm;
