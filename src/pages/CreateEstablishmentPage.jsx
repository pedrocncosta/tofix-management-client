import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function CreateEstablishmentPage() {
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [establishmentOwner, setEstablishmentOwner] = useState("");

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    const getToken = localStorage.getItem("authToken");
    uploadData.append("imageUrl", e.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setImageUrl(response.data.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleCompanyName = (e) => setCompanyName(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleComments = (e) => setComments(e.target.value);
  const handleEstablishmentOwner = (e) => setEstablishmentOwner(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      companyName,
      location,
      imageUrl,
      phoneNumber,
      email,
      comments,
      establishmentOwner,
    };

    const getToken = localStorage.getItem("authToken");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/categories/establishment`,
        body,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      )
      .then(() => {
        setCompanyName("");
        setLocation("");
        setImageUrl("");
        setPhoneNumber(0);
        setEmail("");
        setComments("");
        setEstablishmentOwner("");
        navigate("/categories/type");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h1>Regist your Establishment</h1>

      <FormGroup>
        <Label htmlFor="imageUrl">Image</Label>
        <Input type="file" name="imageUrl" onChange={handleFileUpload} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor={companyName}>Establishment Name: </Label>
        <Input
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleCompanyName}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor={location}>Location: </Label>
        <Input
          type="text"
          name="location"
          value={location}
          onChange={handleLocation}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor={phoneNumber}>Phone Number: </Label>
        <Input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor={email}>Email: </Label>
        <Input type="text" name="email" value={email} onChange={handleEmail} />
      </FormGroup>

      {/*  <FormGroup>
        <Label htmlFor={comments}>Comments: </Label>
        <Input
          type="textarea"
          name="comments"
          value={comments}
          onChange={handleComments}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor={establishmentOwner}>Owner: </Label>
        <Input
          type="text"
          name="establishmentOwner"
          value={establishmentOwner}
          onChange={handleEstablishmentOwner}
        />
      </FormGroup> */}

      <FormGroup>
        <Button block type="submit">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
}

export default CreateEstablishmentPage;
