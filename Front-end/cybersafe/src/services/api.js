import axios from 'axios'

export const getAllUser = ()=>{
   const response = axios.get('http://localhost:3000/api/alunos/find')

    return response
}   


export const createUser = (data)=>{
   const response = axios.post('http://localhost:3000/api/alunos/find',data)
//    {
//     "name": "Teste 368",
//     "matricula": "1234567",
//     "media": 5.4,
//     "frequencia": "35%",
//     "disciplinas": 
//         {
//             "nome": "disc",
//             "media": 5.6,
//             "frequencia": "50%"
//         }
// }

    return response
}   

export const enviarMsg = (data,id)=>{
    const response = axios.post(`http://localhost:3000/api/mensagens/${id}`, data)

    // {
    //     "titulo": "Nova mensagem",
    //     "descricao": "nova descricao"
    // }

    return response;
}

export const findMsg = (id)=>{
    const response = axios.get(`http://localhost:3000/api/mensagens/${id}`)

    return response
}

export const findAllMsg = ()=>{
    const response = axios.get('http://localhost:3000/api/mensagens')

    return response;
}