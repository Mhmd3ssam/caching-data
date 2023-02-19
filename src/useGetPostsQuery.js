import { useEffect, useState } from "react";

export function useGetPostsQuery() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("unloaded");
  const [localCache, setLocalCache] = useState({
    fetched: false,
    data: [],
  });

  useEffect(() => {
    if (localCache.fetched) {
      setPosts(localCache.data);
    } else {
      getPosts();
    }

    async function getPosts() {
      setPosts([]);
      setStatus("loading");
      const respond = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await respond.json();
      setLocalCache({ data: data, fetched: true });

      setPosts(data);
      setStatus("loaded");
    }
  }, []);

  return [posts, status];
}
