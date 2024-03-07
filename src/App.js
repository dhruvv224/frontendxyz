// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Main1 from './components/center/Main'
import { BrowserRouter, Route, Routes, Router, Switch } from "react-router-dom";
import Home from './Pages/Home'
import Courses from './Pages/Courses';
import Jobs from './components/Joblisting/Jobs';
import { useState ,useEffect } from 'react';
import LoadingAnimation from './Loadinganimation';
import Companies from './Pages/Companies';
import Demo from './Demo';
import Jobspostings from './Employers/Jobspostings';
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import logo from './components/Navbar/Assets/logo1.png.png'
import Learning from './components/Learning/Learning';
import Explore from './components/Learning/Explore/Explore';
import About from './Pages/About';
import Popularcomp from './Pages/Popularcomp';
import Main from './Main/Main';
import Application from './components/Applicant/Application';
import Learningmain from './Learning/Learningmain';
import { Empmain } from './Employers/Empmain';
import {Employersregister} from './Employers/Employersregister'
import {Companypostings} from './Employers/Companypostings'
import Mainfeed from './Feed/Mainfeed';
import {Emplogin} from './Employers/Emplogin';
import {Employerspage} from './Employers/Employerspage'
import Feeddemo from './Feed/Feeddemo';
import Sidebar from './Feed/Sidebar';
import Profile from './Profile/Profile';
import Community from './Community/Community';
import DummyPost from './Feed/DummyPost';
import Postcreation from './Feed/Postcreation';
import { AuthProvider } from './Context/AuthContext';
import Profilesetup from './Profile/Profilesetup';
import UserProfile from './Profile/UserProfile'
import Editprofile from './Profile/Editprofile';
import SkeletonLoader from './components/SkeletonLoader';
import Community2 from './Community/Community2';
const App=()=>{
  const [isLoading, setIsLoading] = useState(false);
  const[username,setUsername]=useState('')
  const[usersObject,setUsersobject]=useState([])
  

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);

    // Simulating loading delay (replace with your actual data fetching logic)
    const timeout = setTimeout(() => {
      endLoading();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return <>
 
  <BrowserRouter>
  <AuthProvider value={'hellooooo there '}>
 
  <header className="header">
        {/* <img src={logo} alt="Logo" className="main-logo" /> */}
      </header>
  
  <Navbar/>
 
  {isLoading && <LoadingAnimation />} {/* Render loading animation conditionally */}
  <Routes>
  <Route path='/Jobs' element={<Jobs />}></Route>
  <Route path="/" element={<Main/>}></Route>
  <Route path='/Learning' element={<Learningmain/>}></Route>

  <Route path='/Companies' element={<Companies/>}></Route>
  const[usersObject,setUsersobject]=useState([])
  <Route path='/Login' element={<Login setUsersobject={setUsersobject} usersObject={usersObject}/>}></Route>
  <Route path='/Register' element={<Register setUsersobject={setUsersobject}/>}></Route>
  <Route path='/Explore' element={<Explore/>}></Route>
  <Route path='/About' element={<About/>}></Route>
  <Route path='/Popularcomp' element={<Popularcomp/>}></Route>
  <Route path='/Application' element={<Application/>}></Route>
  <Route path='/Jobspostings' element={<Jobspostings/>}></Route>
  <Route path='/empmain' element={<Empmain/>}></Route>
  <Route path='/Company-postings' element={<Companypostings/>}></Route>
  <Route path='/Feeds' element={<Mainfeed/>}></Route>
  <Route path='/Employersregister' element={<Employersregister/>}></Route>
  <Route path='/Emplogin' element={<Emplogin/>}></Route>
  <Route path='/Employerspage' element={<Employerspage/>}></Route>
  <Route path='/Feeddemo' element={<Feeddemo/>}></Route>
  <Route path='/Sidebar' element={<Sidebar/>}></Route>
  <Route path='/Profile' element={<Profile />} ></Route>
  <Route path='/Community' element={<Community/>}></Route>
  <Route path='/Dummypost' element={<DummyPost/>}></Route>
  <Route path='/Postcreation' element={<Postcreation/>}></Route>
  <Route path='/Profilesetup' element={<Profilesetup/>}></Route>
  <Route path="/profile/:username" element={<UserProfile />} />
  <Route path="/editprofile" element={<Editprofile />} />
  <Route path="/Skeletonloader" element={<SkeletonLoader />} />
  <Route path="/community2" element={<Community2 />} />












  {/* <Route path='/Demo' element={<Demo/>}></Route> */}

  
  


  </Routes>
  

  </AuthProvider>
  </BrowserRouter>
 
  <Footer/>
  </>
  
}

export default App;
