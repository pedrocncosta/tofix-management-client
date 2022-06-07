import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function AddCommentPage() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");

  const { postId } = useParams();
  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleComments = (e) => setComments(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, comments };

    const getToken = localStorage.getItem("authToken");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/categories/type/${postId}/comment`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      )
      .then(() => {
        setName("");
        setComments("");
        navigate("/");
      });
  };

  return (
    <div>
      <h1>Give a comment of the service</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="comments">Comment:</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={comments}
          onChange={handleComments}
        ></textarea>

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default AddCommentPage;
