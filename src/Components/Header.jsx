import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <Navbar className="bg-body-dark">
        <Container>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <i className="fa-solid fa-photo-film me-3 fs-4" style={{color: "#B197FC"}}></i>
            Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
