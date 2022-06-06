import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function CreateEstablishmentPage() {
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [establishmentOwner, setEstablishmentOwner] = useState("");

  const navigate = useNavigate();

  const handleCompanyName = (e) => setCompanyName(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleProfileImage = (e) => setProfileImage(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleComments = (e) => setComments(e.target.value);
  const handleEstablishmentOwner = (e) => setEstablishmentOwner(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      companyName,
      location,
      profileImage,
      phoneNumber,
      email,
      comments,
      establishmentOwner,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/categories/type`, body)

      .then(() => {
        setCompanyName("");
        setLocation("");
        setProfileImage("");
        setPhoneNumber(0);
        setEmail("");
        setComments("");
        setEstablishmentOwner("");
        navigate("/categories/type");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Regist your Establishment</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor={companyName}>Establishment Name: </label>
        <input
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleCompanyName}
        />

        <label htmlFor={location}>Location: </label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleLocation}
        />

        <label htmlFor={phoneNumber}>Phone Number: </label>
        <input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />

        <label htmlFor={email}>Email: </label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label htmlFor={comments}>Comments: </label>
        <input
          type="text"
          name="comments"
          value={comments}
          onChange={handleComments}
        />

        <label htmlFor={establishmentOwner}>Owner: </label>
        <input
          type="text"
          name="establishmentOwner"
          value={establishmentOwner}
          onChange={handleEstablishmentOwner}
        />
      </form>
    </div>
  );
}

export default CreateEstablishmentPage;
