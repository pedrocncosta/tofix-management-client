import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TechPage() {
  const [establishment, setEstablishment] = useState([]);

  const { getToken } = useContext(AuthContext);

  const token = getToken();

  const getEstablishment = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/categories/type`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEstablishment(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEstablishment();
  }, []);

  return (
    <div className="container">
      <Link
        style={{ textDecoration: "none" }}
        className="d-grid gap-2 pt-2 pb-2 "
        to={"/categories/create"}
      >
        <Button size="lg" className="myButtons">
          Regist your Establishment
        </Button>
      </Link>
      <div className="listsContainer">
        {establishment.length > 0 &&
          establishment.map((el) => {
            if (el.role === "devices") {
              return (
                <div key={el._id}>
                  <Card
                    className="myCard container mt-3"
                    style={{ width: "93vw" }}
                  >
                    <Link to={`/categories/type/${el._id}`}>
                      <Card.Img src={el.imageUrl} alt="Establishment" />
                    </Link>
                    <Card.Title className="pt-2">
                      {el.companyName.toUpperCase()}
                    </Card.Title>
                    <Card.Text>{el.location}</Card.Text>
                  </Card>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default TechPage;
