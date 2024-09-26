import React, { useEffect, useState } from 'react'
import {Button,Col,Modal, Row} from 'react-bootstrap'
import {addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI} from '../../services/allAPI'
import VideoCard from './VideoCard'
function Category({dropVideoResponSe}) {
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);
  const [allCategories,setAllCategories]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd= async()=>{
  if(categoryName){
    const result=await addCategoryAPI({categoryName,allVideos:[]})
    console.log(result);
    if(result.status>=200 && result.status<=300){
      handleClose()
      setCategoryName("")
      getCategories()
    }
    else{
      alert(result.message)
    }
    }else{
      alert("Please fill the field")
    }
  }
  useEffect(()=>{
  getCategories()
  },[dropVideoResponSe])
  const getCategories=async()=>{
    const {data}=await getCategoryAPI()
    setAllCategories(data)
    getCategories()

  }

  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }


  const dragOver=(e)=>{
    console.log("Video Card Dragging over the Category")
    e.preventDefault()
  }
  const videoDrop= async(e,categoryId)=>{
    // console.log("Videodropped inside"+categoryId)
    const videoId=e.dataTransfer.getData("videoId")
    console.log("videoId" +videoId +"videodropped inside category"+categoryId)
    const {data}=await getAVideoAPI(videoId)
    const selectedCategory=allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory)
    await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
  }

  const videodragStarted=async(e,videoId,categoryId)=>{
    let dataShare={videoId,categoryId}
    e.dataTransfer.setData("data",(JSON.stringify(dataShare)))
  }

  return (
    <>
      <div className="d-grid">
        <button className='btn btn-warning' onClick={handleShow}>Add Category</button>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered

      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input type="text" className='form-control' placeholder='Enter Category Name' onChange={e=>setCategoryName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      {
        allCategories?.length>0?allCategories.map(category=>(
        <div className="border rounded mt-3 p-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category.id)}>
        <div className="d-flex justify-content-between align-items-center">
          <h3>{category.categoryName}</h3>
          <button className='btn' onClick={()=>removeCategory(category.id)} ><i className="fa-solid fa-trash text-danger"></i></button>
        </div>
        <Row>
          {
            category?.allVideos?.length>0?category.allVideos.map(card=>(
              <Col sm={12} draggable onDragStart={e=>videodragStarted(e,card.id,category.id)}>
                <VideoCard video={card} insideCategory="true"/>
              </Col>
            )):null
          }
        </Row>
      </div>
      )):<p>Nothing to Display</p>
      }
    </>
  )
}

export default Category
