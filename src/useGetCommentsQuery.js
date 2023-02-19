import { useEffect, useState } from "react";

const localCache = {};

export function useGetCommentsQuery(postId, options) {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (options.ignore) return;

    if (!postId) {
      setComments([]);
    } else if (localCache[postId]) {
      setComments(localCache[postId]);
    } else {
      getcomments();
    }

    async function getcomments() {
      setComments([]);
      setStatus("loading");
      const respond = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await respond.json();
      localCache[postId] = data;
      setComments(data);
      setStatus("loaded");
    }
  }, [postId]);

  return [comments, status];
}
