import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SuccessPage = () => (
  <Layout>
    <SEO title="Success: message sent" />
    <div className="flex flex-1 h-full items-center justify-center mx-auto p-4 w-full">
      <div className="border-2 border-brand-blue leading-tight max-w-sm p-4 text-center text-xl">
        <h1 className="font-display leading-none mb-4 pt-2 text-4xl">
          Form submitted successfully!
        </h1>
        <p>
          Thank you for your message. We will get back to you as soon as we can.
        </p>
        <p className="mt-4">
          <Link
            className="bg-brand-blue font-display inline-block leading-none px-4 py-2 text-base text-white uppercase"
            to="/"
          >
            Back to home page
          </Link>
        </p>
      </div>
    </div>
  </Layout>
);

export default SuccessPage;
