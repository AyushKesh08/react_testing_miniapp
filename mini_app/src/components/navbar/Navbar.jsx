import './Navbar.css'

function Navbar({ setPage }){
    return (
           <nav>

            <div>
                <h1>Welcome Page</h1>
            </div>

            <div className="navbar" >
                <button onClick={()=> setPage("register") } >Register</button>
                <button onClick={()=> setPage("all_user") } >All Users</button>
            </div>
           </nav>
    )
}

export default Navbar;