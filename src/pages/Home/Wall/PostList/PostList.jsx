import React from 'react'
import { useState, useEffect } from 'react'
import './PostList.css'

import { getAllPhotos } from '../../../../services/photoService'
import PhotoCard from '../../../../components/PhotoCard/PhotoCard'

function PostList() {

  const [photos, setPhotos] = useState([])
  
  useEffect(() => {
    getPhotos()
  },[])

  const getPhotos = async () => {
    const result = await getAllPhotos()
    setPhotos(result)
  }

  const displayPhotos = () => {
    return photos.map(photo => {
      // return <PhotoCard key={photo.id} info={photo} />
      return <div>{photo}</div>
    })
  }

  return (
    <div className='post-list'>
      <h2>PostList</h2>
      { displayPhotos() }
    </div>
  )
}

export default PostList
