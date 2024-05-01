import React, { useEffect } from "react";
import axios, { Axios } from "axios";
function Home(){

const fetchData =async()=>{
    const data = await axios.get("http://192.168.1.52:8000/api/user/")
    console.log(data)

}
useEffect(()=>{
    fetchData()

},[])

    return(
        <center><h1>welcome to home Page</h1></center>
    )
};
export default Home;