import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      fragment aboutPageFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query AboutPageQuery {
        hero: file(relativePath: { eq: "about.jpg" }) {
          ...aboutPageFluidImage
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="About"
          keywords={[
            `Chop 'n Chill`,
            `Chop and Chill`,
            `Asian food`,
            `Burgers`,
            `Bar`,
            `Grill`,
            `restaurant,`,
          ]}
        />
        <div className="bg-brand-blue relative">
          <Img
            className="opacity-75"
            style={{ height: `50vh`, minHeight: `22rem` }}
            fluid={data.hero.childImageSharp.fluid}
          />
          <div className="absolute flex inset-0 items-center justify-center max-w-3xl mx-auto p-8">
            <div className="leading-tight max-w-xs text-white text-xl">
              <h1 className="font-display mb-3 text-6xl">About Us</h1>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto p-4 text-xl">
          <div className="border-2 border-brand-blue max-w-lg mx-auto p-4">
            <p>
              A love of the food hospitality industry along with extensive
              researching of various cuisines around the world and a desire to
              share their accumulated experiences and knowledge with people in
              their home town, are the main reasons behind Paul and Jacqueline
              establishing the Chop ‘n Chill concept. And it’s more than just
              the food as a big part of the concept is what it offers people by
              way of location - in the centre of town right on the Town Green;
              spectacular views – across the Town Green and the beautiful
              Hastings River; indoor/outdoor dining – in relaxing and pleasant
              surrounds; kids play park – in full view from the restaurant. Chop
              ‘n Chill is a destination that’s all about spending great times
              with family and friends.
            </p>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default AboutPage;
