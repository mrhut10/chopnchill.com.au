import React from 'react';

import AboutDesktopImage from '../../images/about-desktop.svg';
import AboutMobileImage from '../../images/about-mobile.svg';

const AboutSection = () => (
  <section className="max-w-5xl mx-auto overflow-hidden pb-12 pr-4">
    <div className="max-w-3xl ml-auto">
      <div className="flex items-start">
        <img
          className="hidden sm:block mr-6 w-64"
          src={AboutDesktopImage}
          alt=""
        />
        <div className="text-xl w-full">
          <img
            className="sm:hidden mb-6 mx-auto w-full"
            src={AboutMobileImage}
            alt=""
          />
          <div className="squiggle bg-right leading-tight max-w-lg mb-4 ml-auto sm:mr-12 pr-6 sm:pr-12 pl-4">
            <h2 className="font-display leading-none my-6 text-5xl text-center uppercase w-full">
              About Us
            </h2>
            <p>
              Port Macquarie Restaurant Bar Chop 'n Chill was created out of a
              passion for delivering a relaxed dining experience in Port
              Macquarie unlike any other. Showcasing a classic feel-good fare
              that's executed with a playful twist. The atmosphere at Chop 'n
              Chill is infused with a relaxed beach style buzz, boasting
              spacious indoor and outdoor dining areas, floor to ceiling
              windows, and fabulous waterfront views. Let us fill your soul with
              the perfect ambience, food, and place to unwind. Pop in for
              breakfast, lunch, dinner, or any time in-between. If you're a
              local, we want you to feel like you're on holiday. If you're on
              holiday, we'd like you to enjoy this corner of our beautiful
              seaside town.
            </p>
            <p>
              For us, it's all about the party. Whatever type of party you
              imagine, that's the type of party we'll create. Whether it's a
              wedding or fundraiser, baby shower or 70th birthday party, we'll
              attend to every detail, so that your dream event becomes a reality
              worth remembering. We take care of the details so that you can
              enjoy the event!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
