const { createFilePath } = require(`gatsby-source-filesystem`);
const { extractMetadataFromFilename } = require("./src/util");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const { categories } = node.frontmatter;
    const filePath = createFilePath({ node, getNode, basePath: `pages` });
    const { date, slug } = extractMetadataFromFilename(filePath);
    createNodeField({ node, name: `slug`, value: slug  });
    createNodeField({ node, name: `date`, value: date });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [fields___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
              date
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        date: node.fields.date
      },
    })
  })
}