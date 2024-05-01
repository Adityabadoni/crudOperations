import React, { useEffect, useState } from "react";
import { addDocument } from "../../firebaseAuth/cloudFirestore/setData";
import { useNavigate, useParams } from "react-router-dom";
import { getCollectionData } from "../../firebaseAuth/cloudFirestore/getData";
import { updateDocument } from "../../firebaseAuth/cloudFirestore/updateData";
import { toast } from 'react-toastify';

const AddRecord =()=>{
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)


    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        address: {
            area: "",
            landmark: "",
            houseno: "",
            pincode: ""
        }
    });
    
    const handleChange =(e)=>{
        const val = e.target.value
        const InputName = e.target.name
        setData(preData=>({
            ...preData,
            [InputName] : val
        }))
        console.log(data)
    }

    const addRecord=async(e)=>{
        e.preventDefault()
    if(id=="add"){
        try{
            const record = await addDocument('studentRecord' , data)
         setData(record)
         toast.success("Record Add Successfully")
         navigate('/record');
    
         }
         catch(error){
            console.log(error.message)
    
         }
    }
    else{
try{
    const update = await updateDocument('studentRecord',id, data)
    setData(update)
    navigate('/record');

}
catch(error){
    alert(error.message)
}
       
    }


    }
    const fetchData =async()=>{
       const res= await getCollectionData('studentRecord')
       const filterData = res.filter((item)=>item.id === id)
       setData(filterData[0])
       console.log(data[0]?.name)

    }
    useEffect(()=>{
        if(id!=='add'){
            fetchData()
        }
    },[])
    return(
        <div>

            
<div className="row">
                <div className=" d-flex justify-content-center p-5">
                    <form className="w-75" onSubmit={addRecord} method="post">
                        {id==="add" ? <h3>Add Record</h3> : <h3>Edit Record</h3>}
                        <div className="form-group">
                            <input type="text" className="form-control"  name="name" placeholder="Enter Name" value={data.name}  onChange={handleChange}/>
                        </div><br></br>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email"  placeholder="Enter email" value={data.email}  onChange={handleChange}/>
                        </div><br></br>
                
                        <div className="form-group">
                            <input type="number" className="form-control" name="mobile" placeholder="Enter mobile no" value={data.mobile}  onChange={handleChange}/>
                        </div><br></br>

                        <div className="row">

                        <div className="form-group col-3">
                            <input type="text" className="form-control" name="houseno" placeholder="Enter house no"   onChange={handleChange}/>
                        </div>
                        <div className="form-group col-3">
                            <input type="text" className="form-control" name="pincode" placeholder="Enter pincode"   onChange={handleChange}/>
                        </div>
                        <div className="form-group col-3">
                            <input type="text" className="form-control" name="landmark" placeholder="Enter landmark"  onChange={handleChange}/>
                        </div>
                        <div className="form-group col-3">
                            <input type="text" className="form-control" name="area" placeholder="Enter Area"   onChange={handleChange}/>
                        </div>
                        </div>
                        <br></br>

                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )

}
export default AddRecord