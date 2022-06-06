import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function EstablishmentDetailsPage() {
  const [establishment, setEstablishment] = useState(null);
  const { postId } = useParams();

  const getEstablishment = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/categories/type/${postId}`
      );
      setEstablishment(response.data);
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
          <p>Owner: {establishment.establishmentOwner}</p>
        </>
      )}

      {establishment &&
        establishment.comments.map((comment) => {
          return (
            <li key={comment._id}>
              <h3>{comment.name}</h3>
              <h4>Description:</h4>
              <p>{comment.comments}</p>
            </li>
          );
        })}
    </div>
  );
}

export default EstablishmentDetailsPage;
