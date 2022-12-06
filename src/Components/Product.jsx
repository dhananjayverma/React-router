import React from 'react'
import { useParams } from 'react-router-dom'
export default function Product() {
    const {id}=useParams()
    // console.log(values);
  return (
    <div>
      <h1>product:{id}</h1>
      <p>new page</p>
    </div>
  )
}
