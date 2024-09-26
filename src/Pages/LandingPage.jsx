import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigatebyurl=useNavigate()
  return (
    <div>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{fontSize:"40px"}}>Welcome to <span className='text-warning'>Media Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio eum aliquam voluptates consectetur molestias impedit repellat ab, quos velit vel, culpa nobis debitis quod sunt unde iusto illum natus!</p>
        <button onClick={()=>navigatebyurl('/home')} className='btn btn-info mt-4'>Get Started</button>
        </Col>
        <Col></Col>
        <Col lg={5}>
        <img width={400} src="https://media.tenor.com/15YUsMWt4FEAAAAj/music.gif" alt="" />
        </Col>
      </Row>
      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column ">
        <h1>Features</h1>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <Card style={{ width: '22rem' }} className='p-4 bg-warning'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/e8/f2/81/e8f28121eba19ac9b346358e4d7d66e4.gif" />
        <Card.Body>
        <Card.Title className='text-dark'>Managing Videos</Card.Title>
        <Card.Text className='text-dark'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }} className='p-4 bg-warning'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media0.giphy.com/media/ku5EcFe4PNGWA/200w.gif?cid=6c09b952pjld6lddi18tqivjawhgvxy6g5tluqgi7nsq9wqh&ep=v1_gifs_search&rid=200w.gif&ct=g" />
        <Card.Body>
        <Card.Title className='text-dark'>Managing Videos</Card.Title>
        <Card.Text className='text-dark'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card><Card style={{ width: '22rem' }} className='p-4 bg-warning'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/3_xuAnSNMg0AAAAi/little-bad-bear-dancing-listening.gif" />
        <Card.Body>
        <Card.Title className='text-dark'>Managing Videos</Card.Title>
        <Card.Text className='text-dark'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
      </div>
      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className='text-warning'> Simple Powerful and Fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odit excepturi, assumenda ducimus, vel qui provident repudiandae molestiae ipsa quasi soluta itaque, facere rem! Perferendis vero quam omnis ab animi.</h6>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odit excepturi, assumenda ducimus, vel qui provident repudiandae molestiae ipsa quasi soluta itaque, facere rem! Perferendis vero quam omnis ab animi.</h6>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odit excepturi, assumenda ducimus, vel qui provident repudiandae molestiae ipsa quasi soluta itaque, facere rem! Perferendis vero quam omnis ab animi.</h6>
        </div>
        <div className="video col-lg-5">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/CQJEPvoLCBg?si=Ln6vpVb2RFa4wS6T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage
