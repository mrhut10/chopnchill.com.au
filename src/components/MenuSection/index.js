import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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
      <section className="mb-24">
        <div className="max-w-lg mx-auto py-12 text-xl">
          <h2 className="font-display leading-none mb-6 text-6xl text-center">
            Hungry?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi
            maxime illum distinctio veritatis ad eos error odio non,
            consequuntur ab repellat id, expedita quae soluta facilis, accusamus
            necessitatibus pariatur.
          </p>
        </div>
        <div className="flex items-center sm:justify-center overflow-x-auto max-w-2xl mx-auto w-full">
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 overflow-hidden relative rounded-full text-center text-white w-32">
            <Img
              className="absolute min-h-full inset-0 opacity-50 min-w-full"
              fluid={data.breakfast.childImageSharp.fluid}
            />
            <span className="absolute">Breakfast</span>
          </div>
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 overflow-hidden relative rounded-full text-center text-white w-32">
            <Img
              className="absolute min-h-full inset-0 opacity-50 min-w-full"
              fluid={data.mainMenu.childImageSharp.fluid}
            />
            <span className="absolute">Main Menu</span>
          </div>
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 overflow-hidden relative rounded-full text-center text-white w-32">
            <Img
              className="absolute min-h-full inset-0 opacity-50 min-w-full"
              fluid={data.takeAway.childImageSharp.fluid}
            />
            <span className="absolute">Take Away</span>
          </div>
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 overflow-hidden relative rounded-full text-center text-white w-32">
            <Img
              className="absolute min-h-full inset-0 opacity-50 min-w-full"
              fluid={data.beverages.childImageSharp.fluid}
            />
            <span className="absolute">Beverages</span>
          </div>
        </div>
      </section>
    )}
  />
);

export default MenuSection;
