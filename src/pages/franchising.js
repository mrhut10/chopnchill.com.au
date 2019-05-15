import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const FranchisingPage = () => (
  <StaticQuery
    query={graphql`
      fragment FranchisingPageFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query FranchisingPageQuery {
        hero: file(relativePath: { eq: "franchising.jpg" }) {
          ...FranchisingPageFluidImage
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Franchising"
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
              <h1 className="font-display mb-3 text-6xl">Franchising</h1>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto p-4 text-xl">
          <div className="border-2 border-brand-blue max-w-lg mx-auto p-4">
            <p>
              If you like the Chop ‘n Chill concept and believe you have the
              passion, drive and dedication to take it back to your home town,
              we’d love to talk to you. We are open to franchising our concept
              to the right people, who like us, are interested in owing their
              own business, taking control of their own destiny, and realising
              their ambitions to get ahead. Interested?
            </p>
            <p>
              Contact:{' '}
              <a
                className="underline"
                style={{ textDecorationStyle: `wavy` }}
                href="mailto:jacqueline@chopnchill.com.au"
              >
                jacqueline@chopnchill.com.au
              </a>{' '}
              or{' '}
              <a
                className="underline"
                style={{ textDecorationStyle: `wavy` }}
                href="mailto:paul@chopnchill.com.au"
              >
                paul@chopnchill.com.au
              </a>
            </p>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default FranchisingPage;
