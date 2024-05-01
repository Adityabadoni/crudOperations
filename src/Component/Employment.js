import React, { useState } from "react";
function Employee()
{
    var [n,setN]=useState()
var [id,setId]=useState()
var [sal,setSal]=useState()
var [da,setDa]=useState()
var [hra,setHra]=useState()
var [pf,setPf]=useState()
var [gsal,setGsal]=useState()
var [it,setIt]=useState()
var [nsal,setNsal]=useState()

    function Salary()
{
    setDa(parseInt(sal)+40/100)
    setHra (parseInt(sal)*8/100)
    setPf (parseInt(sal)*4/100)
    setGsal (parseInt(sal)+da+hra-pf)
    setIt (parseInt(gsal)*4/100)
    setNsal (parseInt(gsal)-it)
}

    return(
        <div className="row">
        <div className="col-md-2"></div>
        <div className='col-md-3'>
            <br></br><br></br>
            <h3>Employement Detail</h3>
           <br/> Enter ID
            <input type="text" className="form-control" onInput={(e)=>setId(e.target.value)}/><br/>
           Enter Name
            <input type="text" className="form-control" onInput={(e)=>setN(e.target.value)} /><br/>
            Enter Salary
            <input type="text" className="form-control" onInput={(e)=>setSal(e.target.value)}/><br/>
            <input type="button" className="btn btn-success" value="Detail"onClick={()=>Salary()} /><br/>
            
    
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4">
            
            <br/><br/>
            <h3>Salary Detail</h3>
            <br></br>
          <table className="table table-bordered table-striped table-hover table-blue">
<tbody>
            <tr><td>ID</td><td>{id}</td></tr>
            <tr><td>Name</td><td>{n}</td></tr>
            <tr><td>Salary</td><td>{sal}</td></tr>
            <tr><td>Da</td><td>{da}</td></tr>
            <tr><td>HRA</td><td>{hra}</td></tr>
            <tr><td>PF</td><td>{pf}</td></tr>
            <tr><td>GROSS SALARY</td><td>{gsal}</td></tr>
            <tr><td>INCOME TAX</td><td>{it}</td></tr>
            <tr><td>N Salary</td><td>{nsal}</td></tr>
            </tbody>  
          </table>


            
        </div>
        </div>
      
        
    )
};
export default  Employee;