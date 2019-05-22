import React from 'react';
import MenuItem from '../MenuItem';

const GlutenFree = () => (
  <>
    <MenuItem title="Grilled Calamari" price="">
      <p>
        Char-Grilled Calamari tenderly cooked over a high heat, sprinkled with
        Coriander, Bean-Shoots and Mint, served with our Gluten Free Chilli
        Sauce.
      </p>
    </MenuItem>
    <MenuItem title="Grilled Salmon" price="">
      <p>
        Grilled Ocean Salmon with Crispy Potatoes, Wilted Greens and our
        delicious House-Made Citrus Dressing.
      </p>
    </MenuItem>
    <MenuItem title="Fresh Rice Paper Rolls" price="">
      <p>
        Hand-Made with Fresh Chicken Vermicelli Noodles, Egg, Fresh Herbs ‘n
        Greens. Served with Gluten Free Chilli Sauce.
      </p>
    </MenuItem>
    <MenuItem title="Baked Potato with Smoked Brisket" price="">
      <p>
        Whole Potato loaded with Smoked Brisket, baked with Shredded Cheese and
        served with Lettuce ‘n Cucumber. Gluten Free BBQ Sauce on the side.
      </p>
    </MenuItem>
    <MenuItem title="Steamed Barramundi" price="">
      <p>
        Fresh Barramundi steamed Asian-style with Shallots, Coriander, Lime ‘n
        Rice. Served with Gluten Free Soy and Chilli Sauce.
      </p>
    </MenuItem>
    <MenuItem title="Lemon Pepper Fish Salad" price="">
      <p>
        A Crisp Salad of Shredded Lettuce, Tomatoes, Onion ‘n Cucumber
        complimented with Vermicelli Noodles and topped with Lightly-Grilled
        Lemon Pepper Fish Pieces, Lemon Wedges and our House-Made Citrus
        Dressing. + Avocado $4
      </p>
    </MenuItem>
    <MenuItem title="Wagyu Beef Salad" price="">
      <p>
        Our Classic Dish inspired by an old Thai Family Recipe. Featuring
        Char-Grilled Ranger’s Valley Beef, Tossed Garden Leaf Salad, Tomatoes,
        Cucumber, Mint, Coriander, Chilli ‘n Bean-Shoots with Gluten Free Chilli
        Sauce. + Avocado or Bacon $4 each or $5 for both
      </p>
    </MenuItem>
    <MenuItem title="Lazy Paul’s Wagyu Sandwich" price="">
      <p>
        A Juicy Char-Grilled Beef Pattie of Ranger’s Valley Marble- five-score
        Beef on Gluten Free Bread. Topped with Cheese, House-Slaw, Pickles,
        Sriracha Mayonnaise and Gluten Free BBQ Sauce. Accompanied by
        Shoe-String Fries.
      </p>
    </MenuItem>
    <MenuItem title="Wagyu Steak" price="">
      <p>
        A Prime Cut of Ranger’s Valley Marble 5-score Wagyu Beef, cooked to your
        liking and served with Gluten Free BBQ Sauce, Shoe-String Fries and a
        Green Salad.
      </p>
    </MenuItem>
    <div className="border-2 border-brand-blue flex">
      <div className="font-bold font-display py-4 px-2 text-2xl text-center uppercase vertical">
        Extras
      </div>
      <div className="bg-brand-blue px-4 py-2 text-white w-full">
        <ul className="leading-none">
          <li className="max-w-sm mb-4">Garden Salad $10</li>
          <li className="max-w-sm mb-4">Seasonal Vegetables $10</li>
          <li className="max-w-sm mb-4">Skinny Fries $10</li>
          <li className="max-w-sm mb-4">
            Ask our staff for Gluten Free Sauces (Chilli, Soy, BBQ or Tomato)
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default GlutenFree;
