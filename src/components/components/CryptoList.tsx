import {FC, useEffect, useState}from 'react';
import '../styles/CryptoList.css'
import Crypto from './Crypto';
import axios from 'axios'
const CryptoList : FC = () => {

  const [cryptoList,setList]= useState<any>([]);
  const [searchValue,setSearchValue]=useState<string | null>('');

  useEffect(()=>{
    axios.get('https://api.coinstats.app/public/v1/coins?skip')
    .then(res=>{
      setList(res.data.coins)
    })
      .catch(err=>console.log(err))
  },[])



  const filterCrypto=cryptoList.filter((coin:any)=>{
    return coin.name.toLowerCase().includes(searchValue?.toLowerCase());
  });

  return (
    <div className='cryptoList'>
      <div className="list-header">

        <input type='text' placeholder='type to start searching'
        onChange={(e)=>{setSearchValue(e.target.value)}}
        />

      </div>
      <div className="list">
      {cryptoList?filterCrypto.map((coin :any)=>(
        <Crypto
        key={coin.id}
        name={coin.name}
        imageUrl={coin.icon}
        price={coin.price}
        symbol={coin.symbol}
        />
      )):<div>no coins..</div>}

      </div>
    </div>
  );
}

export default CryptoList;