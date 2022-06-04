import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
function HomePage() {
  return (
    <div className="mainHome">
      <img
        src="https://www.build-review.com/wp-content/webp-express/webp-images/uploads/2021/04/Home-repair-1.jpg.webp"
        alt="repairsImage"
      />
      <article>
        <h1>About us</h1>
        <p>
          ToFix is a company created to simplify our lives by providing
          solutions for your everyday problems.
        </p>
        <Link to={`/login`}>
          <Button color="warning">Join us</Button>
        </Link>
      </article>
    </div>
  );
}

export default HomePage;
