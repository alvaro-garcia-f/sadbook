const PhotoCard = ({info}) => {

  const displayPhoto = () => {
      return (
        <div className="photo">
          <h3>{info.title}</h3>
          <img src={info.url} alt={info.title} />
        </div>
      )
  }

  return (
    <>
      {displayPhoto()}
    </>
  )
}

export default PhotoCard