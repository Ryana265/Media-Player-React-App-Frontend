import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import {Link} from 'react-router-dom'
import { deleteVideoHistoryAPI, getVideoHistoryAPI } from '../../services/allAPI'

function WatchHistory() {
const [history,setHistory]=useState([])
  useEffect(()=>{
      getHistory()
  },[])
  const getHistory=async()=>{
      const result=await getVideoHistoryAPI()
      console.log(result)
      if(result.status==200){
        setHistory(result.data)
      }else{
        console.log("Api Failed")
        console.log(result.message)
      }
  }
  console.log(history)
  const removeHistory=async(id)=>{
    await deleteVideoHistoryAPI(id)
    getHistory()
  }
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h1 className='text-warning'>Watch-History</h1>
      <Link to={'/home'} className='btn ms-2 text-warning'>Back To Home<i className="fa-solid fa-arrow-up-from-bracket fa-beat mb-2"></i></Link>
      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          history?.length>0?history.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video.caption}</td>
          <td><a href={video.link} target='_blank'>https://www.youtube.com/watch?v=k09uvR5eUao</a></td>
          <td>{video.timeStamp}</td>
          <td><Button onClick={()=>removeHistory(video.id)} className='btn'><i className="fa-solid fa-trash"></i></Button></td>
         </tr>
          )):<p className='text-danger'>Nothing to Display</p>
        }
        </tbody>
      </table>

     
    </>
  )
}

export default WatchHistory
