import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchCategories, regisFunRun, fetchRegis } from '../actions';
import history from '../history';

class RegisFunRun extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderRadio = (input) => {
    const radios = this.props.categories.map((category, i) => {
      return (
        <div className="form-control" key={category.category_id}>
          <label className="cursor-pointer label">
            <span className="label-text">
              {category.category_name} {category.length}
              {category.price} Bath
            </span>
            <input
              type="radio"
              name={input.name}
              className="radio radio-secondary"
              onChange={input.onChange}
              value={category.category_id}
              // checked={`${i === 0 ? 'checked' : ''}`}
            />
          </label>
        </div>
      );
    });

    return radios;
  };

  renderInput = ({ input }) => {
    // console.log(input);
    return <div className="p-6 card bordered">{this.renderRadio(input)}</div>;
  };

  onSubmit = (formValues) => {
    console.log(formValues);
    if (!formValues.category_name) return;
    this.props.regisFunRun({
      category_id: formValues.category_name,
      member_id: this.props.userId,
    });
    history.push('/');
    this.props.fetchRegis();
  };

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
              <h2 className="text-secondary text-center text-primary pb-4">
                Funrun Form
              </h2>
              <Field name="category_name" component={this.renderInput} />
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

const formWrapped = reduxForm({
  form: 'RegisForm',
})(RegisFunRun);

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, {
  fetchCategories,
  regisFunRun,
  fetchRegis,
})(formWrapped);
