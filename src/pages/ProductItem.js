import React, { useEffect } from 'react';
import articles from './articles';
import ProductsComponent from '../components/ProductComponent';
import NotFoundPage from './NotFound';

const ProductItem = ({match}) =>{
  
  return (
    <>
      {/* <h1>
        {name}
        {' '}
        page
      </h1>
      <p>{article.title}</p>
      <p>{article.content[0]}</p>

      <ProductsComponent articles={otherArticles} /> */}

      <div className="product-card">
        <div className="product-details">
          <div className="product-details__size">
            Size
            <span />
          </div>
          <div className="product-details__color">
            <ul>
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>

        <img src={require('../img/item1.png')} alt="" className="product__img" />

        <div className="product-details">
          <div className="product-details__name">T-shirt</div>
          <div className="product-details__price">59</div>
        </div>
      </div>

    </>
  );

}
// const { name } = match.params;
// const article = articles.filter((art) => art.name === name)[0];
// const otherArticles = articles.filter((art) => art.name !== name);

  // return (!article) ? <NotFoundPage /> :
 
export default ProductItem;
