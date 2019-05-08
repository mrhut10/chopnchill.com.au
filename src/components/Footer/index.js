import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import Rosemary from '../../images/rosemary-footer.svg';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            email
            facebook
            instagram
            phone
            phoneFormatted
            title
          }
        }
      }
    `}
    render={data => (
      <footer>
        <div className="bg-brand-blue flex flex-wrap leading-tight px-6 py-10 relative text-white">
          <div className="footer-squiggle-horizontal sm:footer-squiggle flex flex-col items-center mb-10 sm:mb-0 pb-10 pl-3 pr-6 w-full sm:w-1/4">
            <h3 className="font-display mb-4 text-2xl tracking-wider uppercase">
              We're <br />
              Very Social
            </h3>
            <p>Follow us to keep updated</p>
            <p className="flex flex-wrap">
              <a
                className="flex items-center mr-2"
                href={data.site.siteMetadata.instagram}
              >
                <FaInstagram className="mr-1" />
                #chopnchill
              </a>
              <a
                className="flex items-center"
                href={data.site.siteMetadata.facebook}
              >
                <FaFacebookSquare className="mr-1" />
                @chopnchill
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center pb-6 px-3 w-full sm:w-1/4">
            <h3 className="font-display mb-1 text-2xl tracking-wider uppercase">
              Contact
            </h3>
            <p>
              <a href={`tel:${data.site.siteMetadata.phone}`}>
                {data.site.siteMetadata.phoneFormatted}
              </a>
            </p>
            <p>
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                {data.site.siteMetadata.email}
              </a>
            </p>
            <p>
              <a href="https://m.me/chopandchill">Message Us</a>
            </p>
          </div>
          <div className="flex flex-col items-center pb-6 px-3 w-full sm:w-1/4">
            <h3 className="font-display mb-1 text-2xl tracking-wider uppercase">
              Hours
            </h3>
            <p>
              <strong>Mon to Sat</strong>
            </p>
            <p>
              Breakfast, <br />
              Lunch &amp; Dinner
            </p>
            <p>
              <strong>Sunday</strong>
            </p>
            <p>Breakfast, Lunch</p>
          </div>
          <div className="flex flex-col items-center pb-6 px-3 w-full sm:w-1/4">
            <h3 className="font-display mb-1 text-2xl tracking-wider uppercase">
              Navigation
            </h3>
            <div className="flex flex-wrap">
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Menu</Link>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
              </ul>
              <ul className="ml-auto">
                <li>Functions</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <img
            className="absolute h-24 -mb-4 mr-1 right-0 bottom-0"
            src={Rosemary}
            alt=""
          />
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
