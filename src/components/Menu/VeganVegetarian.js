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
    <div className="border-2 border-brand-blue flex">
      <div className="font-bold font-display py-4 px-2 text-2xl text-center uppercase vertical">
        Extras
      </div>
      <div className="bg-brand-blue flex flex-wrap leading-tight px-4 py-2 text-white w-full">
        <ul className="extras-menu sm:footer-squiggle w-full sm:w-1/2">
          <li className="pb-4">
            <p>
              Garden Salad $10
              <br />
              (VEGETARIAN/VEGAN)
            </p>
          </li>
          <li className="pb-4">
            <p>
              Seasonal Vegetables $10
              <br />
              (VEGETARIAN/VEGAN)
            </p>
          </li>
          <li className="pb-4">
            <p>
              Chilli Beans $10
              <br />
              (VEGETARIAN/VEGAN)
            </p>
          </li>
          <li className="pb-4">
            <p>
              Sweet Potato Fries $12
              <br />
              (VEGETARIAN/VEGAN)
            </p>
          </li>
        </ul>
        <ul
          className="extras-menu pl-4 w-full sm:w-1/2"
          style={{ backgroundPosition: `right 45px bottom` }}
        >
          <li className="top-4">
            <p>
              Steamed Rice $5
              <br />
              (VEGETARIAN/VEGAN)
            </p>
          </li>
          <li className="pb-4">
            <p>
              Chunky or Shoe-String Fries $10
              <br />
              (VEGETARIAN/VEGAN)
            </p>
          </li>
          <li className="pb-4">
            <p>
              Mac ‘n Cheese $10
              <br />
              (VEGETARIAN)
            </p>
          </li>
          <li className="pb-4">
            <p>
              House-Slaw $5
              <br />
              (VEGETARIAN)
            </p>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Breakfast;
