import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
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
      <section className="max-w-5xl mx-auto overflow-hidden pb-24 pt-6 px-4 w-full">
        <div className="max-w-3xl mr-auto relative">
          <div className="squiggle bg-left mb-4 mr-auto pl-6 sm:pl-12 pr-4">
            <img
              className="relative float-right -mt-24 -mr-10 lg:mr-0 right-0 top-0 w-56"
              src={Ramen}
              alt=""
            />
            <div className="mx-auto text-2xl">
              <h2 className="font-display leading-none mb-6 relative text-5xl text-center uppercase">
                Hungry?
              </h2>
              <div className="leading-tight max-w-lg">
                <p>
                  Combining the best of East and West in unique menus that
                  playfully blend the fresh street-style of South East Asia with
                  the hearty smoked-meat flavours of the Americas. With an
                  imaginative{' '}
                  <Link className="underline" to="/menu/breakfast#menu">
                    Breakfast Menu
                  </Link>
                  , an extensive{' '}
                  <Link className="underline" to="/menu/to-share#menu">
                    Lunch/Dinner Menu
                  </Link>
                  , plus separate{' '}
                  <Link className="underline" to="/menu/vegan-vegetarian#menu">
                    Vegetarian/Vegan
                  </Link>{' '}
                  and{' '}
                  <Link className="underline" to="/menu/gluten-free#menu">
                    Gluten Free Menus
                  </Link>
                  , we offer inclusive dining for everyone. In between meal
                  times, we serve all styles of coffee and fragrant teas with a
                  tempting “Wicked Cake Cabinet”. We have a fully stocked bar
                  offering a wide selection of cocktails, wines, champagne,
                  spirits, tap and bottled beer. Oh! And if you can’t stay, we
                  have a{' '}
                  <Link className="underline" to="/menu/take-away#menu">
                    Takeout Menu
                  </Link>{' '}
                  available too!
                </p>
              </div>
            </div>
            {/* <div className="flex items-center overflow-x-auto -mr-4 py-6">
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-32 opacity-50 overflow-hidden rounded-full w-32"
                  fluid={data.breakfast.childImageSharp.fluid}
                />
                <Link to="/menu/breakfast" className="absolute ease hover:zoom">
                  Breakfast
                </Link>
              </div>
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-full opacity-50 rounded-full w-full"
                  fluid={data.mainMenu.childImageSharp.fluid}
                />
                <Link to="/menu/to-share" className="absolute ease hover:zoom">
                  Main Menu
                </Link>
              </div>
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-full opacity-50 rounded-full w-full"
                  fluid={data.takeAway.childImageSharp.fluid}
                />
                <Link to="/menu/take-away" className="absolute ease hover:zoom">
                  Take Away
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    )}
  />
);

export default MenuSection;
