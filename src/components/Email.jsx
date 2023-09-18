import React, { useState } from "react";
// import { SMTPClient } from "emailjs";
import styled from "styled-components";
import { device } from "../assets/breakpoints";

export default function Email() {
  //   const client = new SMTPClient({
  //     user: "user",
  //     password: "password",
  //     host: "smtp.your-email.com",
  //     ssl: true,
  //   });
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
    //   .then((result) => {
    //     console.log("Email sent successfully:", result.text);
    //     // Optionally, you can reset the form or show a success message here
    //   })
    //   .catch((error) => {
    //     console.error("Email sending failed:", error);
    //     // Handle error and show a failure message
    //   });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="subject"
          placeholder="Enter the subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
        />

        <Button type="submit">Send Email</Button>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  @media ${device.tablet} {
    padding-left: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 14px;
  border: 1px solid #ffffff61;
  margin-bottom: 12px;
  padding: 12px 16px;
  color: white;
  background-color: transparent;
  &::placeholder {
    color: white;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #ffffff61;
  font-size: 14px;
  margin-bottom: 12px;
  padding: 8px 16px;
  color: white;
  background-color: transparent;
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  background-color: var(--primary);
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: none;
  padding: 12px;
  cursor: pointer;
  @media ${device.tablet} {
    max-width: 150px;
  }
`;
