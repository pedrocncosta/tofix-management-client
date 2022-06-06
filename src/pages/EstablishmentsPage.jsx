import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddCommentPage from "./AddCommentPage";

function EstablishmentsPage() {
  const [establishments, setEstablishments] = useState([]);

  const getAllEstablishments = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/categories/type`
      );
      setEstablishments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEstablishments();
  }, []);

  return (
    <div>
      {establishments.map((establish) => {
        return (
          <div key={establish._id}>
            <Link to={`/establishment/${establish._id}`}>
              <h4>{establish.companyName}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default EstablishmentsPage;