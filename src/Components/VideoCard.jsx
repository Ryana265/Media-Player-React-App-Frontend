import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import '../../src/App.css'
import {addVideoHistoryAPI, deleteVideoAPI} from '../../services/allAPI'


function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async() => {setShow(true)
    const {caption,link}=video
    // creating object
    let today=new Date()
    // intl.datetimeformat
    let timeStamp= new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)
    let videoHistory={caption,link,timeStamp}
    
    // make api call
    await addVideoHistoryAPI(videoHistory)
  }
  const removeVideo=async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("dragStarted video id:"+id)
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <div className="card-container">
      <Card  style={{ width: '16rem' }} draggable onDragStart={e=>dragStarted(e,video.id)}>
      <Card.Img  variant="top" src={video.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5 className='text-danger'>{video.caption}</h5>
          {insideCategory?null:
          <button className='btn' onClick={()=>removeVideo(video?.id)}><i className="fa-solid fa-trash text-danger"></i></button>

          }
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard
