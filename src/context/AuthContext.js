import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    //Login User
    const login = ({username, password}) => {
        if (username === "test" && password === "test") {
            setUser("Amir Ahmadi")
            navigate("/")
        } else {
            alert("Incorrect Username or Password")
        }
    }

    return <AuthContext.Provider value={{ user, login}}>
        {children}
    </AuthContext.Provider>

}

export default AuthContext;