import React from 'react';
import LazyLoad from 'react-lazyload';

const MapSection = () => (
  <LazyLoad height={256}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.4674414479473!2d152.9076217!3d-31.428795899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff27c65fb97d%3A0xeeea24670bd5da4c!2sChop+&#39;n+Chill!5e0!3m2!1sen!2sau!4v1556537369815!5m2!1sen!2sau"
      allowFullScreen
      className="w-full"
      frameBorder={0}
      title="location"
      height={256}
    />
  </LazyLoad>
);

export default MapSection;
