import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel, Button } from "react-bootstrap";
function HomePage() {
  return (
    <div className="mainHome container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://autogarageinc.com/wp-content/uploads/2020/03/Screenshot_3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Auto Repairs</h3>
            <p>
              Did your car stoped at the middle of the road? No problem just
              click toFix
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tapintohope.org/wp-content/uploads/2018/06/Emergency-Home-Repair.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Home Repairs</h3>
            <p>
              Your dishwasher broke? No worries just choose one of the many
              specialized technicians on the app and wait in the confort of your
              home.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://callnerds.com/wp-content/uploads/2017/07/computer-repair.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Tech Repairs</h3>
            <p>
              At toFix we have a lot of experts that can help you with your
              devices. Hardware or software you can find a solution on the app.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="homeCard ">
        <Card.Header>
          <b>What is toFix</b>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            At toFix we are proud to make life easier for everyone.
          </Card.Text>
          <Card.Text>
            Our mission is to create solutions to your everyday problems.
          </Card.Text>
          <Card.Text>Be it Auto, House or Tech we are glad to help.</Card.Text>

          <Card.Text>
            Find more time to enjoy your life and let our app help you solve all
            the issues that might appear.
          </Card.Text>

          <Link
            style={{ textDecoration: "none" }}
            className="d-grid gap-2 "
            to={"/login"}
          >
            <Button size="lg" className="myButtons">
              Join us
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
