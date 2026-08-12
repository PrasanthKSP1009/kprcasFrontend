import { useEffect, useState } from "react";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const UseEffectAPI = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get(POSTS_URL)
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log("Cannot able to fetch", err);
        });
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Use Effect API Example using Json Placeholder</h1>
      <h3>Titles are:</h3>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectAPI;
