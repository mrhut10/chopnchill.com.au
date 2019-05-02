import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Squiggle from '../../images/sqiggle.svg';
import CheeseBoard from '../../images/cheeseboard.svg';
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
      <section className="max-w-5xl mx-auto overflow-x-hidden pb-12 pt-6 px-4 relative">
        <div
          className="squiggle bg-repeat-y sm:ml-12 pl-4 sm:pl-12"
          style={{
            backgroundImage: `url(${Squiggle})`,
          }}
        >
          <img
            className="relative float-right mt-12 right-0 top-0 w-56"
            src={CheeseBoard}
            alt=""
          />
          <div className="mx-auto text-xl">
            <h2 className="font-display leading-none mb-6 text-5xl text-center uppercase">
              Contact Us
            </h2>
            <p className="max-w-lg mb-4">
              If you’d like to make a booking or have any questions about our
              cakes and desserts, please call us on{' '}
              <a href={`tel:${data.site.siteMetadata.phone}`}>
                {data.site.siteMetadata.phoneFormatted}
              </a>{' '}
              or complete the enquiry form below. We look forward to hearing
              from you!
            </p>
            <h3 className="text-3xl uppercase">Enquiry</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    )}
  />
);

export default ContactSection;
