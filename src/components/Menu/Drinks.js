import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';

const Drinks = () => (
  <>
    <h3 className="font-display sm:text-4xl uppercase">Beers and Cider</h3>
    <h4 className="font-display mb-4 sm:text-3xl uppercase">By The Bottle</h4>
    <Drink title="Hahn Premium Light" price="6" />
    <Drink title="Pacific Radler" price="5" />
    <Drink title="XXXX Summer Bright" price="7" />
    <Drink title="Coors" price="7" />
    <Drink title="Pure Blonde" price="7" />
    <Drink title="Corona" price="8" />
    <Drink title="Peroni" price="7.5" />
    <Drink title="Stone &amp; Wood" price="8" />
    <Drink title="Millers Chill" price="8" />
    <Drink title="Ginger Beer" price="8" />
    <Drink title="Rekorderlig Ciders" price="8" />
    <Drink title="Long Point Ciders" price="8" />
    <Drink title="BUCKET OF CORONA (5)" price="30" />
    <h3 className="font-display mb-4 mt-8 sm:text-3xl uppercase">
      On Tap (Middy and Pints)
    </h3>
    <Drink title="XXXX GOLD" price="6.5" />
    <Drink title="Tooheys New" price="7" />
    <Drink title="Tooheys Old" price="7" />
    <Drink title="Carlton Dry" price="7" />
    <Drink title="Coopers Pale Ale" price="7.5" />
    <Drink title="Hahn Super Dry" price="7.5" />
    <Drink title="Wild Yak" price="7.5" />
    <Drink title="James Squires 150 Lashes" price="8" />
    <Drink title="Kosciuszko" price="8" />
    <Drink title="Sapporo" price="8.5" />
    <Drink title="5 Seeds Cider" price="7.5" />
    <Drink title="Furphy Refreshing Ale" price="7.5" />
    <Drink title="Canadian Club &amp; Dry" price="9.5" />
    <h3 className="font-display mb-4 mt-8 sm:text-3xl uppercase">
      Soft Drinks | Juices
    </h3>
    <Drink title="Sprite, Diet coke, Lift, Red Fanta, Dry Ginger" price="5" />
    <Drink title="Juice: Orange, Pineapple Cranberry, Apple" price="5.5" />
    <Drink title="Tonic Water" price="5.5" />
    <Drink title="Sparkling Water" price="4.5" />
    <Drink title="Pellegrino Sparkling" price="8" />
    <Drink title="Mount Franklin Still" price="4" />
    <Heading title="Wine" subtitle="Glass | Bottle" />
    <MenuItem
      title="THE ANCHORAGE SEMILLON SAUVIGNON BLANC"
      price="7.5&nbsp;|&nbsp;$32"
    >
      SOUTH AUSTRALIA. Lifted fruit salad flavours, distinctive herbaceous and
      tropical characters followed by delicate citrus notes
    </MenuItem>
    <MenuItem title="STUDIO SERIES CHARDONNAY" price="8&nbsp;|&nbsp;$35">
      SOUTH AUSTRALIA. White peach, citrus and melon flavours accentuated by a
      savour oak nose
    </MenuItem>
    <MenuItem title="STONEGATE SAUVIGNON BLANC" price="8&nbsp;|&nbsp;$35">
      SOUTH AUSTRALIA. Clean Crisp Flavours Of Tropical Fruit With A Light
      Herbaceous Bouquet
    </MenuItem>
    <Heading title="Sparkling" subtitle="Glass | Bottle" />
  </>
);

const Heading = ({ title, subtitle }) => (
  <div className="flex items-baseline justify-between">
    <h3 className="font-display mb-4 mt-8 sm:text-3xl uppercase">{title}</h3>
    <div className="font-display">{subtitle}</div>
  </div>
);

const Drink = ({ title, price }) => (
  <div className="sm:flex justify-between leading-none mb-2">
    <div className="max-w-lg sm:pr-12">
      <h2 className="sm:text-xl uppercase">{title}</h2>
    </div>
    <div className="font-display sm:text-xl">${price}</div>
  </div>
);

Drink.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
};

export default Drinks;
