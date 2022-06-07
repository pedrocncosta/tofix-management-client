import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

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
    <div>
      {establishment && (
        <>
          <h3>{establishment.companyName}</h3>
          <p>Location: {establishment.location}</p>
          <p>
            Contacts: {establishment.phoneNumber} {establishment.email}
          </p>
          <p>Owner: {establishment.establishmentOwner.username}</p>
        </>
      )}

      {establishment &&
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
      <button onClick={deleteEstablishment}>Delete Establishment</button>
      <Link to={`/establishment/addcomment/${postId}`}>Add a Comment</Link>
    </div>
  );
}

export default EstablishmentDetailsPage;
