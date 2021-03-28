import React, { Component } from "react";
// import "./BlogCard.css";
import classes from "./BlogCard.module.css";
import { dumpLogs } from "./Utils";

/* Function Based Component */
const BlogCard = props => {
  // dumpLogs(props.blogDetail);
  console.log("Blog Card Rendered");

  return (
    <div className={classes.newbBlogCard}>
      <h3>{props.blogDetail.title}</h3>
      <p>{props.blogDetail.description}</p>

      <p>
        Like Count:
        <span className={classes.likeCount}>{props.blogDetail.likeCount}</span>
      </p>
      <button onClick={props.onLikeBtnClick}>Like</button>
    </div>
  );
};

/* Class Based Component */
// class BlogCard extends Component {
//   state = {
//     likeCount: 0
//   };
//   onLikeBtnClick = () => {
//     this.setState((prevState, prevProps) => {
//       return { likeCount: prevState.likeCount + 1 };
//     });
//   };
//   render() {
//     dumpLogs(this.props.blogDetail);
//     return (
//       <div className={classes.newbBlogCard}>
//         <h3>{this.props.blogDetail.title}</h3>
//         <p>{this.props.blogDetail.description}</p>

//         <p>
//           Like Count:
//           <span className={classes.likeCount}>{this.state.likeCount}</span>
//         </p>
//         <button onClick={this.onLikeBtnClick}>Like</button>
//       </div>
//     );
//   }
// }
export default BlogCard;
