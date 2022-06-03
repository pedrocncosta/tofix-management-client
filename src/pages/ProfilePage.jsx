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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <p> Username: {user.username}</p>
          <p> Email: {user.email}</p>
          {/* {user.map(()=> {return (<p>{user.establishment}</p>)
            
          })} */}
          <p>{user.establishments[0].companyName}</p>

          <p>{user.establishments[0].comments[0].comments}</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
