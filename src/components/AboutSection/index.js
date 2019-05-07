import React from 'react';

import Sausages from '../../images/sausages.svg';
import Rosemary from '../../images/rosemary.svg';
import MortarAndPestle from '../../images/mortar-and-pestle.svg';

const AboutSection = () => (
  <section className="max-w-5xl mx-auto overflow-hidden pb-12 pt-6 px-4">
    <div className="max-w-3xl ml-auto relative">
      <div className="squiggle bg-right flex flex-wrap sm:flex-no-wrap sm:mr-12 pr-4 sm:pr-12">
        <div className="about-us flex float-left mb-32 sm:mr-16 mx-auto pr-6 sm:w-64 z-10">
          <img className="sausages" src={Sausages} alt="" />
          <img className="rosemary" src={Rosemary} alt="" />
          <img className="mortar-and-pestle" src={MortarAndPestle} alt="" />
        </div>
        <div className="ml-auto relative text-xl z-10">
          <h2 className="font-display leading-none mb-6 text-5xl text-center uppercase">
            About Us
          </h2>
          <div className="max-w-lg">
            <p className="mb-4">
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
