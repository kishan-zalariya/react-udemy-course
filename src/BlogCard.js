import React from "react";
// import "./BlogCard.css";
import classes from "./BlogCard.module.css";
import { dumpLogs } from "./Utils";

const BlogCard = ({ blogDetail }) => {
  dumpLogs(blogDetail);

  return (
    <div className={classes.newbBlogCard}>
      <h3>{blogDetail.title}</h3>
      <p>{blogDetail.description}</p>
    </div>
  );
};
export default BlogCard;
