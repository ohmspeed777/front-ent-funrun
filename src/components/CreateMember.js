import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createMember } from '../actions';
import history from '../history';

class CreateMember extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <label className="label">
          <span className="label-text-alt">{error}</span>
        </label>
      );
    }
  }

  renderInput = ({ label, meta, input, placeholder, type }) => {
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>

        <input
          {...input}
          type={type}
          placeholder={placeholder}
          className={`input input-bordered ${
            meta.touched && meta.error ? 'input-error' : ''
          }`}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createMember(formValues);
    history.push('/login')
  }

  render() {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="flex-col justify-center hero-content lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <div className="card-body">
              <h2 className="text-primary-300 text-center text-primary">
                Registration
              </h2>
              <Field
                name="id"
                component={this.renderInput}
                label="Card id"
                placeholder="Enter your card id"
                type="text"
              />
              <Field
                name="name"
                component={this.renderInput}
                label="Name"
                placeholder="Enter your name"
                type="text"
              />
              <Field
                name="age"
                component={this.renderInput}
                label="Age"
                placeholder="Enter your age"
                type="number"
              />
              <Field
                name="email"
                component={this.renderInput}
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <Field
                name="password"
                component={this.renderInput}
                label="Password"
                placeholder="Enter your password"
                type="password"
              />

              <Field
                name="confirmPassword"
                component={this.renderInput}
                label="Password"
                placeholder="Enter your confirmPassword"
                type="password"
              />

              <div className="form-control mt-6">
                <input
                  type="submit"
                  defaultValue="Login"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.id) {
    errors.id = 'You must enter a card id';
  }

  if (!values.name) {
    errors.name = 'You must enter a name';
  }

  if (!values.age) {
    errors.age = 'You must enter a age';
  }

  if (!values.email) {
    errors.email = 'You must enter a email';
  }

  if (!values.password) {
    errors.password = 'You must enter a password';
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password not match';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'CreateMemberForm',
  validate,
})(CreateMember);

export default connect(null, { createMember })(formWrapped);
