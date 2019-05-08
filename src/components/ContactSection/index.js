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
      <section className="max-w-5xl mx-auto overflow-hidden pb-12 pl-4">
        <div className="max-w-3xl mr-auto">
          <div className="flex items-start">
            <div className="text-xl w-full">
              <img
                className="sm:hidden mb-6 mx-auto w-full"
                src={CheeseBoard}
                alt=""
              />
              <div className="squiggle bg-left leading-tight max-w-lg mb-4 mr-auto sm:ml-12 pl-6 sm:pl-12 pr-4">
                <h2 className="font-display leading-none my-6 text-5xl text-center uppercase w-full">
                  Contact Us
                </h2>
                <p>
                  If you’d like to make a booking or have any questions about
                  our cakes and desserts, please call us on{' '}
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
            <img
              className="hidden sm:block ml-6 w-64"
              src={CheeseBoard}
              alt=""
            />
          </div>
        </div>
      </section>
    )}
  />
);

export default ContactSection;
