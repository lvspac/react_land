import React from 'react';

const Filter = () => (
  <section className="filter">
    <div className="wrapper">
      <div className="product-filter">
        <ul>
          <li>
            <input type="checkbox" />
            men
          </li>
          <li>
            <input type="checkbox" />
            women
          </li>
          <li>
            <input type="checkbox" />
            children
          </li>
        </ul>
        <div className="pronduct-filter__btn">
          see all products
        </div>
      </div>
    </div>
  </section>
);


export default Filter;