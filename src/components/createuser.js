import React from 'react'
import { useParams } from 'react-router-dom'

const CreateUser = () => {
    const params=useParams();

    console.log('params in',params);
  return (
    <div>Create page</div>
  )
}

export default CreateUser