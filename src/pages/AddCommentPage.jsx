import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Label, Input, FormGroup } from "reactstrap";

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
    <Form className="EditProjectPage login-form" onSubmit={handleSubmit}>
      <h1>Give a comment of the service</h1>

      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" name="name" value={name} onChange={handleName} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="comments">Comment:</Label>
        <Input
          type="textarea"
          name="description"
          cols="30"
          rows="10"
          value={comments}
          onChange={handleComments}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Button type="submit" className="myButtons">
          Add Comment
        </Button>
      </FormGroup>
    </Form>
  );
}

export default AddCommentPage;
