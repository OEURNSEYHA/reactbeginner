import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DataFetching1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []);
  return (
    <>
      {loading ? "loading" : post.title}

      {error ? error : null}
    </>
  );
}

export default DataFetching1;
