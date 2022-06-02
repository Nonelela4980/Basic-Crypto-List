import {FC}from 'react';
import '../styles/Crypto.css'

interface Props{
    name:string,
    imageUrl:string,
    price:number,
    symbol:string,
}

const Crypto : FC<Props> = ({name,imageUrl,price,symbol}) => {
  return (
    <div className='crypto'>
      <h2>{symbol}</h2>
      <div className="image-container">
          <img src={imageUrl}/>
      </div>
      <h3>Price: {price}</h3>
      <h2>{name}</h2>
    </div>
  );
}
export default Crypto;