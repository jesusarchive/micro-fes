import React, { useState } from "react";

const GndBlogPost = ({ post }) => {
  const { id, title, body, tags, reactions, userId } = post;
  const [liked, setLiked] = useState(false);

  return (
    <div className="h-2/6 border bg-white p-2">
      {/* HEADER */}
      <div className="h-10 w-full inline-flex items-center p-2">
        {/* ID */}
        <span className="text-sm text-red-400 rounded">{`ID ${id}`}</span>
        {/* TITLE */}
        <a className="text-green-400 text-lg text-bold p-2 hover:text-black cursor-pointer">
          {title}
        </a>
      </div>
      {/* BODY */}
      <p className="text-sm mt-4 p-5">{body}</p>
      {/* FOOTER */}
      <div className="h-10 w-full inline-flex items-center p-2 justify-between">
        {/* TAGS */}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="w-2/6 flex p-2 items-center mt-3">
            {tags.map((tag, i) => (
              <a
                key={`link-${tag}-${i}`}
                className="text-sm text-blue-900 capitalize hover:text-pink-300 p-2"
                href="#"
              >
                {tag}
              </a>
            ))}
          </div>
        )}
        {/* AUTHOR */}
        <span className="text-yellow-200 text-sm hover:text-red-900 cursor-pointer">
          {`USER ${String(userId).padStart(4, "0")}`}
        </span>
        {/* LIKES */}
        <span
          className="text-sm hover:text-red-900 cursor-pointer"
          onClick={() => setLiked(true)}
        >
          {`❤️ ${liked ? reactions + 1 : reactions}`}
        </span>
      </div>
    </div>
  );
};

export default GndBlogPost;
