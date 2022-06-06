import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function EditProfilePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileType, setProfileType] = useState("");
  const [comments, setComments] = useState("");
  const [establishments, setEstablishments] = useState("");

  const { userId } = useParams();
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      let response = await axios.get(
        `http://localhost:5005/api/user/${userId}`
      );
      setProfileType(response.data.profileType);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setComments(response.data.comments);
      setEstablishments(response.data.establishments);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async () => {
    try {
      await axios.delete(`http://localhost:5005/api/user/${userId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleProfileType = (e) => setProfileType(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleComments = (e) => setComments(e.target.value);
  const handleEstablishments = (e) => setEstablishments(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username,
      email,
      comments,
      establishments,
      profileType,
    };

    axios
      .put(`http://localhost:5005/api/user/${userId}`, body)
      .then(() => {
        setProfileType("");
        setUsername("");
        setComments("");
        setEstablishments("");
        navigate(`/user/${userId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form className="EditProjectPage login-form" onSubmit={handleSubmit}>
      <h3>Edit Profile</h3>
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" value={email} onChange={handleEmail} />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="comments">Comments</Label>
        <Input
          type="textarea"
          name="comments"
          cols="30"
          rows="10"
          value={comments}
          onChange={handleComments}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="establishments">Establishments</Label>
        <Input
          type="text"
          name="establishments"
          value={establishments}
          onChange={handleEstablishments}
        />
      </FormGroup>

      <FormGroup>
        <Input type="select" name="profileType" onChange={handleProfileType}>
          <option value="admin">Professional</option>
          <option value="user">User</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Button block type="submit">
          Submit changes
        </Button>
      </FormGroup>

      <FormGroup>
        <Button block onClick={deleteProfile}>
          Delete profile
        </Button>
      </FormGroup>
    </Form>
  );
}

export default EditProfilePage;
