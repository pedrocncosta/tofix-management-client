import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function EstablishmentsPage() {
  const [establishments, setEstablishments] = useState([]);

  const getAllEstablishments = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/categories/type`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      console.log("hey", response.data);
      setEstablishments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEstablishments();
  }, []);

  return (
    <div className="container">
      <Link style={{ textDecoration: "none" }}
              className="d-grid gap-2 pt-2 pb-2 " to={"/categories/create"}>
        <Button size="lg" variant="secondary">
          Regist your Establishment
        </Button>
      </Link>
      {establishments.map((establish) => {
        return (
          <div key={establish._id}>
            <Card style={{ width: "93vw" }}>
              <Link to={`/categories/type/${establish._id}`}>
                <Card.Img src={establish.imageUrl} alt="establishment" />
              </Link>
              <Card.Title className="text-center">
                {establish.companyName.toUpperCase()}
              </Card.Title>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default EstablishmentsPage;
