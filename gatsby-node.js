// * See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');
const slugify = require('slugify');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const menuTemplate = path.resolve('src/templates/menu.js');
  const menuQuery = graphql(
    `
      query loadMenuQuery($limit: Int!) {
        allMenuJson(limit: $limit) {
          edges {
            node {
              title
            }
          }
        }
      }
    `,
    { limit: 1000 }
  );
  const menuEdgeToPage = edge => {
    const slug = slugify(edge.node.title, { lower: true });
    createPage({
      path: `/menu/${slug}`,
      component: menuTemplate,
      context: {
        selectedMenuTab: edge.node.title,
      },
    });
    if (slug === 'to-share') {
      createPage({
        path: `/menu/`,
        component: menuTemplate,
        context: {
          selectedMenuTab: edge.node.title,
        },
      });
    }
  };

  return menuQuery.then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // create each menu page i.e. /menu/to-share
    result.data.allMenuJson.edges.forEach(menuEdgeToPage);

    // we will want to create a root menu route with this method i.e. /menu
    // however we can't do this until we remove the old /pages/menu.js file
  });
};
