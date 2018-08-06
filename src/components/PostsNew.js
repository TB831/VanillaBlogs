import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) { // Field contains event handlers to the event were wiring up
    return (
      <div>
      <input
        type='text'
        {...field.input}
      />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name='title'
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'  // form = name of the form
})(PostsNew);
