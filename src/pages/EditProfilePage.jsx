import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function EditProfilePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const [profileType, setProfileType] = useState("");
  const [comments, setComments] = useState("");
  const [establishments, setEstablishments] = useState("");

  const { userId } = useParams();
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    const getToken = localStorage.getItem("authToken");
    uploadData.append("imageUrl", e.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setImageUrl(response.data.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const getProfile = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setImageUrl(response.data.imageUrl);
      setProfileType(response.data.profileType);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setAboutMe(response.data.aboutMe);
      setComments(response.data.comments);
      setEstablishments(response.data.establishments);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

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
  const handleAboutMe = (e) => setAboutMe(e.target.value);
  const handleComments = (e) => setComments(e.target.value);
  const handleEstablishments = (e) => setEstablishments(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username,
      imageUrl,
      email,
      aboutMe,
      comments,
      establishments,
      profileType,
    };

    const getToken = localStorage.getItem("authToken");
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/profile/${userId}`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then(() => {
        setImageUrl("");
        setProfileType("");
        setUsername("");
        setEmail("");
        setAboutMe("");
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
        <Label htmlFor="imageUrl">Image</Label>
        <Input type="file" name="imageUrl" onChange={handleFileUpload} />
      </FormGroup>

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
        <Label htmlFor="aboutMe">About Me</Label>
        <Input
          type="textarea"
          name="aboutMe"
          cols="30"
          rows="10"
          value={aboutMe}
          onChange={handleAboutMe}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Button className="myButtons" block type="submit">
          Submit changes
        </Button>
      </FormGroup>

      <FormGroup>
        <Button block onClick={deleteProfile} className="myButtons">
          Delete profile
        </Button>
      </FormGroup>
    </Form>
  );
}

export default EditProfilePage;
