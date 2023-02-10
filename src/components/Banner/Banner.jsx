import { isValidElement, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to My Portfolio.</span>
                  <h1>
                    {"Hi I'm Farid - "}
                    <span className="wrap" id="text">
                      <Typewriter
                        options={{
                          strings: ["Web Developer", "Video Editor"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </h1>
                  <p>
                    Hi, my name is Farid. I'm a software engineer. This is my
                    first portolfio project, hope you'll enjoy it.
                  </p>
                  <a
                    href="linkedin.com/in/farid-gulmammadov-9672021b8"
                    target="_blank"
                    className="lets-connect-link"
                  >
                    <button onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/in/farid-gulmammadov-9672021b8/";
                    }}>
                      lets connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
