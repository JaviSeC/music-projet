import UsersService from "../service/UsersService";

export const Usershandler ={

  addUser(newUser){
      let users = {
          "firstName": newUser.firstName,  
          "lastName": newUser.lastName,
          "userName": newUser.userName,
          "email": newUser.email,
          "password": newUser.password
      }
   return UsersService.submitUser(users);   
  }
}
export default Usershandler