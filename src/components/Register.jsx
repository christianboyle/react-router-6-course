import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    city: '',
    phone: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <div className='m-4'>
      <h1>Registration Form</h1>
      <Form className='register-form'>
        <Form.Group controlId='username' className='mb-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            name='username'
            value={state.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId='email' className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            value={state.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId='city' className='mb-3'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            name='city'
            value={state.city}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId='phone' className='mb-3'>
          <Form.Label>phone</Form.Label>
          <Form.Control
            type='tel'
            placeholder='Enter phone'
            name='phone'
            value={state.phone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Link className='btn btn-primary' to='/details' state={state}>
          Register
        </Link>
      </Form>
    </div>
  )
}

export default Register
