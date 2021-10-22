import React from 'react';

const Card = () => {
  return (
    <div className="card bordered">
      <figure>
        <img src="https://images.unsplash.com/photo-1610969544920-47371c6d0d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          ชื่อ จิรายุส สหพรอุดมการ
          <div className="badge mx-2 badge-secondary">NEW</div>
        </h2>
        <ul>
          <li>ประเภท funrun</li>
          <li>ระยะทาง 15.6 Km</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
