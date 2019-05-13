import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Ramen from '../../images/ramen.svg';

const MenuSection = () => (
  <StaticQuery
    query={graphql`
      fragment menuSectionFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query MenuSectionQuery {
        breakfast: file(relativePath: { eq: "breakfast.jpg" }) {
          ...menuSectionFluidImage
        }
        mainMenu: file(relativePath: { eq: "main-menu.jpg" }) {
          ...menuSectionFluidImage
        }
        takeAway: file(relativePath: { eq: "take-away.jpg" }) {
          ...menuSectionFluidImage
        }
        beverages: file(relativePath: { eq: "beverages.jpg" }) {
          ...menuSectionFluidImage
        }
      }
    `}
    render={data => (
      <section className="max-w-5xl mx-auto overflow-hidden pb-12 pt-6 px-4">
        <div className="max-w-3xl mr-auto relative">
          <div className="squiggle bg-left sm:ml-12 mt-6 pl-6 sm:pl-12">
            <img
              className="ramen relative float-right -mt-24 -mr-10 lg:mr-0 right-0 top-0 w-56"
              src={Ramen}
              alt=""
            />
            <div className="mx-auto text-xl">
              <h2 className="font-display leading-none mb-6 relative text-5xl text-center uppercase">
                Hungry?
              </h2>
              <div className="leading-tight max-w-lg">
                <p>
                  Combining the best of East and West in unique menus that
                  playfully blend the fresh street-style of South East Asia with
                  the hearty smoked-meat flavours of the Americas. With an
                  imaginative Breakfast Menu, an extensive Lunch/Dinner Menu,
                  plus separate Vegetarian/Vegan and Gluten Free Menus, we offer
                  inclusive dining for everyone. In between meal times, we serve
                  all styles of coffee and fragrant teas with a tempting “Wicked
                  Cake Cabinet”. We have a fully stocked bar offering a wide
                  selection of cocktails, wines, champagne, spirits, tap and
                  bottled beer. Oh! And if you can’t stay, we have a “Takeout
                  Menu” available too!
                </p>
              </div>
            </div>
            <div className="flex items-center overflow-x-auto -mr-4 py-6">
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-32 opacity-50 overflow-hidden rounded-full w-32"
                  fluid={data.breakfast.childImageSharp.fluid}
                />
                <span className="absolute">Breakfast</span>
              </div>
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-full opacity-50 rounded-full w-full"
                  fluid={data.mainMenu.childImageSharp.fluid}
                />
                <span className="absolute">Main Menu</span>
              </div>
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-full opacity-50 rounded-full w-full"
                  fluid={data.takeAway.childImageSharp.fluid}
                />
                <span className="absolute">Take Away</span>
              </div>
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-full opacity-50 rounded-full w-full"
                  fluid={data.beverages.childImageSharp.fluid}
                />
                <span className="absolute">Beverages</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);

export default MenuSection;
