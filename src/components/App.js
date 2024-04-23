import React,{useState,useEffect} from 'react'

const API_URL= "https://dog.ceo/api/breeds/image/random";

export default function App() {
    const [image,setImage]=useState(null)
  
    useEffect(() => {
      fetch(API_URL)
        .then(res => res.json())
        .then(data => setImage(data.message))
    },[])
    if(!image) {
      return <p className="cooldogs">Loading...</p>
    }
  
    return (
      <div>
        <img src={image} alt="A Random Dog" />
      </div>
    );
}
  
  
  