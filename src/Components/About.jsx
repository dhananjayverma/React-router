import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate=useNavigate();
  return (
    <div>
      <h1>about</h1>
      <p>this is about page</p>
      <button onClick={()=>
      navigate("/product/freeze")
      }>Submit</button>
    </div>
  )
}
