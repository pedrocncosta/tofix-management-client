import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel, Button } from "react-bootstrap";
function HomePage() {
  return (
    <div className="mainHome container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://autogarageinc.com/wp-content/uploads/2020/03/Screenshot_3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Auto Repairs</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="homeCard myButtons">
        <Card.Header>About Us</Card.Header>
        <Card.Body>
          <Card.Title>What is toFix</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
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
