import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { FaFacebookSquare, FaInstagram, FaPhoneSquare } from 'react-icons/fa';

import LogoLandscape from '../../images/logo-landscape.svg';

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
      <header className="bg-brand-blue flex font-sans items-center justify-between leading-none sticky text-white top-0 w-full">
        <div className="px-6 py-4">
          <Link
            to="/"
            className="flex font-bold items-center no-underline text-lg tracking-tight"
          >
            <img
              className="flex-shrink-0 h-12 py-2"
              src={LogoLandscape}
              alt={data.site.siteMetadata.title}
            />
          </Link>
        </div>
        <nav
          id="nav"
          className="flex items-center justify-end px-6 py-4 text-sm sm:text-base tracking-wider uppercase"
        >
          <NavLink link="/menu" title="Menu" />
          <NavLink link="/about" title="About" />
          <NavLink link="/contact" title="Contact" />
          <a
            className="hidden sm:block"
            href={`tel:${data.site.siteMetadata.phone}`}
          >
            Call {data.site.siteMetadata.phoneFormatted}
          </a>
          <FaInstagram className="ml-1" />
          <FaFacebookSquare className="ml-1" />
        </nav>
      </header>
    )}
  />
);

const NavLink = props => (
  <Link to={props.link} className="px-2">
    {props.title}
  </Link>
);

export default Header;
