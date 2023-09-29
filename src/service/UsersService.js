import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7110/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const UsersService ={

  async submitUser(newUser){
    await apiClient.post("/UsersControllers/Post", newUser)
}
}
export default UsersService