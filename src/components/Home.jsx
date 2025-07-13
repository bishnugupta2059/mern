import {  useEffect, useState } from "react";

function Home(){
     let [data,setData]=useState([])
        useEffect(()=>{
            fetch('https://fakestoreapi.com/products').then(a=>a.json())
.then(b=>setData(b))        },[])
    return(
       
( <div>
    <h3>All Product</h3>
    {data.map(a=>(
        <div> 
            <img src={a.image}/>
            <p>{a.title}</p>
        </div>
    ))}
</div>)
    )
}
export default Home;