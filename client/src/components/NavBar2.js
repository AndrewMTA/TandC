import React from 'react'
import HandleSelect from './pages/ModelSelect'
import { useDispatch, useSelector } from "react-redux";

import { logout, resetNotifications } from "../features/userSlice";
const Navbar2 = (_id) => {

   const user = useSelector((state) => state.user);

   const dispatch = useDispatch();

   function handleLogout() {
    dispatch(logout());
}
 
  return (

    <>



    <div className='flexNav'>
    <a className='navA' href="/">     <div className="NavTitle">Track & Road</div> </a>
      <div className='optionWrap'>
      <a className='navA' href="/"><span className='NavOption'>Cars For Sale</span> </a>
    <a className='navA' href="/list">  <span className='NavOption'>List A Car</span> </a>
 
 
    {!user && (
     <a className='navA'href="/login"> <span className='NavOption'>Login</span> </a>

     )}



{user && (


  
  <>
     <a className='navA' href="/listings"><span className='NavOption'>My Listings</span> </a>
     <span onClick={handleLogout} className='NavOption'>Logout</span>
     </>
     )}


     </div>


</div>
    </>
  )
}

export default Navbar2