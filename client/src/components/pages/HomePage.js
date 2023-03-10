import React from "react";

import axios from "axios";


import {
  Buggati,
  Ferrari,
  Lamborghini,
  makes,
  listings,
} from "../../catagories";




import CarsCard from "../CarsCard";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as pics from "../../assets/index";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";
const Home = () => {

  const navigate = useNavigate()
  const [selected, setSelected] = useState("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.products);

  useEffect(() => {
    axios.get("/cars").then(({ data }) => dispatch(updateProducts(data)));
}, []);

  const Selector = listings.filter(
    (listings) => listings.make === selected
  );

  const Select = listings.filter(
    () => cars.make === selected
  );  
 

  const HandleSelect = () => {
    if (selected === "All Makes") {
    
      return (
        <select

          className="select"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          
          <option>Choose a model</option>
          {Selector.map((Selector) => {
            return (
              <option key={Selector.model} value={Selector.model}>
                {Selector.model}
              </option>
            );
          })}
        </select>
      );
    } else  {

      return (
       
        <select
          className="select"
          onChange={(e) => {
            console.log(e.target.value);
          }}
      >
          <option>Choose a model</option>
          {Selector.map((Selector) => {
            return (
              <option key={Selector.model} value={Selector.model}>
                {Selector.model}
              </option>
            );
          })}
        </select>
      );
    }
  };

  const HandleDisplay = () => {
    if (selected === "") {
      return (
        <div className="flex">
          {cars.map((cars) => (
            <CarsCard key={cars.id} {...cars} index={cars} />
          ))}
        </div>
      );
    } else if (selected === "All Makes") {
      return (
        <div className="flex">
          {cars.map((cars) => (
            <CarsCard key={cars.id} {...cars} index={cars} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex">
          {Select.map((Select) => (
            <CarsCard key={Select.make} {...Select} />
          ))}
        </div>
      );
    }
  };
  return (
<>
       
<Navbar/>      
    <>
     
 
  


      <div className="selectors">
             <select
        className="select"
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option value="All Makes">All makes</option>
        {makes.map((makes) => {
          return (
            <option key={makes.id} value={makes.make}>
              {makes.make}
            </option>
          );
        })}
      </select>   <HandleSelect />
     
      </div>
  
      <div className="DisplayWrap">
            <h2 className="pusher">{selected} For Sale</h2> 
        <HandleDisplay />
      </div>
      <div className="loadWrap">
 
      </div>
    </></>
  );
};

export default Home;
