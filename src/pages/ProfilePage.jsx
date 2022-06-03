import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);

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
      setUser(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
    {user && 
      <div>
        <h1> Welcome {user.username}</h1>
        <h1> Welcome {user.email}</h1>
      </div>
      }
     
      {/*  <p>{profileType}</p>
      <p>{email}</p>

      {comments.map((comment) => {
        return <p>{comment._id}</p>;
      })}
      {establishments.map((establishment) => {
        return <p>{establishment._id}</p>;
      })} */}
    </div>
  );
}

export default ProfilePage;
