import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap, {
  TweenMax, Power4, TimelineLite, Power2,
} from 'gsap';

const Footer = () => {
  const paragraph = useRef(null);
  const intersection = useIntersection(paragraph,
    {
      root: null,
      rootMArgin: '0px',
      threshold: 0.5,
    });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };
  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut('.footer-info__details') : fadeIn('.footer-info__details');
  return (
    <section className="footer">
      <div className="wrapper">
        <div className="footer-info">
          <div ref={paragraph} className="footer-info__details">
            <h1>trekking</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nulla ex aliquid placeat quas perspiciatis officiis eum ipsum sequi alias aliquam quidem, vitae excepturi voluptas itaque est quibusdam doloremque magnam!
          </div>
          <div className="footer-info__author">
            <p>Design by gianluca cosetta</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
