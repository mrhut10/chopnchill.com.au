import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
            phone
            phoneFormatted
            email
          }
        }
      }
    `}
    render={data => (
      <footer>
        <div className="bg-brand-blue flex flex-wrap justify-around leading-tight px-6 py-10 text-white">
          <div className="px-3">
            <h3 className="font-display mb-4 text-2xl">
              We're <br />
              Very Social
            </h3>
            <p>Follow us to keep updated</p>
            <p className="flex items-center">
              <FaInstagram className="mr-1" />
              #chopnchill
              <FaFacebookSquare className="ml-2 mr-1" />
              @chopnchill
            </p>
          </div>
          <div className="px-3">
            <h3 className="font-display text-2xl">Contact</h3>
          </div>
          <div className="px-3">
            <h3 className="font-display text-2xl">Hours</h3>
          </div>
          <div className="px-3">
            <h3 className="font-display text-2xl">Navigation</h3>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center mb-0 p-4 text-center w-full">
          © {new Date().getFullYear()} {data.site.siteMetadata.title}{' '}
          <span className="mx-2">|</span>
          Website by
          <a
            className="font-semibold inline-flex px-1"
            href="https://phirannodesigns.com.au"
            rel="nofollow"
          >
            Phiranno Designs
          </a>
        </div>
      </footer>
    )}
  />
);

export default Footer;
