import React from 'react';

const MenuSection = () => (
  <section className="mb-24">
    <div className="max-w-lg mx-auto py-12 text-xl">
      <h2 className="font-display text-6xl text-center">Hungry?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi
        maxime illum distinctio veritatis ad eos error odio non, consequuntur ab
        repellat id, expedita quae soluta facilis, accusamus necessitatibus
        pariatur.
      </p>
    </div>
    <div className="flex items-center justify-around max-w-2xl mx-auto w-full">
      <div className="bg-brand-blue flex font-display h-32 items-center justify-center text-white w-32 rounded-full">
        Breakfast
      </div>
      <div className="bg-brand-blue flex font-display h-32 items-center justify-center text-white w-32 rounded-full">
        Main Menu
      </div>
      <div className="bg-brand-blue flex font-display h-32 items-center justify-center text-white w-32 rounded-full">
        Take Away
      </div>
      <div className="bg-brand-blue flex font-display h-32 items-center justify-center text-white w-32 rounded-full">
        Beverages
      </div>
    </div>
  </section>
);

export default MenuSection;
