import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";

const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Img" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form action="">
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="E-mail"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="number"
                    placeholder="Phone Number"
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    placeholder="Message"
                  ></textarea>
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
