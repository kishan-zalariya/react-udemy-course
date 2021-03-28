import React, { Component } from "react";
import "./style.css";
import BlogCard from "./BlogCard";
import { isArrayEmpty } from "./Utils";

// export default function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlogs: true,
      blogArr: [
        {
          id: 1,
          title: "Blog Title 1",
          description:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          likeCount: 0
        },
        {
          id: 2,
          title: "Blog Title 2",
          description:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          likeCount: 0
        },
        {
          id: 3,
          title: "Blog Title 3",
          description:
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
          likeCount: 0
        }
      ]
    };

    console.log("Inside constructor");
  }

  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs };
    });
  };
  onLikeBtnClick = pos => {
    const updatedBlogList = this.state.blogArr;
    let updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({ blogArr: updatedBlogList });
  };

  shouldComponentUpdate() {
    console.log("Inside shouldCompnentUpdate");
    return true;
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentWillUnmount() {
    console.log("component Unmounting");
  }
  componentDidUpdate() {
    console.log("Inside compnentDidUpdate");
  }

  render() {
    console.log("Render called for AppJs");
    const blogCars = isArrayEmpty(this.state.blogArr)
      ? []
      : this.state.blogArr.map((item, pos) => {
          return (
            <BlogCard
              key={pos}
              blogDetail={item}
              onLikeBtnClick={() => this.onLikeBtnClick(pos)}
            />
          );
        });

    return (
      <div className="app">
        <button onClick={this.onHideBtnClick}>
          {this.state.showBlogs ? "Hide List" : "Show List"}
        </button>
        <br />
        {this.state.showBlogs ? blogCars : null}
      </div>
    );
  }
}
export default App;
