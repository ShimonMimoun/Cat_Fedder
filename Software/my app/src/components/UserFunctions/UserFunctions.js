import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      Firstname: newUser.Firstname,
      Lastname: newUser.Lastname,
      pseudo: newUser.pseudo,
      mail: newUser.mail,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
   
    })
}

export const login = user => {
  return axios
    .post('users/signin', {
      mail: user.mail,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}