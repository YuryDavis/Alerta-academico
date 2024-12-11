import axios from "axios"

export const enviarNai = (data)=>{
 const response = axios.post('http://localhost:3000/api/alunos/create', data)

 return response
}