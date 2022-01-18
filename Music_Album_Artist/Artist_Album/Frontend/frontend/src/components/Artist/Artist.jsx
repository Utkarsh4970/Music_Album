
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Artist.module.css";
import { Link, Redirect, useHistory } from "react-router-dom";

export const Artist = ({ next1, next2, next3, next4 }) => {

    const [c_data, setC_data] = useState([]);
    const [s_data, setS_data] = useState({});
    const [st, setSt] = useState(false);
    let history = useHistory();





    const [album, setAlbum] = useState();
    const [count, setCount] = useState(1);
    let arr = [];

    for (let i = 1; i <= Math.ceil(album / 3); i++) {
        arr.push(i);
    }
    console.log("arr", arr)



    const handlechange = (e) => {

        // console.log(e.target.value)
        const { name, value } = e.target;

        setS_data({
            ...s_data,
            [name]: value
        })

    }

    const getcontest_data = () => {

        axios.get(`http://localhost:2244/albums?page=${count}`)
            .then((res) => {
                // console.log(res.data.contests)
                let data = res.data.albums
                for (let i = 0; i < data.length; i++) {
                    data[i].status = false;
                }
                // console.log("data",data)
                setAlbum(res.data.albumlength);
                return setC_data(res.data.albums)
            })
            .catch((err) => (
                console.log(err.message)
            ))
    }
    useEffect(() => {
        getcontest_data();
    }, [count])

    console.log("c_dat", c_data)


    const handleremove = (e) => {

        const new_data = c_data.filter((i) => (
            i._id != e
        ))
        setC_data(new_data)

        axios.delete(`http://localhost:2244/albums/${e}`)
            .then((res) => (
                console.log("while removing", res)
            ))
        console.log(e)
    }
    const handlesong = (e) => {

        const prev_song = e.song ? e.song : [];

        console.log(prev_song)
        const payload = {
            title: e.title,
            genre: e.genre,
            year: e.year,
            song: [...prev_song, s_data]
        }

        axios.put(`http://localhost:2244/albums/${e._id}`, payload)
            .then((res) => (
                console.log("while removing", res)
            ))
        // console.log(payload);
        setSt(true);

    }


    const handleadding = (ele, u) => {
        const add_data = c_data.map((e) => {
            if (e._id === ele) {
                e.status = !e.status;
            }
            return e;
        })
        setC_data(add_data);
        history.push(`/admin/${u}`)
    }

    const handleprev = () => {

        setCount((e) => e - 1)
        history.push(`/admin/${count - 1}`)
    }
    const handlenext = () => {
        //console.log(count)
        setCount((e) => e + 1)
        history.push(`/admin/${count + 1}`)
    }

    const handlenum = (e) => {
        setCount(e)
        history.push(`/admin/${e}`)
    }



    return st === true ? (<Redirect to="/guest" />) : (
        <div className={styles.main}>
            <div className={styles.nav}>
                <Link to={next1}>
                    <button className={styles.back4}>Create New Album</button>
                </Link>


                <div className={styles.back4} style={{ marginLeft: "500px", textAlign: "center" }}>{next4}</div>
            </div>
            <div className={styles.contest_p}>
                {
                    c_data.map((e) => (
                        <div className={styles.content} key={e._id}>
                            <div className={styles.first_div}>
                                <div className={styles.title}>{e.title}</div>
                                <div className={styles.tag}>{e.genre}</div>
                            </div>
                            <div className={styles.sec_div}>

                                <div>{e.year}</div>
                                <button onClick={() => { handleadding(e._id, e.title) }}>Add song</button>

                                {e.status ?
                                    (<div> <input onChange={handlechange} name="song_name" type={"text"} placeholder="name" />
                                        <input onChange={handlechange} name="duration" type={"number"} placeholder="duration" />
                                        <button onClick={() => { handlesong(e) }}>Click</button>

                                    </div>)
                                    : (<p></p>)
                                }
                                <button onClick={() => (handleremove(e._id))} className={styles.remove}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={handleprev}>prev</button>
            {arr.map((e) => {
                return <button style={{margin: "10px", width: "60px"}} onClick={() => { handlenum(e) }} key={e}>{e}</button>
            })}

            <button onClick={handlenext}>next</button>
        </div>
    );
};
