import './Register.css';
import { useState } from "react";
import axios from "axios";

function Register() {
  
  const [formData , setFormData] = useState({
    name:"",
    email:"",
    password:"",
    college:"",
    phone:""
  });

  function handleChange(e) {
    const {name , value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  async function handleSubmit() {
    // const url = "http://localhost:8981/users";
    // const url = "http://ayushcodeweb.online:8981/users";
    // const url = "https://ayushcodeweb.online/users";
    const url = "https://yamraj000.shop/users";
    
    try{
      const response = await axios.post(url,formData)
      console.log(response.data);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div id="main_box">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit} >
            <label>Name </label>
            <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />

            <br /><br />
            
            <label>Email </label>
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
            
            <br /><br />

            <label>Password </label>
            <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} required />
            
            <br /><br />

            <label>College </label>
            <input type="text" name="college" placeholder="Enter Your College" value={formData.college} onChange={handleChange} required />
            
            <br /><br />

            <label>Phone </label>
            <input type="tel" name="phone" placeholder="Enter Your Phone" value={formData.phone} onChange={handleChange} required />

            <br /><br />

            <input type="submit" value="Register" id="btn" />

        </form>
    </div>
  )
}

export default Register;
