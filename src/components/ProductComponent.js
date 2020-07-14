import React from 'react';
import { Link } from 'react-router-dom';

const ProductsComponent = ({ ...props }) => (
  <>

    {props.articles.map((article) => (
      <>
        <Link to={`/product/${article.name}`}>
          <h3>{article.title}</h3>
          <p>
            {article.content[0].substring(0, 150)}
            ...
          </p>
        </Link>

        <hr />
      </>
    ))}

  </>

);

export default ProductsComponent;
