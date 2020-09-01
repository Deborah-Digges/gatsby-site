import React from "react";
import { graphql } from "gatsby";
import { TemplateWrapper } from "../layouts/index";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, fields, html } = markdownRemark
  return (
    <TemplateWrapper>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{fields.date}</h2>
        <button className="btn">label</button>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </TemplateWrapper>
  )
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        date
        slug
      }
    }
  }
`;