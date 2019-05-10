import React from 'react';
import MenuItem from './MenuItem';

const Breakfast = () => (
  <>
    <MenuItem
      title="BAKED AVOCADO BOATS WITH
  POACHED EGGS"
      price="20"
    >
      <p>
        Soft-Poached Eggs in Oven-Baked Avocado Boats. Served with Sourdough
        Toast Locally-Made Sweet Caramelized Breakfast Chutney.
      </p>
    </MenuItem>
    <MenuItem title="CURRIED PRATA with EGG SOLDIERS" price="XX">
      <p>
        A delicious Dipping Dish of Curried Prata, Poached Egg and Locally-Made
        Sweet Caramelized Breakfast Chutney with Toasted Sourdough and Roti
        Bread Soldiers.
      </p>
    </MenuItem>
    <MenuItem title="CHOP ‘n CHILL TOWN GREEN" price="17">
      <p>
        An easy Breakfast Dish of Smashed Avocado, Roasted Tomatoes, Goat’s
        Cheese & Pesto on Thick White Toast.
      </p>
    </MenuItem>
    <MenuItem title="CHOP CHOP BOWL" price="XX">
      <p>
        Wholesome Dish of Scrambled Eggs, Smashed Avocado, Chilli Beans, Pickled
        Vegetables, Grated Cheese and Shredded Lettuce. Served with Soft
        Tortillas and Sriracha Mayonnaise.
      </p>
    </MenuItem>
    <MenuItem title="PORK BREKKY BURRITO" price="22">
      <p>
        Smoked Pulled-Pork Burrito with Soft-Poached Eggs, Lettuce, Tomato and
        Avocado Spread. Served with Lazy Paul’s BBQ Sauce ‘n Mild Chipotle
        Cream.
      </p>
    </MenuItem>
    <MenuItem title="BACON and EGG ROLL" price="13">
      <p>
        Bacon ‘n Fried Egg with Lazy Paul’s BBQ Sauce on a Fresh Hi-top Bun,
        with a side-serving of Crispy Potato Chunks.
      </p>
    </MenuItem>
    <MenuItem
      title="EGGS BENEDICT:
WITH HAM HOCKS, BACON OR SALMON"
      price="23"
    >
      <p>
        Toasted Local Bagels with your choice of Ham Hocks, Crispy Bacon or
        Smoked Salmon. Topped with Poached Eggs and Hollandaise Sauce.
      </p>
    </MenuItem>
    <MenuItem title="Stack" price="XX">
      <p>
        Thick Sliced of Toast stacked with Rangers Valley marble-five-score
        Wagyu Beef Kofta Pattie; Smoked Seasoned Sausage; Fried Egg; Chilli
        Beans 'n Spinach Leaves. Comes with Lazy Paul’s BBQ Sauce.
      </p>
    </MenuItem>
    <MenuItem title="BOARDRIDER’S BRUSCHETTA" price="17">
      <p>
        Bacon and Poached Eggs with Bruschetta Tomatoes on Sourdough Toast and
        Balsamic Glaze.
      </p>
    </MenuItem>
    <MenuItem title="THE NEW YORKER" price="22">
      <p>
        A big helping of Smoked Brisket with Crispy Potato Chunks, Poached Eggs,
        Pesto & Lazy Paul’s BBQ Sauce.
      </p>
    </MenuItem>
    <MenuItem title="TOAST ON THE GO" price="8">
      <p>
        Choose from Thick White/Sourdough/ Fruit Loaf/ Banana Bread or
        Croissant. All with a choice of condiments. Add any extras.
      </p>
    </MenuItem>
    <MenuItem title="CnC’s HUEVOS RANCHEROS" price="XX">
      <p>
        Lightly-Fried Rice Paper Basket filled with House-Made Chilli Beans,
        topped with Shredded Cheese ‘n Fried Eggs.
      </p>
    </MenuItem>
    <MenuItem title="CONTINENTAL WAFFLES" price="17">
      <p>
        Toasted Belgian Waffles topped with Wild Berries, Whipped Cream and
        Canadian Maple Syrup.
      </p>
    </MenuItem>
    <MenuItem title="THE BIG BREKKY PLATTER FOR TWO OR MORE" price="XX">
      <p>Description to follow</p>
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
            <ul className="extras-menu footer-squiggle">
              <li>Eggs of your choice $5</li>
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
