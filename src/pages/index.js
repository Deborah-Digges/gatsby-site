import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import { TemplateWrapper } from "../layouts/index";

export default function Home({
  data, 
}) {
  const blogList = data.allMarkdownRemark.edges.map(edge => (
  <div class="post">
    <h2 class="post-title">
        <a href={edge.node.fields.slug}>
          {edge.node.frontmatter.title}
        </a>
    </h2>
    <span class="post-date">{edge.node.fields.date}</span>
  </div>));

  return (<TemplateWrapper>
    <div class="posts">
      {blogList}
    </div>
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