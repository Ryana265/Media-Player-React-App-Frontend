import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { UploadVideoAPI } from '../../services/allAPI';


function Add({setUploadVideoResponce}) {
  const [show, setShow] = useState(false);
  const [uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  const handleClose = () => {setShow(false)
    setUploadVideo({
      id:"",caption:"",url:"",link:""
   })
  }
  const handleShow = () => setShow(true);
  console.log(uploadVideo)
// users dont take embbed link so

   const getYoutubeLink =(e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      let vID=value.split("v=")[1].slice(0,11)
      console.log({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
   }

   const handleAdd= async()=>{
    const{id,caption,url,link}=uploadVideo
    if(!id || !caption || !url || !link){
      alert("Please fill missing details")
    }
    else{
     const result= await UploadVideoAPI(uploadVideo)
     console.log(result)
     if(result.status>=200 && result.status<300){
      handleClose()
      alert("Video Sucessfully Uploaded")
      // after getting sucessfull response the inputs need to be cleared
      setUploadVideo({
         id:"",caption:"",url:"",link:""
      })
      setUploadVideoResponce(result.data)
     }
     else{
      console.log(result.message)
      alert("Please Provide Unique Id")
     }
    }
   }

  return (
    <div>
      <div className="d-flex align-items-center">
        <h1>Upload Videos</h1>
        <button onClick={handleShow} className='btn ms-2'><i className="fa-solid fa-arrow-up-from-bracket fa-beat mb-2"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="Title" label="Video Title">
        <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
      <br />
      <FloatingLabel
        controlId="floatingInput"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video URL">
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
