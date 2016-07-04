import React, { PropTypes } from 'react';
import SimpleForm from '../SimpleForm';
import moment from 'moment';
moment.locale('en-GB');

class CustomerForm extends SimpleForm {

  static propTypes = { onSubmit: PropTypes.func.isRequired };
  state = {
    dateOfBirth: moment('1990 01 01', 'YYYY MM DD'), // scroll back the calendar
    title: 'Mr',
    employmentStatus: 'Full Time',
  };
  handleSubmit = ev => {
    ev.preventDefault();
    const annualIncome = isNaN(this.state.annualIncome)?0:+this.state.annualIncome;
    if (Math.abs(annualIncome)>1000000000000)
      return alert(`
        Looks like someone is filthy ${annualIncome > 0 ? 'rich' : 'poor'}.
        Do you really need a crazy card? Application declined.
      `);
    this.props.onSubmit(this.state.employmentStatus, annualIncome);
  };

  render() {
    return (
      <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit}>
        <h1>Application Form</h1>
        <fieldset>
          <legend>Enter your details</legend>
          {[
            this.renderSelect('title', ['Mr', 'Ms', 'Mrs', 'Miss']),
            this.renderInput('firstName'),
            this.renderInput('lastName'),
            this.renderDatePicker('dateOfBirth'),
            this.renderInput('annualIncome', 'number', 'pounds'),
            this.renderSelect('employmentStatus', ['Full Time', 'Student', 'Part Time']),
            this.renderInput('houseNumber'),
            this.renderInput('postcode'),
          ]}
          <div className="pure-controls">
            <button type="submit" className="pure-button button-primary">Apply</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default CustomerForm;
