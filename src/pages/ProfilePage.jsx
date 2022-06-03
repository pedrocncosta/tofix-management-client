import React, { useState, useEffect } from "react";

import axios from "axios";

function ProfilePage() {
  const [profileType, setProfileType] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comments, setComments] = useState([]);
  const [establishments, setEstablishments] = useState([]);

  const getProfile = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users `,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setUsername(response.data);
      setProfileType(response.data);
      setEmail(response.data);
      setPassword(response.data);
      setComments(response.data);
      setEstablishments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1> Welcome {username}</h1>
      <p>{profileType}</p>
      <p>{email}</p>
      <p>{password}</p>
      {comments.map((comment) => {
        return <p>{comment._id}</p>;
      })}
      {establishments.map((establishment) => {
        return <p>{establishment._id}</p>;
      })}
    </div>
  );
}

export default ProfilePage;
