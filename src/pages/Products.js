import React, { useRef, useEffect } from 'react';
import {
  TweenMax, Power3, TimelineLite, Power2,
} from 'gsap';
import articles from './articles';
import ProductsComponent from '../components/ProductComponent';
import ProductItem from './ProductItem';
import NavBar from '../NavBar';
import Filter from './Filter';

const ProductsPage = () => {
  let item = useRef(null);
  useEffect(() => {
    TweenMax.from(item, 1, { x: 0, y: -100 });
  // TweenMax.staggerFrom([item], 1, { opacity: 0, x: -100, ease: Power3.easeOut }, 0.2);
  }, []);
  return (
    <>
      {/* <h1>Products page</h1>
    <ProductsComponent articles={articles} /> */}
      <NavBar />
      <Filter />

      <section id="product-items" className="products">

        <div className="wrapper">
          <div className="product-category">
            <span className="product-category__name">men</span>
            <div className="product-category__line" />
          </div>
          <div ref={(el) => { item = el; }} className="products-items">
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </section>

    </>

  );
};

export default ProductsPage;
