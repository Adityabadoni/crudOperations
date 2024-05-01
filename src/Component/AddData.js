import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddData = () => {
    const { id } = useParams();
    

    const navigate = useNavigate()
    const [data , setData] = useState({
        email : "", 
        name: "",
        address : ""

    })

    const handleChange =(e)=>{
        const inputName  = e.target.name
        const inputValue = e.target.value
        setData(preData =>({
            ...preData,
            [inputName] : inputValue
        }))
        console.log(data) 

    }
    const fetchData = async () => {
        const Data = await axios.get("http://localhost:3000/users/" +  id); // Add a slash before appending the id
        const res = Data;
        console.log(res.data);
        setData(res.data);
    }
    
//  const handleSubmit =(e)=>{
//     e.preventDefault()
//     axios.post("http://localhost:3000/users",data).then((res)=>{
//         alert("Data add")
//         setData(res.data)
//     })
//  }
        
        
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id == "add") {
            axios.post("http://localhost:3000/users",data)
                .then((res) => {
                    console.log(res, "Data Saved");
                    // setData(res)
                })
                .catch((error) => {
                    console.error("Error while adding data:", error);
                });
        } else {
            axios.put(`http://localhost:3000/users/${id}`,data)
                .then((res) => {
                    console.log(res, "Data Updated");
                    // setData(res)
                })
                .catch((error) => {
                    console.error("Error while updating data:", error);
                });
        }
        navigate("/student");
    }
     
    useEffect(()=>{
if(id!=="add"){
    fetchData()

}
    },[])
    console.log(data)
    return (
        <>

            <div className="row">
                <div className=" d-flex justify-content-center p-5">
                    <form className="w-75" onSubmit={handleSubmit}>
                        <h3>Add Data</h3>
                        <div class="form-group">
                            <input type="email" className="form-control" name="email"  placeholder="Enter email" value={data.email}  onChange={handleChange}/>
                        </div><br></br>
                        <div class="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Enter Name"value={data.name} onChange={handleChange}/>
                        </div>
                        <br></br>

                        <div class="form-group">
                            <input type="text" className="form-control" name="address" placeholder="Enter address" value={data.address} onChange={handleChange}/>
                        </div>
                        <br></br>

                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>

            </div>

        </>

    )
}
export default AddData