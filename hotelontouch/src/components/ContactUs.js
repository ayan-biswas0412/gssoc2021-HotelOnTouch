import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => setValues({ ...values, [e.target.name]: e.target.value }),
  ];
};

const ContactUs = () => {
  const [values, handleChange] = useForm({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Form.Group controlId='formGroupName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name='name'
          type='string'
          placeholder='Name'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId='formGroupEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId='formGroupMessage'>
        <Form.Label>Message</Form.Label>
        <Form.Control
          name='message'
          type='string'
          as='textarea'
          placeholder='Message'
          onChange={handleChange}
        />
      </Form.Group>
      <input
        type='submit'
        style={{
          alignSelf: 'center',
          width: '24em',
          border: '2px solid #007bff',
          borderRadius: '4px',
          padding: '4px',
          backgroundColor: 'white',
        }}
      />
    </Form>
  );
};

export default ContactUs;
