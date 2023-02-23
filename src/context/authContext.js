import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {

        setCurrentUser({ id: 1,
             name: "Ghassan El Khoury",
              profilePic: 
              "https://media.istockphoto.com/id/501387734/es/foto/amigos-bailando.jpg?s=612x612&w=0&k=20&c=BVRvjlM-A8eZtimcgugS4BlE1XqVNKHePVnqy-anGAM=" })
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])


    return (
        <AuthContext.Provider value={{ currentUser, login }}> {children} </AuthContext.Provider>
    )
}