import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
function Student(){
    const {id} = useParams()
    const [data , setData] = useState([]) 
    const navigate = useNavigate()
     
    const fetchData = async()=>{
        try{
    const response = await axios.get("http://localhost:3000/users")
    console.log(response.data)
    setData(response.data)
    
        }
        catch(err){
          console.log(err.message) 
    
        }
      }
    const handleDelete=(id)=>{
        axios.delete("http://localhost:3000/users/"+id)
        .then((res)=>{
            alert("delete Successfully")
            fetchData()
        })
    }
  
    
    useEffect(()=>{
       fetchData()    
},[])


    return(
        <div className="row">
        
        <div className="col-md-12 p-5 pt-2 ">
        <div className="d-flex justify-content-between"><h3>Student data</h3>
        <button className="btn btn-primary" onClick={()=>navigate(`/addData/add`)}>Add Data</button></div>

            <table className="table table-striped p-4">
                <tbody>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>

                    {
                        data.length!==0 &&
                        data.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{item.id}</td>

                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td><button className="btn btn-primary me-3" onClick={()=>navigate(`/addData/${item.id}`)}>Update</button >                                    <button className="btn btn-danger" onClick={(e)=>handleDelete(item.id)}> Delete</button></td>

                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
      
      
    )
};

export default  Student;