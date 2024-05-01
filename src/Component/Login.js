
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Login() {


    const [user, setUser]=useState(
         {
          email:'',
         name : '',
        password :'',
        address: '',
        phone :''
        }
    );
    let name, value;
 const getUserData =(e)=>{
  name = e.target.name;
  value = e.target.value;
  setUser({...user, [name]:value});
 };

 const postUpdate = async (e) => {
  e.preventDefault();

  const { email, name, password, address, phone } = user;

  try {
    const res = await fetch("https://curd-abb56-default-rtdb  .firebaseio.com/crudoperation.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        password,
        address,
        phone
      })
    });

    if (!res.ok) {
      // console.error(`Error: ${res.status} - ${res.statusText}`);
      // // Handle the error, throw an exception, or return early
      // return;
    }

    const result = await res.json();
    alert("Data is Submitted")
    setUser({
      email: "",
      name: "",
      password: "",
      address: "",
      phone: ""
    });
    // console.log("Data submitted successfully:", result);
    // You can display a success message to the user here
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error, display an error message, etc.
  }
};

 
 
 
 
 
  
    


  return (
    <div className='container'>
        <div className=' row '>
            <div className='col-md-8 mt-5'>
            
        <Form method='POST'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={getUserData}
          autoComplete='off'
        />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter email"
          name="name"
          value={user.name}
          onChange={getUserData}
          autoComplete='off'
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name= "password" value={user.password}
          onChange={getUserData}
          /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> address</Form.Label>
        <Form.Control type="text" placeholder="Enter adsres s" name="address" value={user.address}
          onChange={getUserData}
          />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone  number" name="phone" value={user.phone}
          onChange={getUserData}
          />
        
      </Form.Group>
     


      <Button variant="primary" type="submit" onClick={postUpdate}>
        Submit
      </Button>
    </Form>
            </div>
        </div>
    </div>
  );
}

export default Login;