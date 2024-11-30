import axios from "axios";

const FindTeams = async (id)=>{
    try{
        const response = await axios.get(`http://185.137.92.83:8081/api/team/find/teams-by/${id}`)
        return response; 
    }catch(error){
        console.log("não foi realizada a busca da turma!");
        return error;
    }
}

export default FindTeams