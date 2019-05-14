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
        hero: file(relativePath: { eq: "menu.jpg" }) {
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
          <div className="absolute flex inset-0 items-center max-w-3xl mx-auto p-8">
            <div className="leading-tight max-w-xs text-white text-xl">
              <h1 className="font-display mb-3 text-6xl">About Us</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi aspernatur optio libero illo nisi rerum. Distinctio
                expedita est totam illum quod. Consequatur commodi recusandae
                veniam ratione aspernatur est, beatae tempore.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default AboutPage;
