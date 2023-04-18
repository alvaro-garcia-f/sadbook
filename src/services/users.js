import api from "./config"

async function findUserByUserName(query) {
  const user = await api.get(`/users?username=${query}`)
  return user.data
}

export {
  findUserByUserName
}