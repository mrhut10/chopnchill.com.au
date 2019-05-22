import React from 'react';
import MenuItem from '../MenuItem';

const GlutenFree = () => (
  <>
    <MenuItem title="Grilled Calamari" price="$32.5">
      <p>
        Tender Calamari char-grilled over a high heat, sprinkled with Coriander,
        Bean Shoots and Mint. Served with our gluten free Chilli Sauce.
      </p>
    </MenuItem>
    <MenuItem title="Fresh Rice-Paper Rolls" price="$16">
      <p>
        Two chilled Chicken Rolls with Herbs, Eggs and Noodles. Served with our
        gluten free Chilli Dressing.
      </p>
    </MenuItem>
    <MenuItem title="Steamed Barramundi" price="$26.5">
      <p>
        Fresh Barramundi steamed Asian style, topped with gluten free Soy and
        Chilli Sauce. Served with Shallots, Coriander, Lime and Rice.
      </p>
    </MenuItem>
    <MenuItem title="Ribs, Ribs, Ribs" price="$60">
      <p>
        A big platter of Pork Ribs with House Salad. Shoe-String Fries and
        gluten free BBQ Marinate.
      </p>
    </MenuItem>
    <MenuItem title="Lemon Pepper Fish Salad" price="$22.5">
      <p>
        A crisp Salad of shredded Lettuce, Tomatoes, Onion and Cucumber,
        complimented with Vermicelli Noodles and topped with lightly-grilled
        Lemon Pepper Fish Pieces, Lemon Wedges and a Zesty Citrus Dressing.
      </p>
      <p>
        <strong>Add Mushrooms $4 or Tofu $8</strong>
      </p>
    </MenuItem>
    <MenuItem title="Waygu Beef Salad" price="$24.5">
      <p>
        Rangers Valley Wagyu Beef in a fresh-tossed Garden Salad with
        gluten-free Chilli dressing.
      </p>
      <p>
        <strong>Add Mushrooms $4, Avocado $4 or Tofu $8</strong>
      </p>
    </MenuItem>
    <MenuItem title="Lazy Paul Wagyu Sandwich" price="$26">
      <p>
        A juicy Wagyu Beef Pattie on thick-cut gluten free Bread with Cheese,
        Pickles, Mayonnaise, BBQ Marinate, and Shoe-String Fries
      </p>
    </MenuItem>
    <MenuItem title="Lazy Paul’s Wagyu Sandwich" price="$">
      <p>
        A Juicy Char-Grilled Beef Pattie of Ranger’s Valley Marble- five-score
        Beef on Gluten Free Bread. Topped with Cheese, House-Slaw, Pickles,
        Sriracha Mayonnaise and Gluten Free BBQ Sauce. Accompanied by
        Shoe-String Fries.
      </p>
    </MenuItem>
    <MenuItem title="T-Bone Steak (500g)" price="$42">
      <p>
        A mega-cut T-Bone grilled to your liking and served with a big helping
        of smashed Potatoes and Asian Slaw. Topped with Jus.
      </p>
    </MenuItem>
    <MenuItem title="Wagyu Steak" price="$42">
      <p>
        Rangers Valley marble-five-score Wagyu Rump Steak, cooked to your liking
        and served with Shoe-String Fries and Green Salad.
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
