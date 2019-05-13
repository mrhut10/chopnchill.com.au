import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tabs from '../components/Menu/Tabs';
import ToShare from '../components/Menu/ToShare';
import OrNotToShare from '../components/Menu/OrNotToShare';
import Drinks from '../components/Menu/Drinks';
import Breakfast from '../components/Menu/Breakfast';

const MenuPage = () => (
  <StaticQuery
    query={graphql`
      fragment menuPageFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query MenuPageQuery {
        hero: file(relativePath: { eq: "menu.jpg" }) {
          ...menuPageFluidImage
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Home"
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
            style={{ minHeight: `50vh`, maxHeight: `18rem` }}
            fluid={data.hero.childImageSharp.fluid}
          />
          <div className="absolute flex inset-0 items-center max-w-3xl mx-auto p-8">
            <div className="leading-tight max-w-xs text-white text-xl">
              <h1 className="font-display mb-3 text-6xl">Food</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi aspernatur optio libero illo nisi rerum. Distinctio
                expedita est totam illum quod. Consequatur commodi recusandae
                veniam ratione aspernatur est, beatae tempore.
              </p>
            </div>
          </div>
        </div>
        <Tabs>
          <div label="To Share?">
            <ToShare />
          </div>
          <div label="Or Not To Share?">
            <OrNotToShare />
          </div>
          <div label="Drinks">
            <Drinks />
          </div>
          <div label="Breakfast">
            <Breakfast />
          </div>
        </Tabs>
      </Layout>
    )}
  />
);

export default MenuPage;
