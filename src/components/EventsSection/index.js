import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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
      <section className="mb-24">
        <div className="max-w-lg mx-auto py-12 text-xl">
          <h2 className="font-display leading-none mb-6 text-6xl text-center">
            Join Us For Your Next Event
          </h2>
          <p>
            Whether it's a corporate function, or a special occasion, our
            experienced staff will work with you to tailor an event that meets
            all of your needs and leaves a lasting impression on your guests.
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
        <div className="flex items-center sm:justify-center overflow-x-auto max-w-2xl mx-auto w-full">
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 overflow-hidden relative rounded-full text-center text-white w-32">
            <Img
              className="absolute min-h-full inset-0 opacity-50 min-w-full"
              fluid={data.birthdays.childImageSharp.fluid}
            />
            <span className="absolute">Birthdays</span>
          </div>
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 overflow-hidden relative rounded-full text-center text-white w-32">
            <Img
              className="absolute min-h-full inset-0 opacity-50 min-w-full"
              fluid={data.babyShowers.childImageSharp.fluid}
            />
            <span className="absolute">Baby Showers</span>
          </div>
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 overflow-hidden relative rounded-full text-center text-white w-32">
            <Img
              className="absolute min-h-full inset-0 opacity-50 min-w-full"
              fluid={data.specialFunctions.childImageSharp.fluid}
            />
            <span className="absolute">
              Special <br />
              Functions
            </span>
          </div>
        </div>
      </section>
    )}
  />
);

export default EventsSection;
