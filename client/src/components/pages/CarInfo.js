import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";

import {useParams} from 'react-router-dom'
import {
  
    listings,
  } from "../../catagories";

  
  import  {FiCamera} from "react-icons/fi";
  import  {FaBeer} from "react-icons/fa";
import Navbar from '../NavBar2';


const CarInfo = () => {
    console.log(useParams())

    useEffect(() => {
      axios.get("/cars").then(({ data }) => dispatch(updateProducts(data)));
  }, []);

  
  
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.products);

    const {carID} = useParams()
    const car = cars.find((car) => car._id === carID)

    const { pic, make, model, year, description, price, phone} = car
  return (

    <>
    <Navbar/>

<div className="DisplayWraping">
    <div className="DisplayWrap2">
<div ><h1>{year} {make} {model}</h1></div>
<div className='picFlex'>
 <img className="CardPic3"  src={pic[1].url}/>
 <div className="displayFlex">
 <div className="Wrapped">
 <div className='slider'>
 <img className="CardPic2"  src={pic[2].url}/>
 <img className="CardPic2"  src={pic[3].url}/>





 <img className="CardPic2"  src={pic[4].url}/>


 </div>

 <div className='slider2'>
 <img className="CardPic2"  src={pic[0].url}/>
 <img className="CardPic2"  src={pic[1].url}/>

 <i className='sp1' ></i>

 <span className='allMedia'>
 
    <p className='sp'>see all media <span className='c'>📷</span></p>
 <img className="CardPicM"  src={pic[0].url}/>

 </span>
 </div>
 </div>
 </div>



 </div>
 <div className='descrip'><h2>Vehicle Description</h2></div>
<p>{description}</p>
 </div>


 <div className='ContactBox'>
 <div className='priceBox'>
    <h1 className='price'>${price}</h1>
 </div>
    <form className='ContactForm'>
   <h1 className='FormTitle'>Contact Seller</h1> 
   <h2  className='Phone'> Call {phone || "(777) 777-7777"}</h2>
    <input placeholder='Name' className="contactInput"></input>
    <input placeholder='Email@email.com' className="contactInput"></input>
    <input placeholder='+1 (111) 111-1111' className="contactInput"></input>
    <textarea placeholder="Hi I'd like to inquire about the car for sale" className="contactArea"/>
    <button className='Submit'>Submit</button>
    </form>
 </div>

 </div>
    </>
  )
}

export default CarInfo