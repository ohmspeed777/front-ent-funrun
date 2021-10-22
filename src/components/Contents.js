import React from 'react';
import Card from './Cards';
import Filter from './Filter';

class Contents extends React.Component {
  renderCards() {
    return [...new Array(20)].map((el, index) => <Card key={index}/>);
  }

  render() {
    return (
      <div>
        <Filter />
        <div className="container grid grid-cols-4 mx-auto py-10 gap-4">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default Contents;
