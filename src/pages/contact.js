import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

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
          <div className="absolute flex inset-0 items-center justify-center max-w-4xl mx-auto p-8">
            <div className="leading-tight max-w-xs text-white text-xl">
              <h1 className="font-display mb-3 text-6xl">Contact</h1>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <div className="max-w-lg mx-auto p-4 text-2xl">
            <p className="mb-4">
              We are located on the Town Green overlooking the Hastings River,
              call us on (02) 6583 9155 or complete the enquiry form below. Call
              or email with your questions and queries. We look forward to
              hearing from you!
            </p>
            <h2 className="max-w-sm text-3xl uppercase w-full">Enquiry</h2>
            <ContactForm />
          </div>
        </div>
      </Layout>
    )}
  />
);

export default ContactPage;
