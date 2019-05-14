import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import propTypes from 'prop-types';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import LogoLandscape from '../../images/logo-landscape.svg';

const handleClick = e => {
  e.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

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
      <header className="bg-brand-blue sm:flex items-center leading-none text-white top-0 relative shadow sticky w-full z-50">
        <div className="relative">
          <div className="flex justify-between w-full">
            <Link
              to="/"
              className="flex font-bold items-center no-underline px-6 py-4 text-lg tracking-tight"
            >
              <img
                className="h-12 py-2"
                src={LogoLandscape}
                alt={data.site.siteMetadata.title}
              />
            </Link>

            <button
              className="flex sm:hidden items-center justify-center px-6 py-4"
              onClick={handleClick}
              type="button"
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <nav
          id="nav"
          className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end pb-2 sm:pb-0 tracking-wider relative uppercase w-full sm:w-auto"
        >
          <NavLink link="/menu" title="Menu" />
          <NavLink link="/about" title="About" />
          <NavLink link="/contact" title="Contact" />
          <a
            className="block px-6 sm:px-2 py-2"
            href={`tel:${data.site.siteMetadata.phone}`}
          >
            Call {data.site.siteMetadata.phoneFormatted}
          </a>
          <div className="flex px-6 py-2">
            <a className="mr-1" href={data.site.siteMetadata.instagram}>
              <FaInstagram />
            </a>
            <a href={data.site.siteMetadata.facebook}>
              <FaFacebookSquare />
            </a>
          </div>
        </nav>
      </header>
    )}
  />
);

const NavLink = ({ link, title }) => (
  <Link to={link} className="block px-6 sm:px-2 py-2">
    {title}
  </Link>
);

NavLink.propTypes = {
  link: propTypes.string,
  title: propTypes.string,
};

export default Header;
