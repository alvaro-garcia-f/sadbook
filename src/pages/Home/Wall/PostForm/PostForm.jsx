import React from 'react'
import Divider from '../../../../components/Divider/Divider'
import TransparentButton from '../../../../components/TransparentButton/TransparentButton'

import CameraIcon from '../../../../assets/icons/CameraIcon/CameraIcon'

import './PostForm.css'

function PostForm() {
  return (
    <div className='post-form'>
      <div>
        <input type='text' className='input-new-post' placeholder='¿En qué estás pensando?'></input>
      </div>
      <Divider />
      <div className='action'>
        <TransparentButton icon={<CameraIcon />} text="Vídeo en vivo" />
        <TransparentButton text="Foto/vídeo" />
      </div>
    </div>
  )
}

export default PostForm
