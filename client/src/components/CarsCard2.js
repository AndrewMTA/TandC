
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom"

const CarsCard2 = ({ make, model, pic , year, price, location, _id, listUser}) => {

const id1 = useParams()
  

const Card = () => {
 
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
{listUser}    
       <p className="lp">{location}</p>
       </div>
       </div>
       </a>
)
 






    }

    return (
<div>
<Card/>
        

</div>    


        )
    
};
export default CarsCard2;
