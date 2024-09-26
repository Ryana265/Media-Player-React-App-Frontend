import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'

function Home() {
  const [uploadVideoResponSe,setUploadVideoResponce]=useState({})
  const [dropVideoResponSe,setDropVideoResponce]=useState({})



  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponce={setUploadVideoResponce}/>
        </div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>Watch-History<i className="fa-brands fa-hive " style={{color: "#B197FC"}}></i></Link>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h1>All Videos</h1>
          <View uploadVideoResponSe={uploadVideoResponSe}  setDropVideoResponce={setDropVideoResponce}/>
        </div>
        <div className="all-videos col-lg-3">
        <Category dropVideoResponSe={dropVideoResponSe}/>
        </div>
      </div>
    
    </>
  )
}

export default Home
