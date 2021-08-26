import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {console.log(data)}
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
