import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postSlice";

export const AddPostForm = () => {
  const [inputs, setInputs] = useState({
    title: '',
    content: ''
  });

  const dispatch = useDispatch();

  const changeHandler = e => setInputs(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));

  const onSavePostClicked = () => {
    if (inputs.title && inputs.content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title: inputs.title,
          content: inputs.content
        })
      );

      setInputs({
        title: '',
        content: ''
      });
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action="">
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={inputs.title}
          onChange={changeHandler}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          value={inputs.content}
          onChange={changeHandler}
        />
        <button type="button" onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  )
}