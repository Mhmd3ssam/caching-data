import { useState } from "react";
import { useGetPostsQuery } from "./useGetPostsQuery";
import { useGetCommentsQuery } from "./useGetCommentsQuery";

function SearchPosts() {
  const [postId, setPostId] = useState("");
  const [posts] = useGetPostsQuery();
  const [comments] = useGetCommentsQuery(postId, { ignore: !postId });

  return (
    <div
      style={{
        width: "200px",
        margin: "auto",
        marginTop: "200px",
        height: "100vh",
      }}
    >
      <form>
        <select
          disabled={!posts.length}
          id="post"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          style={{
            height: "40px",
            borderRadius: "10px",
            borderColor: "black",
          }}
        >
          <option />
          {posts.map((post) => (
            <option key={post.id} value={post.id}>
              {post.title}
            </option>
          ))}
        </select>
      </form>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.name}</div>
      ))}
    </div>
  );
}

export default SearchPosts;
