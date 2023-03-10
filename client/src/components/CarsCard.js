
import { Link } from "react-router-dom";


const CarsCard = ({ make, model, pic , year, price, location, _id }) => {



return (
  
    <a href={`/cars/${_id}`}>
     <div className="card">
 
       
      <img   className="CardPic"src={pic[2].url}/>
      <div className="Textbox">
      <h3 className="h3">
   ${price}
        </h3>  
       <p className="p">
       {year}  {make}  {model}
       </p>

       <p className="lp">{location}</p>
       </div>
       </div>
       </a>
)

};



export default CarsCard;
