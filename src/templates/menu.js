import React, { useEffect } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import propTypes from 'prop-types';
import slugify from 'slugify';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import DumbTabs from '../components/Menu/DumbTabs';
import DumbTab from '../components/Menu/DumbTab';

import ToShare from '../components/Menu/ToShare';
import OrNotToShare from '../components/Menu/OrNotToShare';
import Breakfast from '../components/Menu/Breakfast';
import VeganVegetarian from '../components/Menu/VeganVegetarian';
import GlutenFree from '../components/Menu/GlutenFree';
import Drinks from '../components/Menu/Drinks';
import { navigate } from '@reach/router';

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
  fragment menuPage1FluidImage on File {
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
          <DumbTabs
            TabArray={data.allMenuJson.edges.map(tab => {
              const label = tab.node.title;
              const key = tab.node.id;
              const path = `/menu/${slugify(label, { lower: true })}`;
              const active = pageContext.selectedMenuTab === label;
              const Content = LabelToContent(label);
              return DumbTab({
                label,
                key,
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
