import React, { Component } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tabs from '../components/Menu/Tabs';
import ToShare from '../components/Menu/ToShare';
import OrNotToShare from '../components/Menu/OrNotToShare';
import Drinks from '../components/Menu/Drinks';
import Breakfast from '../components/Menu/Breakfast';

class MenuPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `Chop 'n Chill`,
            `Chop and Chill`,
            `Asian food`,
            `Burgers`,
            `Bar`,
            `Grill`,
            `restaurant,`,
          ]}
        />
        <h1 className="font-display text-6xl text-center">Food</h1>
        <Tabs>
          <div label="To Share?">
            <ToShare />
          </div>
          <div label="Or Not To Share?">
            <OrNotToShare />
          </div>
          <div label="Drinks">
            <Drinks />
          </div>
          <div label="Breakfast">
            <Breakfast />
          </div>
        </Tabs>
      </Layout>
    );
  }
}

export default MenuPage;
