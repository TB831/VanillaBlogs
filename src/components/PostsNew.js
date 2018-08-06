import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) { // Field contains event handlers to the event were wiring up
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;  //

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name='title'
          label='Title of Post'
          component={this.renderField}
        />
        <Field
          name='categories'
          label='Categories'
          component={this.renderField}
        />
        <Field
          name='content'
          label='Post Content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

function validate(values) { // Values is an object of values that the user entered in the form
  const errors = {};

  // Validate the input from 'values'
  if (!values.title) {
    errors.title = 'Enter a title name';
  }

  if (!values.categories) {
    errors.categories = 'Enter a category';
  }

  if (!values.content) {
    errors.content = 'Enter a some content';
  }

  // If errors is empty, the form is fine to submit
  // If errors has an properties, redux assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, // validate function for reduxForm. validate = validate: validate
  form: 'PostsNewForm'  // form = name of the form
})(PostsNew);
