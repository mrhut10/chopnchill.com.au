import React from 'react';
import propTypes from 'prop-types';

import MenuItem from './MenuItem';

const Drinks = () => (
  <>
    <h3 className="font-display leading-none mb-4 text-2xl top-0 uppercase">
      Beers and Ciders
    </h3>
    <h4 className="font-display leading-none mb-2 mt-4 sm:mt-0 sm:text-2xl uppercase">
      By The Bottle
    </h4>
    <Drink title="Hahn Premium Light" price="$6" />
    <Drink title="Pacific Radler" price="$5" />
    <Drink title="XXXX Summer Bright" price="$7" />
    <Drink title="Coors" price="$7" />
    <Drink title="Pure Blonde" price="$7" />
    <Drink title="Corona" price="$8" />
    <Drink title="Peroni" price="$7.5" />
    <Drink title="Stone &amp; Wood" price="$8" />
    <Drink title="Millers Chill" price="$8" />
    <Drink title="Ginger Beer" price="$8" />
    <Drink title="Rekorderlig Ciders" price="$8" />
    <Drink title="Long Point Ciders" price="$8" />
    <Drink title="Bucket of Corona (5)" price="$30" />
    <br />
    <h4 className="font-display leading-none mb-2 sm:text-2xl uppercase">
      On Tap (Middy and Pints)
    </h4>
    <Drink title="XXXX GOLD" price="$6.5" />
    <Drink title="Tooheys New" price="$7" />
    <Drink title="Tooheys Old" price="$7" />
    <Drink title="Carlton Dry" price="$7" />
    <Drink title="Coopers Pale Ale" price="$7.5" />
    <Drink title="Hahn Super Dry" price="$7.5" />
    <Drink title="Wild Yak" price="$7.5" />
    <Drink title="James Squires 150 Lashes" price="$8" />
    <Drink title="Kosciuszko" price="$8" />
    <Drink title="Sapporo" price="$8.5" />
    <Drink title="5 Seeds Cider" price="$7.5" />
    <Drink title="Furphy Refreshing Ale" price="$7.5" />
    <Drink title="Canadian Club &amp; Dry" price="$9.5" />
    <br />
    <Heading title="White&nbsp;Wine" />
    <MenuItem
      title="The Anchorage Semillon Sauvignon Blanc"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">South Australia</span>. Lifted fruit salad
      flavours, distinctive herbaceous and tropical characters followed by
      delicate citrus notes
    </MenuItem>
    <MenuItem
      title="Studio Series Chardonnay"
      price={[
        'Glass $8',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $35',
      ]}
    >
      <span className="uppercase">South Australia</span>. White peach, citrus
      and melon flavours accentuated by a savour oak nose
    </MenuItem>
    <MenuItem
      title="Stonegate Sauvignon Blanc"
      price={[
        'Glass $8',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $35',
      ]}
    >
      <span className="uppercase">South Australia</span>. Clean Crisp Flavours
      Of Tropical Fruit With A Light Herbaceous Bouquet
    </MenuItem>
    <MenuItem
      title="Mondiale Marlbourough Sauvigon Blanc"
      price={[
        'Glass $9',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $40',
      ]}
    >
      <span className="uppercase">South Island New Zealand</span>. Delicious
      Combination Of Clean Herbaceous Character And Light Tropical Piquancy
    </MenuItem>
    <MenuItem
      title="La Bossa Pinot Grigio"
      price={[
        'Glass $8',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $35',
      ]}
    >
      <span className="uppercase">King Valley Victoria</span>. Crunchy Pear
      Taste Offering A MidPalate Balance And A Clean Finish
    </MenuItem>
    <MenuItem
      title="Ringmaster Riesling"
      price={[
        'Glass $8.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $40',
      ]}
    >
      <span className="uppercase">Clare Valley</span>. Our Number One Seller.
      Floral With Limes, Lemons And Green Apples. Mouth Filling Citrus Flavours
      and a Zesty Clean Finish
    </MenuItem>
    <MenuItem
      title="Angove Family Crest Chardonnay"
      price={[
        'Glass $8.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $40',
      ]}
    >
      <span className="uppercase">Adelaide Hills</span>. An Aroma Of Cantaloupe,
      White Peach, Lemon And Smoky French Oak. A Delightful Clean Finish
    </MenuItem>
    <MenuItem
      title="Sugar And Spice Moscato"
      price={[
        'Glass $8.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $40',
      ]}
    >
      <span className="uppercase">South Australia</span>. Lightly Carbonated
      With Robust Mango, Lychee And Pear Flavours
    </MenuItem>
    <br />
    <Heading title="Sparkling" />
    <MenuItem
      title="Sparkling Angove Organic Brut Cuvee"
      price={[
        'Glass $8',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $36',
      ]}
    >
      <span className="uppercase">South Australia</span>. Crisp And Clean With
      Subtle Nuttiness, Ripe Citrus And Nashi Pear
    </MenuItem>
    <MenuItem
      title="Villa Jolanda Prosecco"
      price={[
        'Glass $8',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $36',
      ]}
    >
      <span className="uppercase">Italy</span>. Clean With Lively Aromatic Apple
      And Pear Aromas. Light And Well Balanced
    </MenuItem>
    <br />
    <Heading title="Champagne" />
    <MenuItem
      title="Nicolas Feuillatte Brut Reserve Champagne NV"
      price="Bottle $99"
    >
      <span className="uppercase">France</span>. An Exceptional French Champagne
      Presented With All The Style And Elegance That Comes From France
    </MenuItem>
    <MenuItem title="Taittinger Brut Réserve Champagne NV" price="Bottle $120">
      <span className="uppercase">France</span>. Well-Balance And Easy To Drink.
      Smoothly Textured With Delicate Fruit Flavours and Subtle Toasty Yeast
      Characters
    </MenuItem>
    <br />
    <Heading title="Red Wine" />
    <MenuItem
      title="The Anchorage Cabernet Merlot"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">South Australia</span>. Ripe, Fruity and
      Voluptuous. Perfectly Interwined With Subtle Oak Influences and a Soft
      juicy finish
    </MenuItem>
    <MenuItem
      title="La Bossa Cabernet Sauvignon"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">South Australia</span>. Cherry And Black Fruit
      Aromas Enhanced By Subtle, Minty Tones On The Palate
    </MenuItem>
    <MenuItem
      title="Rhythm &amp; Rhyme Shiraz"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">South Australia</span>. A Rich Red Of Cherry
      And Plum Fruits, Spice And A Hink Of Oak, Complimented With Fine Soft
      Tannins
    </MenuItem>
    <MenuItem
      title="Angove McLaren Vale Shiraz"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">South Australia</span>. Upfront Pepper, Red
      Cherry & Black Chocolate characteristics Accompanied By a Soft Raspberry
      Presence
    </MenuItem>
    <MenuItem
      title="Duck Shoot Pinot Noir"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">Yarra Valley</span>. Aromas Of Strawberry And
      Forest Floor. Soft And Rich With Silky Pinot Tannin
    </MenuItem>
    <MenuItem
      title="Alternatus Grenache"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">McLaren Vale</span>. Spiced Plum, Raspberry
      And Cherry Fruit Flavours With Perfumed And Supple Medium Bodied Palate
    </MenuItem>
    <MenuItem
      title="Schild Merlot"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">Barossa Valley</span>. Intense Aromas Of Dark
      Plum With Suggestion Of Fresh Cherries And Dark Chocolate
    </MenuItem>
    <MenuItem
      title="Nine Vines Rose"
      price={[
        'Glass $7.5',
        <span className="sm:hidden"> |</span>,
        <br className="hidden sm:block" />,
        ' Bottle $32',
      ]}
    >
      <span className="uppercase">South Australia</span>. Deliciously Vibrant
      Light Red Wine With A Fresh, Strong, Spicy Flavour Of Strawberry And
      Rasberry
    </MenuItem>
    <br />
    <h3 className="font-display leading-none mb-4 text-2xl top-0 uppercase">
      Soft Drinks | Juices
    </h3>
    <Drink title="Sprite, Diet coke, Lift, Red Fanta, Dry Ginger" price="$5" />
    <Drink title="Juice: Orange, Pineapple Cranberry, Apple" price="$5.5" />
    <Drink title="Tonic Water" price="$5.5" />
    <Drink title="Sparkling Water" price="$4.5" />
    <Drink title="Pellegrino Sparkling" price="$8" />
    <Drink title="Mount Franklin Still" price="$4" />
  </>
);

const Heading = ({ title }) => (
  <div className="flex flex-wrap items-baseline justify-between leading-none mb-4 mt-4 sm:mt-0 uppercase">
    <h3 className="font-display mr-2 sm:text-2xl">{title}</h3>
  </div>
);

Heading.propTypes = {
  title: propTypes.string,
};

const Drink = ({ title, price }) => (
  <div className="flex flex-wrap justify-between leading-none mb-2">
    <div className="flex-1 max-w-lg pr-2 sm:pr-12">
      <h2 className="sm:text-xl uppercase">{title}</h2>
    </div>
    <div className="font-display sm:text-xl whitespace-no-wrap">{price}</div>
  </div>
);

Drink.propTypes = {
  title: propTypes.string,
  price: propTypes.string,
};

export default Drinks;
