import axios from "axios";
import { API, baseUrl } from "./Api";

export const userLogin =async(payload)=>{
    return await axios.post(baseUrl + API.login,payload)
}
export const getUser =async(payload)=>{
    return await axios.get(baseUrl + API.user,payload)
}
export const addUser =async(payload)=>{
    return await axios.post(baseUrl + API.adduser,payload)

}