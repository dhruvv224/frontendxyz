import React from 'react'
import { createContext,useState,useContext } from 'react'
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentusername, setcurrentUsername] = useState('');
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const[useremail,setUserEmail]=useState('')
  const[profileimage,setProfileimage]=useState('')
  const[userprofile,setUserprofile]=useState([])
  const [selectedImage, setSelectedImage] = useState(null);
  const[empmail,setEmpmail]=useState([])
  const[name,setName]=useState('')



  return (
      <AuthContext.Provider value={{selectedImage,setSelectedImage,userprofile,setUserprofile, currentusername, setcurrentUsername ,isAuthenticated,setIsAuthenticated,useremail,setUserEmail,profileimage,setProfileimage,setEmpmail,empmail,name,setName}}>
          {children}
      </AuthContext.Provider>
  );
}

export const useAuth=()=>useContext(AuthContext)
