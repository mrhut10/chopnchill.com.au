import React from 'react';

import AboutDesktopImage from '../../images/about-desktop.svg';
import AboutMobileImage from '../../images/about-mobile.svg';

const AboutSection = () => (
  <section className="max-w-5xl mx-auto overflow-hidden pb-24 pr-4 w-full">
    <div className="max-w-4xl ml-auto">
      <div className="flex items-start">
        <img
          className="hidden sm:block md:max-w-xs ml-4 mr-6 w-64 md:w-full"
          src={AboutDesktopImage}
          alt=""
        />
        <div className="text-xl w-full">
          <img
            className="sm:hidden mx-auto p-6 w-full"
            src={AboutMobileImage}
            alt=""
          />
          <div className="squiggle bg-right leading-tight mb-4 ml-auto sm:mr-12 pr-6 sm:pr-12 pl-4 w-full">
            <h2 className="font-display leading-none my-6 text-5xl text-center uppercase w-full">
              About Us
            </h2>
            <p>
              A love of the food hospitality industry along with extensive
              researching of various cuisines around the world and a desire to
              share their accumulated experiences and knowledge with people in
              their home town are the main reasons behind Paul and Jacqueline
              establishing the Chop 'n Chill concept. And it’s more than just
              the food — a big part of the concept is what it offers people by
              way of location — in the centre of town right on the Town Green;
              spectacular views — across the Town Green and the beautiful
              Hastings River; indoor/outdoor dining — in relaxing and pleasant
              surrounds; kids play park — in full view from the restaurant. Chop
              'n Chill is a destination that’s all about spending great times
              with family and friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
