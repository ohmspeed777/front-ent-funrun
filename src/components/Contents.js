import React from 'react';
import { connect } from 'react-redux';

import { fetchRegis, fetchCategories } from '../actions';

import Card from './Cards';
import Filter from './Filter';
import Hero from './Hero';

class Contents extends React.Component {
  componentDidMount() {
    this.props.fetchRegis();
    this.props.fetchCategories();
  }

  renderCards() {
    return this.props.regisList.map((regis) => (
      <Card
        key={regis.regis_id}
        name={regis.name}
        length={regis.length}
        category_name={regis.category_name}
      />
    ));
  }



  render() {
    return (
      <div>
        <Hero />
        <Filter categories={this.props.categories}/>
        <div className="container grid grid-cols-4 mx-auto py-10 gap-4">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    regisList: Object.values(state.regis),
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { fetchRegis, fetchCategories })(
  Contents
);
