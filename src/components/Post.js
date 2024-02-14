import { useContext } from "react";

import { AiFillDelete } from "react-icons/ai"
import { PostList } from '../store/Post_store.js';
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card Post-card" style={{ width: "40rem", margin: "10px 40px" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
              <AiFillDelete />
            </span>
          </h5>
          <p className="card-text ">{post.body}</p>
          {post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary tags">{tag}</span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            the post reacted by {post.reactions} people
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;