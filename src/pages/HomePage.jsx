import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.build-review.com%2F5-common-repairs-tenants-are-responsible-for%2F&psig=AOvVaw3-BqCPrRdL92z5IqTfwbd_&ust=1654272656612000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJiakIWUj_gCFQAAAAAdAAAAABAD"
        alt="repairsImage"
      />
      <article>
        <h1>About us</h1>
        <p>
          ToFix is a company created to simplify our lives by providing
          solutions for your everyday problems.
        </p>
        <Link to={`/login`}>
          <button>Join us</button>
        </Link>
      </article>
    </div>
  );
}

export default HomePage;
