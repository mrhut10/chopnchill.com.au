import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import ContactForm from '../ContactForm';
import ContactMobileImage from '../../images/contact-mobile.svg';
import ContactDesktopImage from '../../images/contact-desktop.svg';

const ContactSection = () => (
  <StaticQuery
    query={graphql`
      query ContactSectionQuery {
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={data => (
      <section className="max-w-5xl mx-auto overflow-hidden pb-24 pr-4 w-full">
        <img
          className="md:hidden max-w-lg mx-auto p-6 w-full"
          src={ContactMobileImage}
          alt=""
        />
        <div className="squiggle bg-right flex flex-wrap px-4">
          <div className="leading-tight max-w-xl mx-auto px-4 text-2xl w-full md:w-1/2">
            <h2 className="font-display leading-none mb-6 text-5xl text-center uppercase w-full">
              Contact Us
            </h2>
            <p className="mb-4">
              We are located on the Town Green overlooking the Hastings River,
              call us on{' '}
              <a href={`tel:${data.site.siteMetadata.phone}`}>
                {data.site.siteMetadata.phoneFormatted}
              </a>{' '}
              or complete the enquiry form below. Call or email with your
              questions and queries. We look forward to hearing from you!
            </p>
            <img
              className="hidden md:block mx-auto p-6 w-64"
              src={ContactDesktopImage}
              alt=""
            />
          </div>
          <div className="max-w-md mx-auto px-4 w-full md:w-1/2">
            <h2 className="text-3xl uppercase">Enquiry</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    )}
  />
);

export default ContactSection;
