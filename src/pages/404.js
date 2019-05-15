import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-1 h-full items-center justify-center mx-auto p-4 w-full">
      <div className="border-2 border-brand-blue leading-tight max-w-sm p-4 text-center text-xl">
        <h1 className="font-display leading-none mb-4 pt-2 text-4xl">
          404: Page Not Found
        </h1>
        <p>The page you were looking for doesn't seem to exist.</p>
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

export default NotFoundPage;
