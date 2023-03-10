    import React ,{useEffect, useState} from 'react'
    import axios from 'axios'
    import {

      useGetListingsMutation,

    } from "../../services/appApi";
    
import CarsCard2 from "../CarsCard2";
    import Navbar from "../NavBar2";
    import { useDispatch, useSelector } from "react-redux"
    import {useParams} from "react-router-dom"

   
    const MyListings = () => {
    const  listID = useParams()
      const userData = useSelector((state) => state.user);
      const cars = useSelector((state) => state.products);
      const { listUser } = cars || {};
      const getUserPosts = () => {

         if (listID === listUser) {
        axios.get(`/cars/listings/${cars?.listUser}/`).then(({ data }) => {
          console.log("post is", data);
          setPost(data);
        });

      }
      };


      const [posts, setPost] = useState([]);
   
      const [getPosts] = useGetListingsMutation();
 const dispatch = useDispatch()
        const user = useSelector((state) => state.user);

      
   
     
      
   
      return (

<>


        <div className="navv"> 


        
       
            
      
            <h1>Manage Listings</h1>
            </div>

                        {cars.map((cars) => (
            <CarsCard2 key={cars.listUser} {...cars} index={cars} />
          ))}
                     
                      </>

);
  

      
    }
    
    export default MyListings