import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Accordion,
} from "react-bootstrap";

function EstablishmentDetailsPage() {
  const [establishment, setEstablishment] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  const getEstablishment = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/categories/type/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setEstablishment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEstablishment = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/categories/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEstablishment();
  }, []);

  return (
    <div className="container ">
      {establishment !== null && (
        <>
          <Card className="container myCard">
            <Card.Img src={establishment.imageUrl} alt="" />
            <Card.Title>{establishment.companyName.toUpperCase()}</Card.Title>
            <Card.Text>
              <b>About us:</b> {establishment.aboutUs}
            </Card.Text>
            <Card.Text>
              <b>Location:</b> {establishment.location}
            </Card.Text>
            <Card.Text>
              <b>Owner:</b> {establishment.establishmentOwner.username}
            </Card.Text>
            <ListGroup className="myCard list-group-flush">
              <b>Contacts:</b>
              <ListGroupItem className="myCard">
                {establishment.phoneNumber}
              </ListGroupItem>
              <ListGroupItem className="myCard">
                {establishment.email}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </>
      )}

      {establishment !== null &&
        establishment.comments.map((comment) => {
          return (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Comment: {comment.name}</Accordion.Header>
                <Accordion.Body className="myCard" key={comment._id}>
                  <Card.Title>Description:</Card.Title>
                  <Card.Text>{comment.comments}</Card.Text>
                  <Card.Text>
                    <b> Author:</b> {comment.author.username}
                  </Card.Text>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}

      <div className="d-grid gap-2">
        <Button
          as={Link}
          size="lg"
          className="myButtons"
          to={`/establishment/addcomment/${postId}`}
        >
          Add a Comment
        </Button>
        <Button size="lg" className="myButtons" onClick={deleteEstablishment}>
          Delete Establishment
        </Button>
      </div>
    </div>
  );
}

export default EstablishmentDetailsPage;
