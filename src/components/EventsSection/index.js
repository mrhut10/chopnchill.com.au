import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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
        birthdays: file(relativePath: { eq: "birthdays.jpg" }) {
          ...eventsSectionFluidImage
        }
        babyShowers: file(relativePath: { eq: "baby-showers.jpg" }) {
          ...eventsSectionFluidImage
        }
        specialFunctions: file(relativePath: { eq: "special-functions.jpg" }) {
          ...eventsSectionFluidImage
        }
      }
    `}
    render={data => (
      <section className="max-w-5xl mx-auto overflow-hidden pb-24 pr-4 w-full">
        <div className="max-w-4xl ml-auto">
          <div className="flex items-start">
            <img
              className="hidden sm:block md:max-w-xs ml-4 mr-6 w-64 md:w-full"
              src={EventsDesktopImage}
              alt=""
            />
            <div className="text-xl w-full">
              <img
                className="sm:hidden mx-auto p-6 w-full"
                src={EventsMobileImage}
                alt=""
              />
              <div className="squiggle bg-right leading-tight mb-4 ml-auto sm:mr-12 pr-6 sm:pr-12 pl-4 w-full">
                <h2 className="font-display leading-none my-6 text-5xl text-center uppercase w-full">
                  Join Us For
                  <br />
                  Your Next Event
                </h2>
                <p>
                  Something special coming up? We pride ourselves on turning any
                  gathering in to a fun event and unforgettable celebration!
                  We’re set up to cater for, Engagement Parties, Baby Showers,
                  Birthday Parties and all kinds of Work Functions. Whether it’s
                  a Budget or Gala event we’re always happy to talk to you!
                </p>
                <p>
                  <strong>
                    For all enquiries, please contact{' '}
                    <a href={`mailto:${data.site.siteMetadata.email}`}>
                      {data.site.siteMetadata.email}
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center overflow-x-auto ml-auto sm:mr-12 pr-6 sm:pr-12 pl-4 py-6">
            <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none ml-auto mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
              <Img
                className="h-full opacity-50 rounded-full w-full"
                fluid={data.birthdays.childImageSharp.fluid}
              />
              <span className="absolute ease hover:zoom">Birthdays</span>
            </div>
            <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
              <Img
                className="h-full opacity-50 rounded-full w-full"
                fluid={data.babyShowers.childImageSharp.fluid}
              />
              <span className="absolute ease hover:zoom">
                Baby
                <br />
                Showers
              </span>
            </div>
            <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mr-6 overflow-hidden relative rounded-full text-center text-white w-32">
              <Img
                className="h-full opacity-50 rounded-full w-full"
                fluid={data.specialFunctions.childImageSharp.fluid}
              />
              <span className="absolute ease hover:zoom">
                Special <br />
                Functions
              </span>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);

export default EventsSection;
