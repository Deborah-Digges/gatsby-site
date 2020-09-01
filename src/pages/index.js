import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import { TemplateWrapper } from "../layouts/index";

export default function Home({
  data, 
}) {
  const blogList = data.allMarkdownRemark.edges.map(edge => (<div>
    <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
    <h2>{edge.node.fields.date}</h2>
  </div>));
  return (<TemplateWrapper>
    {blogList}
  </TemplateWrapper>);
};

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
    edges {
      node {
        id
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
`;