import React, { useEffect, useState } from "react";
import GndBlogPost from "./gnd-blog-post";

const mockPostEndpoint = "https://dummyjson.com/posts";

async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

const GndBlog = ({}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(mockPostEndpoint);
      console.log(data?.posts);
      setPosts(data?.posts);
    })();
  }, []);

  return (
    <div className="h-full w-full flex flex-col text-3xl text-black bg-white p-4 overflow-hidden">
      <h2 className="text-3xl text-black p-8 mb-5">GND BLOG</h2>
      <div className="h-full w-full flex flex-col overflow-scroll">
        {posts.map((post) => (
          <GndBlogPost post={post} />
        ))}
      </div>
    </div>
  );
};

export default GndBlog;
