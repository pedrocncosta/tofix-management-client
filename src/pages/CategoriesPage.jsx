import React from "react";
import { Link } from "react-router-dom";

import homeLogo from "../assets/casa.png";
import carLogo from "../assets/carro.png";
import techLogo from "../assets/e-mail.png";
import {  Image } from "react-bootstrap";
/* import Image from "react-bootstrap/Image";
 */
function CategoriesPage() {
  return (
    <div className=" categoriesMain">
      <Link to={"/home"}>
        <Image className="container imgSize" src={homeLogo} alt="homeLogo" />
      </Link>

      <Link to={"/auto"}>
        <Image className="container imgSize" src={carLogo} alt="carLogo" />
      </Link>

      <Link to={"/tech"}>
        <Image className="container imgSize" src={techLogo} alt="techLogo" />
      </Link>
    </div>
  );
}

export default CategoriesPage;
