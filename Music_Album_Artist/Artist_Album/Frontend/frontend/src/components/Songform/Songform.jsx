
import { useState } from "react";
import axios from "axios";
import styles from "./songform.module.css";
import { Redirect } from "react-router-dom";

export const Songform = ({ prev, next }) => {
    // const [text, setText] = useState("");
    const [formdata,setFormdata]=useState({});
    const [status,setStatus]=useState();


    const handlechange = (e) => {
        const {name, value} = e.target;

        setFormdata({
            ...formdata,
            [name]: value
        })
        
    }
   

    const handlesubmit = (e) => {
            e.preventDefault();
            console.log(formdata);

            // if(e.target[0].value.length == 0 || e.target[1].value.length == 0){
            //     alert("Details Should Not be Empty")
            // }else{
            // }
            axios.post('http://localhost:2244/songs', 
             formdata
            )
          .then((res)=>{
              console.log("status",res.status)
              return setStatus(res.status)
          }).catch((err)=>(setStatus("no")))
        //   .then(getdata)
        //   .then(function (response) {
        //     //   getdata()
        //     // console.log(response);-
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        
          // alert(" Post Successfull")
    
        //     console.log(e.target[0].value.length, e.target[1].value.length)
          
       
    }
    


    return status === 200 ? (
        <Redirect to="/access" />
          
      ) : (
        <div >
            <form onSubmit={handlesubmit}>
                <h1 style={{ textAlign: "center" }}>Add song</h1>
                <div className={styles.card4main}>
                    <div className={styles.inputbox}>
                        <div style={{ display: "flex",alignItems:"center", gap: "20px" }}>
                            <h3>Album name</h3>
                            <input onChange={handlechange} name="title"
                                placeholder={"Album name"} type={"text"} />
                        </div>

                        <div style={{ display: "flex", gap: "20px" }}>
                            <h3>Song name</h3>
                            <input onChange={handlechange} name="name"
                                type={"text"} placeholder={"Song name"} />
                        </div>


                        <div style={{ display: "flex", gap: "40px" }}>
                            <h3>Duration</h3>
                            <input onChange={handlechange} name="duration"
                                type={"number"} placeholder={"song duration"} />
                        </div>
                    </div>
                    <div>
                        
                        <input className={styles.back4} type={"submit"} value={"submit"} />
                    </div>
                </div>


            </form>
        </div>
    );
};
