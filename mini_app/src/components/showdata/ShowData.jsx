import { useState , useEffect } from "react";
import axios from "axios";
import './ShowData.css'

function ShowData(){
   
    const [users , setUsers] = useState([]);

    const API_URL = import.meta.env.VITE_API_URL;

        async function dataReq() {
            const url = `${API_URL}/users`;
            // const url = "http://localhost:8981/users";
            // const url = "http://ayushcodeweb.online:8981/users";
            // const url = "https://ayushcodeweb.online/users";

            try{
                const response = await axios.get(url);
                setUsers(response.data._embedded.userEntities);
                // console.log(response.data._embedded.userEntities)
            }catch(err){
                console.log(err);
            }
        }

    useEffect(()=>{
        dataReq();
    },[]);

    
    return (
        <div>
            <h1>User Data</h1>
        
            <hr />

            <div id="user_box">
                {
                    users.map((user,index)=>(
                        <div className="user-card" key={user.id || index}>
                            <h2>Name : {user.name}</h2>
                            <p>Email : {user.email}</p>
                            <p>College : {user.college}</p>
                            <p>Phone : {user.phone}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ShowData;