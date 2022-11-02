import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <Link to={`/post/${post._id}`} className="link">
    <div className="card">
      <div className="leftpane">
        {post.photo && <img className="cardImage" src={PF + post.photo} alt="" />}
      </div>
      <div className="rightPane">
          <h2 className="cardTitle">{post.title}</h2>
          <div className="cardDetails">
            <h3 className="cardAuthor">{post.username}</h3>
            <h4 className="cardDate">{new Date(post.createdAt).toDateString()}</h4>
          </div>
      </div>
    </div>
    </Link>
  );
}