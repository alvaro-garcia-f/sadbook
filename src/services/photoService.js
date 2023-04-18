import api from "./config"

const getAllPhotos = async () => {
  // const { data } = await api.get('/photos')
  const data = ['fleje', 'de', 'fotos']
  return data
}

export {
  getAllPhotos
}