import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import propTypes from 'prop-types';
import slugify from 'slugify';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tabs from '../components/Menu/Tabs';
import Tab from '../components/Menu/Tab';
import ToShare from '../components/Menu/ToShare';
import OrNotToShare from '../components/Menu/OrNotToShare';
import Breakfast from '../components/Menu/Breakfast';
import VeganVegetarian from '../components/Menu/VeganVegetarian';
import GlutenFree from '../components/Menu/GlutenFree';
import Drinks from '../components/Menu/Drinks';

const contentPaths = [
  ['', ToShare],
  ['to-share', ToShare],
  ['or-not-to-share', OrNotToShare],
  ['breakfast', Breakfast],
  ['vegan-vegetarian', VeganVegetarian],
  ['gluten-free', GlutenFree],
  ['drinks', Drinks],
];

const LabelToContent = label => {
  const expectedSlug = slugify(label, { lower: true });
  const foundIt = contentPaths.find(a => a[0] === expectedSlug);
  if (!foundIt) {
    throw Error(
      `Sorry unable to find that menu
      ${JSON.stringify({
        expectedSlug,
        foundIt,
        contentPaths,
      })}
      `
    );
  }

  return foundIt[1];
};

const pageQuery = graphql`
  fragment menuPageFluidImage on File {
    childImageSharp {
      fluid(maxWidth: 5000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query MenuPageQuery1 {
    hero: file(relativePath: { eq: "menu.jpg" }) {
      ...menuPageFluidImage
    }
    allMenuJson(sort: { fields: order }) {
      edges {
        node {
          id
          title
          order
        }
      }
    }
  }
`;

const MenuPage = ({ pageContext }) => {
  useEffect(() => {
    navigate('#menu');
  }, []);
  return (
    <StaticQuery
      query={pageQuery}
      render={data => (
        <Layout>
          <SEO
            title="Menu"
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
            <div className="absolute flex inset-0 items-center justify-center max-w-4xl mx-auto p-8">
              <div className="leading-tight max-w-xs text-white text-xl">
                <h1 className="font-display mb-3 text-6xl">Food</h1>
              </div>
            </div>
          </div>
          <Tabs
            TabArray={data.allMenuJson.edges.map(tab => {
              const label = tab.node.title;
              const path = `/menu/${slugify(label, { lower: true })}`;
              const active = pageContext.selectedMenuTab === label;
              const Content = LabelToContent(label);
              return Tab({
                label,
                path,
                active,
                Content: <Content />,
              });
            })}
          />
        </Layout>
      )}
    />
  );
};

MenuPage.propTypes = {
  pageContext: propTypes.any,
};

export default MenuPage;
