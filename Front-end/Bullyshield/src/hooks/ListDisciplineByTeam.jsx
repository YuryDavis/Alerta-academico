import axios from "axios";

const ListDisciplineByTeam = async(id) =>{
    try {
        const response = await axios.get(`http://185.137.92.83:8081/api/discipline/list/disciplines-by-/${id}`)
        return response;
    } catch (error) {
        console.log("Não foi realizado a busca do historico do aluno.");
        return error;
    }
}

export default ListDisciplineByTeam;