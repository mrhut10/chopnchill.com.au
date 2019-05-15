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
    <MenuItem title="Mushroom Burger" price="">
      <p>
        Grilled Mushrooms on a Fresh Burger Bun with Chinese Pickled Vegetables,
        Shredded Cheese, Lettuce and Sliced Tomatoes. Comes with Sweet Potato
        Fries and Siracha Mayonnaise (VEGETARIAN) Vegan Mayonnaise (VEGAN)
        Substitute with Vegan Cheese + $2 (VEGAN)
      </p>
    </MenuItem>
    <MenuItem title="Naked Baked Burrito" price="">
      <p>
        Burrito wrapped and baked with House-Made Chilli Beans, Mushrooms,
        Shredded Lettuce ‘n Cheese. Served with Crispy Potatoes (VEGETARIAN)
        Substitute with Vegan Cheese + $2 (VEGAN)
      </p>
    </MenuItem>
    <MenuItem title="Gav’s Steamed Bao" price="">
      <p>
        Two Light ‘n Airy Steamed Buns filled with Grilled Tofu and topped with
        Sweet Soy Asian Peanut Dressing. (VEGETARIAN)
      </p>
    </MenuItem>
    <MenuItem title="Rice with Egg" price="">
      <p>
        Fried Rice with Chilli, Shallots and Bean-Shoots. Topped with a Fried
        Egg ‘n Soy Sauce. (VEGETARIAN)
      </p>
    </MenuItem>
    <MenuItem title="Satay Tofu" price="">
      <p>
        A delicious Asian-Fried Tofu Salad with House-Made Satay Sauce, Sliced
        Cucumbers, Bean-Shoots, Tomatoes ‘n Salad Greens. (VEGETARIAN/VEGAN)
      </p>
    </MenuItem>
    <MenuItem title="Tahu Goreng" price="">
      <p>
        Fried Tofu Oriental Style, with Cumber, Tomatoes, Bean-Shoots and Sweet
        Soy Peanut Dressing. (VEGETARIAN/VEGAN)
      </p>
    </MenuItem>
    <MenuItem title="Chop ‘n Chill Seasonal Salad" price="">
      <p>
        Vermicelli Noodle Salad with Shredded Lettuce, Tomato, Onion, Cucumber,
        Mushrooms and Sliced Avocado. Comes with Crispy Potatoes and our
        delicious House-Made Citrus Dressing. (VEGETARIAN/VEGAN)
      </p>
    </MenuItem>
    <MenuItem title="Avocado Arlo" price="">
      <p>
        Baked Avocado Wedges with Chilli Beans, Wilted Baby Spinach and Leeks.
        Siracha Mayonnaise (VEGETARIAN) Vegan Mayonnaise. (VEGAN)
      </p>
    </MenuItem>
    <div className="border-t-2 sm:border-2 border-brand-blue sm:flex -mb-8 mt-8 -mx-6 sm:m-0">
      <div className="font-bold font-display sm:py-4 sm:px-2 text-2xl text-center uppercase sm:vertical">
        Extras
      </div>
      <div className="bg-brand-blue leading-tight px-4 py-2 text-white w-full">
        <ul style={{ columns: `12rem` }}>
          <li>
            <ul className="extras-menu md:footer-squiggle">
              <li className="pb-4">
                <div className="flex flex-wrap justify-between pr-4">
                  <span>Garden Salad</span>
                  <span>$10</span>
                  <span className="w-full">(VEGETARIAN/VEGAN)</span>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex flex-wrap justify-between pr-4">
                  <span>Seasonal Vegetables</span>
                  <span>$10</span>
                  <span className="w-full">(VEGETARIAN/VEGAN)</span>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex flex-wrap justify-between pr-4">
                  <span>Chilli Beans</span>
                  <span>$10</span>
                  <span className="w-full">(VEGETARIAN/VEGAN)</span>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex flex-wrap justify-between pr-4">
                  <span>Sweet Potato Fries</span>
                  <span>$12</span>
                  <span className="w-full">(VEGETARIAN/VEGAN)</span>
                </div>
              </li>
            </ul>
            <ul className="extras-menu">
              <li className="pb-4">
                <div className="flex flex-wrap justify-between pr-4 sm:pr-0">
                  <span>Steamed Rice</span>
                  <span>$5</span>
                  <span className="w-full">(VEGETARIAN/VEGAN)</span>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex flex-wrap justify-between pr-4 sm:pr-0">
                  <span>Chunky or Shoe-String Fries</span>
                  <span>$10</span>
                  <span className="w-full">(VEGETARIAN/VEGAN)</span>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex flex-wrap justify-between pr-4 sm:pr-0">
                  <span>Mac ‘n Cheese</span>
                  <span>$10</span>
                  <span className="w-full">(VEGETARIAN)</span>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex flex-wrap justify-between pr-4 sm:pr-0">
                  <span>House-Slaw</span>
                  <span>$5</span>
                  <span className="w-full">(VEGETARIAN)</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Breakfast;
