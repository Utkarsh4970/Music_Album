
import { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";
import { Link, Redirect } from "react-router-dom";

export const Register = ({ prev, next }) => {
  const [logindata,setLogindata]=useState({});
  const [status,setStatus]=useState(false);
 
    const handlechange = (e) => {
        const {name, value} = e.target;

        setLogindata({
            ...logindata,
            [name]: value
        })
        
    }
 
     if(localStorage.getItem('mylogin')===null){
            localStorage.setItem('mylogin',JSON.stringify([]));
         }
    const handlelogin=(m)=>{
        //console.log(logindata);
        // const mylogindata_json=JSON.stringify(logindata);
        // localStorage.setItem("mylogin",mylogindata_json);
        
        // var myLogin=localStorage.getItem("mylogin");
        // myLogin=JSON.parse(myLogin);

        let mylogin_data=JSON.parse(localStorage.getItem("mylogin"))
        mylogin_data.push(m);
        localStorage.setItem('mylogin',JSON.stringify(mylogin_data));
setStatus(true)


        
        // function addcart(m) {
        //     let mobilecart_data=JSON.parse(localStorage.getItem("mobilecart"))
        //     mobilecart_data.push(m);
        //     localStorage.setItem('mobilecart',JSON.stringify(mobilecart_data));
        // }
    // let pre=logindata.email;
    // prev(pre);
    //     axios.post('http://localhost:2244/register',
    //     logindata)
    //  .then((res)=>{
    //      console.log("status",res.status)
    //      return setStatus(res.status)
    //  }).catch((err)=>(setStatus("no")))




    }



    return status === true ? (
        <Redirect to="/artist" />
          
      ) :(
        <div>
            <h1>Welcome to login page</h1>
            <Link to="/login">
            <button>Login</button>
            </Link>
        <div className={styles.parent}>
        <div className={styles.main}>
           <div className={styles.card1}>
               <h2> Artist Login</h2>
               <div>
                   <h3>Name:</h3> <input onChange={handlechange} type={"text"} name="email" />
                </div>
                <div>
                   <h3> Age:</h3> <input onChange={handlechange} type={"number"} name="password"/>
                </div>
                <div>
                   <h3>Email:</h3> <input onChange={handlechange} type={"email"} name="email" />
                </div>
                <div>
                   <h3> Password:</h3> <input onChange={handlechange} type={"password"} name="password"/>
                </div>
                <div>
                    <button className={styles.back4} onClick={()=>{handlelogin(logindata)}}>Register</button>
                </div>
           </div>
        </div>
        </div>
        </div>
    );
};
