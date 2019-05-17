import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import propTypes from 'prop-types';
import slugify from 'slugify';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import DumbTabs from '../components/Menu/DumbTabs';
import DumbTab from '../components/Menu/DumbTab';

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
    allMenuJson {
      edges {
        node {
          title
        }
      }
    }  
  }
  
`;

const MenuPage = ({ pageContext }) => (
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
          TabArray={
            // [DumbTab({label:'im a label', path:'/menu', active:true, Content:<p>hello</p>})]
            data.allMenuJson.edges.map(child => {
              const label = child.node.title;
              const path = `/menu/${slugify(label, { lower: true })}`;
              const active = pageContext.selectedMenuTab === label;
              const Content = <div>{JSON.stringify({label,path,active,url:pageContext})}</div>;
              return DumbTab({ label, path, active, Content });
            })
          }
        />
      </Layout>
    )}
  />
);

MenuPage.propTypes = {
  pageContext: propTypes.any,
};
export default MenuPage;
