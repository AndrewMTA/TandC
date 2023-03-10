    import React from 'react'
    import {useState} from 'react'
    import axios from 'axios'
    import {useNavigate} from 'react-router-dom'
    import { useDispatch, useSelector } from "react-redux"
    import CurrencyInput from 'react-currency-input-field';
    import Img from "../../assets/Img.png";
    import { useCreateProductMutation } from "../../services/appApi";
    import {

      makes,
      listings,
    } from "../../catagories";
    
    import {useParams} from "react-router-dom"

    const List = (_id) => {
      const [createProduct, { isError, error, isLoading, isSuccess }] = useCreateProductMutation();
      const [make, setMake] = useState("");
      const [model, setModel] = useState("");
      const [showings, setShowings] = useState(true);
      const [images, setImages] = useState([])
      const [year, setYear] = useState("");
      const [imagePreview, setImagePreview] = useState(null);
      const [price, setPrice] = useState("");
      const [description, setDescription, ] = useState("")
      const [selected, setSelected] = useState("");
        
  const  listUser  = useSelector((state) => state.user._id);
const addComas = (e) => {



  return e.replace(/\s/g, ",").match(/.{1,3}/g).join(",").substr(0,9) || "" 



}

      const onPost = (e) => {
        e.preventDefault();
        let formData = new FormData();
      
          formData.append("pic", images);
          axios.post(`/cars`, formData).then(({ data }) => {
          
               console.log(data);
          });
    
     
        }

        const Selector = listings.filter(
          (listings) => listings.maker === make
        );
      
const navigate = useNavigate() 

const HandleSelect = () => {
  if (make === "All Makes") {
  
    return (
      <select

      className="inputOnboard"
        onChange={(e) => 
          setModel(e.target.value)} value={model}
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
      <>
   <label className='label'>Model*</label>
      <select
      className="inputOnboard"
        onChange={(e) => setModel(e.target.value)} value={model}
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
      </>
    );
  }
};




function handleSubmit(e) {
  e.preventDefault();



  if (!make || !model || !description || !price ||  !images.length) {
      return alert("Please fill out all the fields");
  }

    const data = {
      make , model, description, price, images, listUser 
    }

  axios.post("/cars" , data).then((response) => {
    console.log(response);
       
            setMake("");
            setModel("");
            setImages("");
            setPrice("");
            setYear("");
            setDescription("");
              navigate("/success");
          })
      }
  
      
  const onPosttzz = (e) => {
//   e.preventDefault();
//   let formData = new FormData();
//   formData.append("user", userData?._id);
//   formData.append("description", textAreaEl?.current?.value);
//   if (postPic) {
//     formData.append("pic", postPic);
//   }
    // axios.post(`/posts`, formData).then(({ data }) => {
    //   setPostPic(null);
    //   console.log(data);
    // });
   // createPost(formData)
     // .then((res) => {
       // console.log(res);
      ///  getUserPosts();
     //   setPostPic(null);
  //    })
    //  .catch((err) => console.log(err));
  };


function showWidget() {
  const widget = window.cloudinary.createUploadWidget(
      {
          cloudName: "dojwag3u1",
          uploadPreset: "qmakq1p3",
      },
      (error, result) => {
          if (!error && result.event === "success") {
              setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
          }
      }
  );
  widget.open();
}



      const handlePostPic = (event) => {
        setImages(event.target.files[0]);
        setImagePreview(URL.createObjectURL(event.target.files[0]));
        setShowings(false);
      };
     
      
      return (
        <div className='flex11'>
            <div className="f">
             <h3 className="innerNav">1. Basics</h3>
             <h3 className="innerNav">2. Upload Media</h3>
             <h3 className="innerNav">3. Review </h3>
             <h3 className="innerNav1">4. Publish</h3>
            </div>


            <form className='form2' onSubmit={handleSubmit}>
                <h2>Basic Information</h2>



                <div className="inputWrap">
                  <label className='label'>Make</label>
             <select
         className="inputOnboard"     value={make} 
        onChange={(e) => {
            setMake(e.target.value);
        }}
      >
        <option value="All Makes">All makes</option>
        {makes.map((makes) => {
          return (
            <option key={makes.id} value={makes.maker}>
              {makes.maker}
            </option>
          );
        })}
      </select> 


  
<HandleSelect/></div>
                <div  className="inputWrap">
             
                </div>
              
            
          <label onClick={showWidget} htmlFor="pic-upload" className="picBoxUpload">
            <i htmlFor="pic-upload"></i>
            <div className="innerWrapper">
              <img className="iconImg" src={Img} />
              <p className="ptaged">
                <i>Upload a picture</i>
              </p>
            </div>
          </label>
                    


         <div className="images-preview-container">
         {images.map((image) => (
             <div className="pics-preview">
                 <img className='CardPic22' src={image.url} />
              
             </div>
         ))}
     </div>       


                <div className="inputWrap">
                <label className='label'>Year of manufacture</label>   
                <input   onChange={(e) => setYear(e.target.value)} value={year}   className="inputOnboard"/>
                </div>
                <div  className="inputWrap">
                <label className='label'>Mileage</label>   
                <input    className="inputOnboard"/>
                </div>
                <div className="inputWrap">
                <label className='label'>City*</label>   
                <input    className="inputOnboard"/>
                </div>
                <div  className="inputWrap">
                <label className='label'>State</label>   
                <input   className="inputOnboard"/>
                </div>
           {/*    <div  className="inputWrap">
                <label className='label'>Car type*</label>   
                <select    className="inputOnboard">
                <option>- Select Type -</option>
                    <option>Convertible/Roadster</option>
                    <option>Coupe</option>
                    <option>Saloon</option>
                    <option>Single Seater</option>
                    <option>SUV</option>
                    <option>Station Wagon</option>
                </select>
                </div>
                <div className="inputWrap">
                <label className='label'>Competition car? </label>   
                

                </div>
                <div className="yn">
                <label>yes</label>
                <input   className="inputOnboard" type="radio" placeholder='yes'/>
                
                
                <label className='no'>no</label>
                <input    className="inputOnboard" type="radio" />
                </div>
                <div  className="inputWrap">
                <label className='label'>Year of manufacture</label>   
                <input   className="inputOnboard"/>
                </div> */ } 

                <h2>Price</h2>
                <label className='label'>Price*</label>    
                <div  >
                 <select className="inputOnboard">
                    <option>USD</option>
                    <option>USD</option>
                    <option>USD</option>
                    <option>USD</option>
                    <option>USD</option>
                    <option>USD</option>
                    <option>USD</option>
                </select>
                <input
  id="input-example"
  className="inputOnboard"
  
  placeholder="Price"



  onChange={(e) => setPrice(e.target.value)} value={price}
/>
             </div>
          


                <input    className="inputOnboard" type="radio"/><label>Price On Request</label>
              


{/*              <div  className="inputWrap">
                    <h2>Specifications</h2>
                 
                    <div className='radioWrap'>

<label  className="inputLabel">Condition</label>

  <div>
    <select  className="inputOnboard">
  <option>Original condition</option>
  <option>Restoration project</option>
  <option>New</option>
  <option>Used</option>
  <option>Used with guarantee</option>
  
  </select>
  </div>
  </div>
</div>
<div  className='inputWrap'>

<label  className="inputLabel" >Exterior colur*</label>
  <div> 
  <select  className="inputOnboard">
  <option>Beige</option>
  <option>Yellow</option>
  <option>Black</option>
  <option>Orange</option>
  <option>Blue</option>
  <option>Purple</option>
  <option> Brown</option>
  <option>Red</option>
  <option>Green</option>
  <option>Silver</option>
  <option>Red</option>
  <option>White</option>
  
  </select>
 
  
  </div>
</div>
<div  className='inputWrap'>

<label  className="inputLabel" >Exterior brand color</label>
<input  className="inputOnboard"/>
  <div  className='inputWrap'> 
    <label  className="inputLabel" >Interior colur</label>
  <select  className="inputOnboard">
  <option>Beige</option>
  <option>Yellow</option>
  <option>Black</option>
  <option>Orange</option>
  <option>Blue</option>
  <option>Purple</option>
  <option> Brown</option>
  <option>Red</option>
  <option>Green</option>
  <option>Silver</option>
  <option>Red</option>
  <option>White</option>
  
  </select>
    




  </div>
  <div  className='inputWrap'> 
    <label  className="radioLabel" >Number of seats</label>
    <div  className='radioWrap' >
<input className='radio' type="radio"/><label>N/A</label>
    <input className='radio' type="radio"/><label>1</label>
    <input className='radio' type="radio"/><label>2</label>
    <input className='radio' type="radio"/><label>3</label>
    <input className='radio' type="radio"/><label>4</label>
    <input className='radio' type="radio"/><label>5</label>
  

    <input className='radio' type="radio"/><label>more</label>
    </div>


  </div>
</div> 

<div  className='inputWrap'> 
    <label  className="radioLabel" >Number of doors</label>
    <div className='radioWrap'>


    <input className='radio'  type="radio"/><label>N/A</label>
    <input className='radio'  type="radio"/><label>1</label>
    <input className='radio'  type="radio"/><label>2</label>
    <input className='radio'  type="radio"/><label>3</label>
    <input className='radio'  type="radio"/><label>4</label>
    <input className='radio'  type="radio"/><label>5</label>

    <input className='radio'  type="radio"/><label>more</label>
    </div>

  </div>
<div  className='inputWrap'>

<h2>Technical features</h2>
<label  className="inputLabel" >Fuel type</label>
<select  className="inputOnboard">
    <option>N/A   </option>
    <option>Petrol</option>
    <option>Diesel</option>
    <option>Other </option>
</select>
  
   
</div>
<div  className='inputWrap'>

<label  className="radioLabel" >Drivetrain</label>
    <select  className="inputOnboard">
    <option>N/A   </option>
    <option>2WD</option>
    <option>4WD</option>
 
</select>
   
</div>
<div  className='inputWrap'>

<label  className="radioLabel" >Drive</label>
<select  className="inputOnboard">
    <option>N/A   </option>
    <option>LHD</option>
    <option>RHD</option>
 
</select>

   
</div>
 */}  
<div className="inputWrap" >

<label  className="radioLabel" >Additional Info</label>
    <textarea  onChange={(e) => setDescription(e.target.value)} value={description}   className='radioarea'/>
  

   
</div>
 <div>
    <h2>Contact information</h2>
   
    <label>Phone*</label><br/>

    <select  className="inputOnboard">
        <option>
            United States (+1)
        </option>
    </select>
    <input  className="inputOnboard"></input><br/>
    <input type="radio"/><label>Stay anonymous</label>
    
 </div>

<button  type='submit' className="buttonz"> Next</button>
           
            </form>
            </div>
      )
    }
    
    export default List