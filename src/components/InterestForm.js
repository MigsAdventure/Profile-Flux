const React = require('react');

const InterestForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const {interest} = this.refs;

    let newInterest = interest.value;
    interest.value = '';
    interest.focus();

    this.props.addInterest(newInterest);
  },

  render() {
    return (
      <form onSubmit = {this.submitForm}>
        <input className='text-center' ref="interest" type="text" id="interestIn" placeholder='Interests' />
        <button className='btn btn-secondary'>Add</button>
      </form>
      )
  }

});

module.exports = InterestForm;