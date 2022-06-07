import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

import axios from "axios";
import { useParams, Link } from "react-router-dom";

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
          <Card.Img src={user.imageUrl} />
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
              {user.establishments.length
                ? user.establishments[0].companyName
                : "No company"}
            </Card.Text>
            <Card.Text>
              <b> Comment: </b>
              {user.establishments.length &&
              user.establishments[0].comments.length &&
              user.establishments[0].comments[0].comments
                ? user.establishments[0].comments[0].comments
                : "no comments"}
            </Card.Text>
            <Link
              style={{ textDecoration: "none" }}
              className="d-grid gap-2 "
              to={`/profile/edit/${userId}`}
            >
              <Button size="lg" variant="secondary">
                Edit
              </Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default ProfilePage;
