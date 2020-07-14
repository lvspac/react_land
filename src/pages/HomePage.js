import React, { useEffect, useRef } from 'react';
import {
  TweenMax, Power3, TimelineLite, Power2,
} from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const text = useRef(null);
  const item = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const img = useRef(null);
  const imgContainer = useRef(null);
  const imgReveal = CSSRulePlugin.getRule('.img:after');
  const tl = new TimelineLite();

  // useEffect(() => {
  //   console.log(imgReveal);
  //   // TweenMax.to(text, 1, {x: 100, y: 100});
  //   // TweenMax.from(item, 1, { opacity: 0, x: -100, ease: Power3.easeOut });
  //   TweenMax.staggerFrom([item, item1, item2], 1, { opacity: 0, x: -100, ease: Power3.easeOut }, 0.2);

  //   tl.to(imgContainer, 0, { css: { visibility: 'visible' } }).to(imgReveal, 2,
  //     { ease: Power2.easeOut, width: '0%' }).from(img, 2, { scale: 1.6, ease: Power2.easeOut, delay: -1.6 });
  // }, []);

  return (

    <>
      {/* <div ref={(el) => { text = el; }}>
        <h1>Home page</h1>
        <p>Some text</p>
        <ul>
          <li ref={(el) => item = el}>element 1 </li>
          <li ref={(el) => item1 = el}>element 2</li>
          <li ref={(el) => item2 = el}>element 3</li>
        </ul>
        <div className="img" ref={(el) => { imgContainer = el; }}>
          <img src={require('../img/bg.jpg')} ref={(el) => { img = el; }} />

        </div>

      </div> */}
      <Header />
      <Footer />

    </>

  );
};

export default HomePage;
