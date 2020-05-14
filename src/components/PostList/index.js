import React from 'react';
import { Link } from 'gatsby';
import styles from './postlist.module.css';
import Img from 'gatsby-image';

const PostList = ({ post, excerpt }) => {
  let featuredImg = post.featuredImage.childImageSharp.fluid;

  return (
    <div className={styles.post_layout}>
      <Link className={styles.link} to={`${post.path}`}>
        <div className={styles.post_container}>
          <Img className={styles.feature_image} fluid={featuredImg} />
          <div className={styles.post_text_container}>
            <h3>{post.title}</h3>
            <small>
              {post.date} by {post.author}
            </small>
            <p> {excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostList;
