import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const EventsSection = () => (
  <StaticQuery
    query={graphql`
      query EventSectionQuery {
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={data => (
      <section className="mb-24">
        <div className="max-w-lg mx-auto py-12 text-xl">
          <h2 className="font-display text-6xl text-center">
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
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 text-center text-white w-32 rounded-full">
            Birthdays
          </div>
          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 text-center text-white w-32 rounded-full">
            Baby Showers
          </div>

          <div className="bg-brand-blue flex flex-shrink-0 font-display h-32 items-center justify-center leading-none mb-8 mx-4 text-center text-white w-32 rounded-full">
            Special
            <br />
            Functions
          </div>
        </div>
      </section>
    )}
  />
);

export default EventsSection;
