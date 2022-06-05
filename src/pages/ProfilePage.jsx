import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
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
    <div className="container">
      {user && (
        <Card style={{ width: "93vw" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2020-02-17_Encontro_com_T%C3%A9cnico_do_Flamengo%2C_Jorge_Jesus_%28cropped%29.jpg/640px-2020-02-17_Encontro_com_T%C3%A9cnico_do_Flamengo%2C_Jorge_Jesus_%28cropped%29.jpg"
          />
          <Card.Body>
            <Card.Title>
              <h1>Welcome {user.username} </h1>
            </Card.Title>
            <Card.Text>
              <b>Username: </b> {user.username}
            </Card.Text>
            <Card.Text>
              <b>Email:</b> {user.email}
            </Card.Text>
            <Card.Text>
              <b> Establishment: </b>
              {user.establishments[0].companyName}
            </Card.Text>
            <Card.Text>
              <b> Comment: </b>
              {user.establishments[0].comments[0].comments}
            </Card.Text>
            <Button size="lg" variant="warning">
              Edit
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default ProfilePage;
