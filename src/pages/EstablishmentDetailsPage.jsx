import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

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
    <div className="container">
      {establishment !== null && (
        <>
          <Card>
            <Card.Img src={establishment.imageUrl} alt="" />
            <Card.Title>{establishment.companyName.toUpperCase()}</Card.Title>
            <p>
              <b>Location:</b> {establishment.location}
            </p>
            <p>About us:</p> {establishment.aboutUs}
            <p>
              <b>Contacts:</b>
              <ul>
                <li>{establishment.phoneNumber}</li>
                <li>{establishment.email}</li>
              </ul>
            </p>
            <p>
              <b>Owner:</b> {establishment.establishmentOwner.username}
            </p>
          </Card>
        </>
      )}

      {establishment !== null &&
        establishment.comments.map((comment) => {
          return (
            <li key={comment._id}>
              <h3>{comment.name}</h3>
              <h4>Description:</h4>
              <p>{comment.comments}</p>
              <p>Author: {comment.author.username}</p>
            </li>
          );
        })}

      <Button size="lg" variant="secondary" onClick={deleteEstablishment}>
        Delete Establishment
      </Button>
      <Link to={`/establishment/addcomment/${postId}`}>Add a Comment</Link>
    </div>
  );
}

export default EstablishmentDetailsPage;
