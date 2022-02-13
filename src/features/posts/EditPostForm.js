import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { postUpdated } from "./postsSlice.js";

export const EditPostForm = () => {
  const { postId } = useParams();

  const post = useSelector(state => state.posts.find(post => post.id === postId));

  const [inputs, setInputs] = useState({title: post.title, content: post.content});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputsChanged = e => setInputs(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));

  const onSavePostClicked = () => {
    if (inputs.title && inputs.content) {
      dispatch(postUpdated({ id: postId, title: inputs.title, content: inputs.content}));
      navigate(`/posts/${postId}`);
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="What's on your mind?"
          value={inputs.title}
          onChange={onInputsChanged}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          value={inputs.content}
          onChange={onInputsChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  )
};