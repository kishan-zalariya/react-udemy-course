import React from "react";
import "./style.css";
import BlogCard from "./BlogCard";
import { isArrayEmpty } from "./Utils";

export default function App() {
  const blogArr = [
    {
      id: 1,
      title: "Blog Title 1",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
      id: 2,
      title: "Blog Title 2",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
      id: 3,
      title: "Blog Title 3",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    }
  ];

  const blogCars = isArrayEmpty(blogArr)
    ? []
    : blogArr.map((item, pos) => {
        return <BlogCard key={pos} blogDetail={item} />;
      });

  return <div className="app">{blogCars}</div>;
}
