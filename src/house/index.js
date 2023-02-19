import './house.css';
import { useState } from 'react';
import emailIcon from "./Email.png";
import Inquiry from './Inquiry';
const House = ({props}) => {
  const [ inquityShown, setInquityShown ]  = useState(false);
  const inqurityClick = () =>{
    setInquityShown(!inquityShown);
  }
  return ( 
    <div>
      <div className='row mt-2'>
        <h5 className='col-md-12'> {props.country}</h5>
      </div>

      <div className='row'>
        <h5 className='col-md-12'> {props.address}</h5>
      </div>

      <div className='row'>
        <div className='col-md-7'>
          <img src={`/images/${props.photo}.jpeg`} alt="House" />
        </div>
        <div className='col-md-5'>
          <p className='price'>${props.price}</p>
          <p>{props.description}</p>
          <img src={emailIcon} height="50" alt="inquiry" onClick={inqurityClick} />
          {inquityShown && <Inquiry props={props}/>}
        </div>
      </div>
    </div>
   );
}
 
export default House;