import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
// import Img from 'gatsby-image';

import EventsDesktopImage from '../../images/events-desktop.svg';
import EventsMobileImage from '../../images/events-mobile.svg';

const EventsSection = () => (
  <StaticQuery
    query={graphql`
      fragment eventsSectionFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query EventsSectionQuery {
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={data => (
      <section className="max-w-5xl mx-auto overflow-hidden pb-24 pl-4 w-full">
        <div className="max-w-4xl mr-auto">
          <div className="squiggle bg-left flex items-center leading-tight mb-4 mr-auto pl-6 sm:pl-12 pr-4">
            <div className="text-2xl w-full">
              <img
                className="sm:hidden mx-auto p-6 w-full"
                src={EventsMobileImage}
                alt=""
              />
              <div className="leading-tight mb-4">
                <h2 className="font-display leading-none my-6 text-5xl text-center uppercase w-full">
                  Join Us For
                  <br />
                  Your Next Event
                </h2>
                <p className="mb-4">
                  Something special coming up? We pride ourselves on turning any
                  gathering in to a fun event and unforgettable celebration!
                  We’re set up to cater for, Engagement Parties, Baby Showers,
                  Birthday Parties and all kinds of Work Functions. Whether it’s
                  a Budget or Gala event we’re always happy to talk to you!
                </p>
                <p className="mb-4">
                  Consider us next time you are planning a birthdays, baby
                  shower or any other special event.
                </p>
                <p>
                  For all enquiries, please contact{' '}
                  <a
                    className="underline"
                    href={`mailto:${data.site.siteMetadata.email}`}
                  >
                    {data.site.siteMetadata.email}
                  </a>
                </p>
              </div>
            </div>
            <img
              className="hidden sm:block md:max-w-xs ml-4 mr-6 w-64 md:w-full"
              src={EventsDesktopImage}
              alt=""
            />
          </div>
        </div>
      </section>
    )}
  />
);

export default EventsSection;
