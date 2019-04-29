import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import ContactForm from '../ContactForm';

const ContactSection = () => (
  <StaticQuery
    query={graphql`
      query ContactSectionQuery {
        site {
          siteMetadata {
            phone
            phoneFormatted
          }
        }
      }
    `}
    render={data => (
      <section className="mb-24">
        <div className="max-w-lg mx-auto text-xl">
          <h2 className="font-display mb-2 text-6xl text-center">Contact Us</h2>
          <p>
            If you’d like to make a booking or have any questions about our
            cakes and desserts, please call us on{' '}
            <a href={`tel:${data.site.siteMetadata.phone}`}>
              {data.site.siteMetadata.phoneFormatted}
            </a>{' '}
            or complete the enquiry form below. We look forward to hearing from
            you!
          </p>
          <h3 className="text-3xl uppercase">Enquiry</h3>
          <ContactForm />
        </div>
      </section>
    )}
  />
);

export default ContactSection;
