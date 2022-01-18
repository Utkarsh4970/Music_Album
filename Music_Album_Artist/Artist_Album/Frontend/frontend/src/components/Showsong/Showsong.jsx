
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Showsong.module.css";
import { useParams } from "react-router-dom";


export const Showsong = ({ prev, next}) => {

// history.push(`/songlist/${next1}`)

   
    //console.log("next",next)
   return (
   <div style={{margin:"30px 550px", fontSize:"30px", width: "500px", padding: "30px", border: "1px solid black"}}>   { next.map((e)=>(
       
    <div key={e._id} style={{display:"flex",gap:"20px"}}>
        <div>Song Title: {e.song_name}</div>
        <div>Durattion: {e.duration}</div>
        
        </div>
   
   ))
   
   }
   </div>
   )


};
