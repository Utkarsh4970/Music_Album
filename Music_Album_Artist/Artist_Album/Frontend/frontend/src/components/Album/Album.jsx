
import { useState } from "react";
import axios from "axios";
import styles from "./Album.module.css";
import { Redirect } from "react-router-dom";

export const Album = ({ prev, next }) => {

    const [c_data, setC_data] = useState({});
    const[status,setStatus]= useState();


    const handlechange = (e) => {

        // console.log(e.target.value)
        const { name, value } = e.target;

        setC_data({
            ...c_data,
            [name]: value
        })

    }
    // console.log(c_data);

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:2244/albums',
            c_data
        ).then((res)=>{
           // console.log("status",res.status)
            return setStatus(res.status)
        }).catch((err)=>(setStatus("no")))
        console.log(c_data)
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
        <Redirect to="/artist" />
          
      ) : (
        <div className={styles.main}>
            <h2>Create Album list</h2>
            <div className={styles.container}>
                <form className={styles.frm} onSubmit={handlesubmit}>
                    <input onChange={handlechange} name="title" type={"text"} placeholder="Album Name" />
                    <input onChange={handlechange} name="genre" type={"text"} placeholder="Genre" />
                    
                    <input onChange={handlechange} name="year" type={"number"} placeholder="Year" />
                   
                    <div >
                        <input className={styles.back4} type={"submit"} value={"submit"} />
                    </div>
                </form>
            </div>

        </div>
    );
};
