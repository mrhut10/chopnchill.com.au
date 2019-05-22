import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import propTypes from 'prop-types';
import slugify from 'slugify';
import queryString from 'query-string';
import moment from 'moment';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tabs from '../components/Menu/Tabs';
import Tab from '../components/Menu/Tab';
// Menus
import ToShareJune from '../components/Menu/June/ToShare';
import ToShareJuly from '../components/Menu/July/ToShare';
import OrNotToShareJune from '../components/Menu/June/OrNotToShare';
import OrNotToShareJuly from '../components/Menu/July/OrNotToShare';
import BreakfastJune from '../components/Menu/June/Breakfast';
import BreakfastJuly from '../components/Menu/July/Breakfast';
import VeganVegetarianJune from '../components/Menu/June/VeganVegetarian';
import VeganVegetarianJuly from '../components/Menu/July/VeganVegetarian';
import GlutenFreeJune from '../components/Menu/June/GlutenFree';
import GlutenFreeJuly from '../components/Menu/July/GlutenFree';
// import Drinks from '../components/Menu/June/Drinks';

// moment().isSameOrBefore('2019-07-09') ? console.log(true) : console.log(false);

const contentPaths = [
  ['', ToShareJune],
  [
    'to-share',
    moment().isSameOrBefore('2019-07-09') ? ToShareJune : ToShareJuly,
  ],
  [
    'or-not-to-share',
    moment().isSameOrBefore('2019-07-09') ? OrNotToShareJune : OrNotToShareJuly,
  ],
  [
    'breakfast',
    moment().isSameOrBefore('2019-07-09') ? BreakfastJune : BreakfastJuly,
  ],
  [
    'vegan-vegetarian',
    moment().isSameOrBefore('2019-07-09')
      ? VeganVegetarianJune
      : VeganVegetarianJuly,
  ],
  [
    'gluten-free',
    moment().isSameOrBefore('2019-07-09') ? GlutenFreeJune : GlutenFreeJuly,
  ],
  // ['drinks', moment().isSameOrBefore('2019-07-09') ? DrinksJune : DrinksJuly],
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

const edgeToTab = () => edge => {
  const label = edge.node.title;
  const path = `/menu/?${queryString.stringify({ tab: label })}#menu`;
  const Content = LabelToContent(label);
  return Tab({
    label,
    path,
    Content: <Content />,
  });
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

const MenuPage = ({ pageContext, location }) => {
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
            selectedTab={queryString.parse(location.search).tab || 'To Share?'}
            TabArray={data.allMenuJson.edges.map(edgeToTab(pageContext))}
          />
        </Layout>
      )}
    />
  );
};

MenuPage.propTypes = {
  pageContext: propTypes.any,
  location: propTypes.any,
};

export default MenuPage;
