import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Form.Group controlId='formGroupName' style={{ width: '400px' }}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name='name'
          type='string'
          placeholder='Name'
          ref={register({ required: true })}
        />
      </Form.Group>
      {errors.name && <span>This field is required</span>}
      <Form.Group controlId='formGroupEmail' style={{ width: '400px' }}>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder='Email'
          ref={register({ required: true })}
        />
      </Form.Group>
      {errors.email && <span>This field is required</span>}
      <Form.Group controlId='formGroupMessage' style={{ width: '400px' }}>
        <Form.Label>Message</Form.Label>
        <Form.Control
          name='message'
          type='string'
          as='textarea'
          placeholder='Message'
          style={{ height: '80px' }}
          ref={register({ required: true })}
        />
      </Form.Group>
      {errors.message && <span>This field is required</span>}
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
