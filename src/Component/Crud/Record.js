import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCollectionData, getDocumentData } from "../../firebaseAuth/cloudFirestore/getData";
import { Button } from "react-bootstrap";
import { deleteDocument } from "../../firebaseAuth/cloudFirestore/deleteData";
import { toast } from 'react-toastify';

const Record =()=>{
    const [students ,setStudents] = useState()
    const navigate = useNavigate()

    const fetchData = async()=>{
       const res  =await  getCollectionData('studentRecord')
       setStudents(res)
       console.log(res)
    }
    const handleDelte = async (id) => {
        try {
            // Attempt to delete the document
            await deleteDocument('studentRecord', id);
            fetchData();
            toast.error("Delete Successfully")
            console.log("Document deleted successfully");
            // Optionally, you can fetch updated data here
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };
    
    useEffect(()=>{
        fetchData()

    },[])
    return(
        <div>
              <div className="row">
        
        <div className="col-md-12 p-5 pt-2 ">
        <div className="d-flex justify-content-between"><h3>User Record</h3>
        <button className="btn btn-primary" onClick={()=>navigate('/record/addRecord/add')}>Add Record</button></div>

            <table className="table table-bordered mt-4 ">
                <tbody>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Action</th>

                
                        {
                    
                            students?.map((item,index)=>{
                                const sno = index+1
                            
                                return(

                                    <tr key={index}>

                                        <td>{sno}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.mobile}</td>
                                        <td>
  {`${item?.address.area ? item.address.area + ', ' : ''}`}
  {`${item?.address.landmark ? item.address.landmark + ', ' : ''}`}
  {`${item?.address.houseno ? item.address.houseno + ', ' : ''}`}
  {`${item?.address.pincode ? item.address.pincode : ''}`}
</td>



                                        <td><Button className="btn btn-danger me-2" onClick={()=>handleDelte(item.id)}>Delete</Button><Button >View</Button><Button className="btn btn-success ms-2" onClick={()=>navigate(`/record/addRecord/${item.id}`)}>Update</Button></td>

                                    </tr>
                                )
                            
                            })
                            
                        }
                    
                </tbody>
            </table>
        </div>
        </div>
        </div>
    )

}
export default Record