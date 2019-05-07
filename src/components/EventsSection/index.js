import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Margarita from '../../images/margarita.svg';

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
      <section className="max-w-5xl mx-auto overflow-hidden pb-12 pt-6 px-4">
        <div className="squiggle max-w-3xl mr-auto pl-6 sm:pl-12 relative">
          <img
            className="float-left mr-4 relative w-40"
            src={Margarita}
            alt=""
          />
          <div className="text-xl">
            <h2 className="flex font-display leading-none mb-6 relative text-5xl text-center uppercase">
              Join Us For <br />
              Your Next Event
            </h2>
            <div>
              <div className="leading-tight max-w-2xl">
                <p>
                  Whether it's a corporate function, or a special occasion, our
                  experienced staff will work with you to tailor an event that
                  meets all of your needs and leaves a lasting impression on
                  your guests.
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
            <div className="xscroll-on lg:xscroll-off flex items-center -ml-4 overflow-x-auto mt-8 w-full">
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-3 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-full opacity-50 rounded-full w-full"
                  fluid={data.birthdays.childImageSharp.fluid}
                />
                <span className="absolute">Birthdays</span>
              </div>
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-3 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-full opacity-50 rounded-full w-full"
                  fluid={data.babyShowers.childImageSharp.fluid}
                />
                <span className="absolute">Baby Showers</span>
              </div>
              <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-3 overflow-hidden relative rounded-full text-center text-white w-32">
                <Img
                  className="h-full opacity-50 rounded-full w-full"
                  fluid={data.specialFunctions.childImageSharp.fluid}
                />
                <span className="absolute">
                  Special <br />
                  Functions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);

export default EventsSection;
