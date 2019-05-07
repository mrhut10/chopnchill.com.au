import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

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
      <section className="max-w-5xl mx-auto overflow-hidden pb-12 pt-6 px-4">
        <div className="max-w-3xl ml-auto relative">
          <div className="squiggle sm:ml-12 pl-4 sm:pl-12">
            <img
              className="relative float-right mt-12 right-0 top-0 w-56"
              src={CheeseBoard}
              alt=""
            />
            <div className="mx-auto text-xl">
              <h2 className="font-display leading-none mb-6 text-5xl text-center uppercase">
                Contact Us
              </h2>
              <div className="leading-tight max-w-lg mb-4">
                <p>
                  If you’d like to make a booking or have any questions about
                  our cakes and desserts, please call us on{' '}
                  <a href={`tel:${data.site.siteMetadata.phone}`}>
                    {data.site.siteMetadata.phoneFormatted}
                  </a>{' '}
                  or complete the enquiry form below. We look forward to hearing
                  from you!
                </p>
              </div>
              <h3 className="text-3xl uppercase">Enquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    )}
  />
);

export default ContactSection;
