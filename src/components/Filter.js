import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRegisByCategoryName, fetchRegis } from '../actions';

const Filter = ({ categories, fetchRegisByCategoryName, fetchRegis }) => {

  const handleClick = (name) => {
    fetchRegisByCategoryName(name);
  };

  const filterItem = categories.map((category) => {
    return (
      <li
        key={category.category_id}
        onClick={() => handleClick(category.category_name)}
      >
        <Link to={`/`}>{category.category_name}</Link>
      </li>
    );
  });

  return (
    <div className="mt-4 artboard artboard-demo bg-base-200 container mx-auto">
      <ul
        className="
    menu
    items-stretch
    px-3
    shadow-lg
    bg-base-100
    horizontal
    rounded-box
  "
      >
        <li onClick={fetchRegis}>
          <Link to="/">All</Link>
        </li>
        {filterItem}
      </ul>
    </div>
  );
};

export default connect(null, { fetchRegisByCategoryName, fetchRegis })(Filter);
