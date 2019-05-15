import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactSection';

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      fragment contactPageFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query ContactPageQuery {
        hero: file(relativePath: { eq: "contact.jpg" }) {
          ...contactPageFluidImage
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Contact"
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
              <h1 className="font-display mb-3 text-6xl">Contact</h1>
            </div>
          </div>
        </div>
        <div className="border-2 border-brand-blue m-4 max-w-3xl mx-auto p-4 text-xl">
          <ContactForm />
        </div>
      </Layout>
    )}
  />
);

export default ContactPage;
