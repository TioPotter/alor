import React from 'react'
import Container from '../components/Container'
import LoginForm from './LoginForm'
import FormWrap from '../components/FormWrap'

const page = () => {
  return (
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
  )
}

export default page
