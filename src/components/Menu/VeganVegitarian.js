import React from 'react';
import MenuItem from './MenuItem';

const Breakfast = () => (
  <>
    <MenuItem title="The Big V for 2 or More" price="">
      <p>
        There’s no “moo” in ‘ere. House-Made Satay Sauce, Vegan Mayonnaise for
        dipping your Celery ‘n Carrot Stix, Sliced Mushrooms, Chilled Cherry
        Tomatoes, Sliced Cucumbers, Roasted Cashews, Pickled Chinese Vegetables,
        Bean-Shoots, Crispy Potatoes, Toasted Sourdough and Toasted Tortilla.
      </p>
    </MenuItem>
    <MenuItem title="Oven Baked Potato With Chilli Beans" price="">
      <p>
        Oven-baked Whole Potato, loaded with Chilli Beans and topped with
        Shredded Cheese. Served with Lettuce ‘n Cucumber. (VEGETARIAN)
        Substitute with Vegan Cheese + $2 (VEGAN)
      </p>
    </MenuItem>
    <MenuItem title="Vegan Rice" price="">
      <p>
        Fried Rice with Chilli, Shallots, Bean-Shoots, topped with Soy Sauce.
      </p>
    </MenuItem>
    <MenuItem title="Vegetable Tacos" price="">
      <p>
        Three Soft-Shell Tacos with Tempura Seasonal Vegetables, Sautéed
        Mushrooms and Chinese Pickled Vegetables. Sriracha Mayonnaise
        (VEGETARIAN) Vegan Mayonnaise. (VEGAN)
      </p>
    </MenuItem>
    <div className="border-2 border-brand-blue flex">
      <div
        className="font-bold font-display py-4 px-2 text-2xl text-center uppercase"
        style={{ writingMode: `vertical-lr` }}
      >
        Extras
      </div>
      <div className="bg-brand-blue px-4 py-2 text-white w-full">
        <ul style={{ columns: `12rem` }}>
          <li>
            <ul className="extras-menu sm:footer-squiggle">
              <li>
                <span className="flex flex-wrap justify-between pr-4">
                  <span>Garden Salad</span>
                  <span>$10</span>
                </span>
                <span>(VEGETARIAN/VEGAN)</span>
              </li>
              <li>Smoked Salmon $6</li>
              <li>Bacon $4</li>
              <li>Mushrooms $4</li>
            </ul>
            <ul className="extras-menu">
              <li>Smashed Avo $4</li>
              <li>Grilled Tomatoes $3</li>
              <li>Chilli Beans $4</li>
              <li>Crispy Potatoes $4</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Breakfast;
