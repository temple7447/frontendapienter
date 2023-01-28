import React, {useState, useEffect} from "react";
import axios from 'axios';


export default function Home(){
    const [count , setCount] = useState(1)
    const [detail, setDetail] = useState([])

    useEffect(()=>{
    axios.get("http://localhost:4000/api/notification")
    .then((respose)=>{
    console.log(respose.data)
    setDetail(respose.data);

    })
    .catch(error =>error)

    },[]);

const info = detail.map((details)=>{
    return(
        <ul>
        <li key={detail._id}>{details.message}</li>
        </ul>
    )
})

    return(
        <div>
   {info}
        </div>
    )
}