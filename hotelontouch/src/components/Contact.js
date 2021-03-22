import React from "react";
import { Form, Button } from "react-bootstrap";
import image from "../assets/contact.svg";
import styled from "styled-components";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["message"] = "";
      this.setState({ input: input });

      alert("Demo Form is submited");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["message"]) {
      isValid = false;
      errors["message"] = "Please enter your message.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return (
      <Wrapper>
        <img src={image} alt="contact"/>
        <Title>Contact Us</Title>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupName">
            <Form.Control
              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
            <div className="text-danger">{this.state.errors.name}</div>
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="email"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <div className="text-danger">{this.state.errors.email}</div>
          </Form.Group>
          <Form.Group controlId="formGroupMessage">
            <Form.Control
              style={{ height: "80px" }}
              name="message"
              value={this.state.input.message}
              onChange={this.handleChange}
              placeholder="Message..."
            />
            <div className="text-danger">{this.state.errors.message}</div>
          </Form.Group>
          <Button type="Submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

export default Contact;

const Title = styled.h2`
    clear: #535274;
    letter-spacing: 5px;
    margin-bottom: 25px;
    text-align: center;
    color: #0069D9;
`;

const Wrapper = styled.div`
    width: 350px;
    background: #c9cfdf;
    padding: 50px;
    margin: 60px auto;
    border-radius: 10px;
    position: relative;
`;