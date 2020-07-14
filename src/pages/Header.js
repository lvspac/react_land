import React, { useEffect, useRef } from 'react';
import {
  TweenMax, Power3, TimelineLite, Power2,
} from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import ProductItem from './ProductItem';
import Footer from './Footer';
import ProductsPage from './Products';
import NavBar from '../NavBar';

const Header = () => {
  let text = useRef(null);
   useEffect(() => {
    //console.log(imgReveal);
     TweenMax.from(text, 1, { x: 0, y: -100});
    // TweenMax.from(item, 1, { opacity: 0, x: -100, ease: Power3.easeOut });
//     TweenMax.staggerFrom([item, item1, item2], 1, { opacity: 0, x: -100, ease: Power3.easeOut }, 0.2);

//     tl.to(imgContainer, 0, { css: { visibility: 'visible' } }).to(imgReveal, 2,
//       { ease: Power2.easeOut, width: '0%' }).from(img, 2, { scale: 1.6, ease: Power2.easeOut, delay: -1.6 });
//   }, []);
   },[])
  return (
    <>

      <section className="header">
        <NavBar />

        <div className="wrapper">

          <div ref={(el) =>{ text = el}} className="header-text">
            <h1 className="header-text__title">Our clothing , your comfort</h1>
            <p className="header-text__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              sit culpa fuga inventore neque deleniti? Repellendus consectetur sit
              suscipit ut?
            </p>
          </div>
        </div>
      </section>

    </>
  );
};
export default Header;
