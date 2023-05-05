import "../styles/app.scss";
import Home from "./Home";
import Admin from "./admin/Admin";
import User from "./user/User";
function App() {
    return ( 
        <div className="container">
            {window.location.pathname == "/" ? 
                <Home />
                :null
            }
            {window.location.pathname == "/admin" ? 
                <Admin />
                :null
            }
            {window.location.pathname == "/user" ? 
                <User />
                :null
            }

        </div>
    );
}

export default App;