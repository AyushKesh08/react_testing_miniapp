import './App.css';
import { useState } from "react";
import Register from "./components/register/Register.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import ShowData from "./components/showdata/ShowData.jsx";

function App() {

  const [page , setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page == "register" && <Register />}
      {page == "all_user" && <ShowData />}
    </div>
  )
}

export default App;