import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import PostList from '../components/PostList';
import styles from './styles/blog.module.css';
import { AiFillStar } from 'react-icons/ai';

const Blog = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout title="Blog" description="All the posts">
      <div className={styles.blog_layout}>
        <div className={styles.blog_post_column}>
          <h2>Latest Posts:</h2>
          {edges
            ? edges.map(edge => (
                <PostList
                  key={edge.node.id}
                  excerpt={edge.node.excerpt}
                  post={edge.node.frontmatter}
                />
              ))
            : null}
        </div>
        <div className={styles.top_posts}>
          <h3>Top Posts</h3>

          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
          <div className={styles.icon}>
            <AiFillStar />
          </div>
          <p>
            Feedspot has recognized Concord Software and Executive Consulting, Inc. as one of the
            Top 10 React Blogs on the web (Nov. 5, 2019).
          </p>
          <p>
            "The Best React Blogs were chosen from thousands of React blogs in our index using
            search and social metrics. We’ve carefully selected this website because they are
            actively working to educate, inspire, and empower their readers with frequent updates
            and high-quality information."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
            heading
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
