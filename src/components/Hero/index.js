import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import Image from './Image';
import Logo from '../../images/logo-portrait.svg';

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
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
      <div className="hero bg-brand-blue flex font-sans items-center mx-auto overflow-hidden relative w-full">
        <div className="image-container opacity-75">
          <Image />
        </div>
        <div className="absolute flex top-0 left-0 right-0 items-center justify-between px-6 py-4 text-white uppercase">
          <div className="hidden sm:block">
            <a href={`tel:${data.site.siteMetadata.phone}`}>
              Call {data.site.siteMetadata.phoneFormatted}
            </a>
          </div>
          <div className="flex items-center relative w-full sm:w-auto z-10">
            <nav className="mr-auto sm:mx-auto">
              <a className="mx-2" href="/menu">
                Menu
              </a>
              <a className="mx-2" href="/about">
                About
              </a>
              <a className="mx-2" href="/contact">
                Contact
              </a>
            </nav>
            <a className="ml-1" href={data.site.siteMetadata.instagram}>
              <FaInstagram />
            </a>
            <a className="ml-1" href={data.site.siteMetadata.facebook}>
              <FaFacebookSquare />
            </a>
          </div>
        </div>
        <div className="flex flex-col pb-16 pt-16 px-4 relative w-full">
          <div className="max-w-sm mx-auto">
            <h1 className="font-display leading-none mb-8 text-white text-6xl">
              <img
                className="px-12 w-full"
                src={Logo}
                alt={data.site.siteMetadata.title}
              />
            </h1>
          </div>
        </div>
      </div>
    )}
  />
);

export default Hero;
