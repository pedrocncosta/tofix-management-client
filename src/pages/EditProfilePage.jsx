import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProfilePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      setPassword(response.data.password);
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
  const handlePassword = (e) => setPassword(e.target.value);
  const handleComments = (e) => setComments(e.target.value);
  const handleEstablishments = (e) => setEstablishments(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username,
      email,
      password,
      comments,
      establishments,
      profileType,
    };

    axios
      .put(`http://localhost:5005/api/user/${userId}`, body)
      .then(() => {
        setProfileType("");
        setComments("");
        navigate(`/user/${userId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="profileType">profileType</label>
        <input
          type="text"
          name="profileType"
          value={profileType}
          onChange={handleProfileType}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <select name="profileType" onChange={handleProfileType}>
          <option value="admin">Professional</option>
          <option value="user">User</option>
        </select>

        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          cols="30"
          rows="10"
          value={comments}
          onChange={handleComments}
        ></textarea>

        <label htmlFor="establishments">Establishments</label>
        <input
          type="text"
          name="establishments"
          value={establishments}
          onChange={handleEstablishments}
        />

        <button type="submit">Edit</button>
      </form>
      <button onClick={deleteProfile}>Delete</button>
    </div>
  );
}

export default EditProfilePage;
