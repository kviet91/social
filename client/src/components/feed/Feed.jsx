import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPost] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`posts/timeline/${user._id}`);
      setPost(res.data);
    };
    fetchData();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
