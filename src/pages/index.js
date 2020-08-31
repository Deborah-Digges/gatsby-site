import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";

export default function Home({
  data, 
}) {
  console.log(data);
  const blogList = data.allMarkdownRemark.edges.map(edge => (<div>
    <Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link>
    <p>{edge.node.frontmatter.date}</p>
  </div>));
  return (<>
    {blogList}
  </>);
};

export const pageQuery = graphql`
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          slug,
          title,
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`;