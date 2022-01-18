
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Access_artist.module.css";
import { Link, useHistory } from "react-router-dom"
export const Access = ({ prev, next }) => {
    let history = useHistory();
    const [s_data, setS_data] = useState([]);
    const [album, setAlbum] = useState();
    const [count, setCount] = useState(1);
    let arr = [];

    for (let i = 1; i <= Math.ceil(album / 3); i++) {
        arr.push(i);
    }
    // console.log("arr", arr)
    // const [sortType, setSortType] = useState('albums');
    // useEffect(() => {
    //     // song_data()
    //   const sortArray = type => {
    //     const types = {
    //       name: 'name',
    //       age: 'age',

    //     };
    //     const sortProperty = types[type];
    //     console.log(sortProperty);
    //     const sorted = [...s_data].sort((a, b) => a.sortProperty - b.sortProperty);
    //     setS_data(sorted);
    //   };
    //   sortArray(sortType);
    //   song_data()
    // }, [sortType]); 

    const song_data = () => {

        axios.get(`http://localhost:2244/albums?page=${count}`)
            .then((res) => {
                // console.log(res)
                setAlbum(res.data.albumlength);
                // let data = res.data.contests
                return setS_data(res.data.albums)
            })
            .catch((err) => (
                console.log(err.message)
            ))
    }

    // const song_data = () => {

    //     axios.get(`http://localhost:2244/albums/pag`)
    //         .then((res) => (
    //             // console.log(res.data.contests)
    //             // let data = res.data.contests
    //             setS_data(res.data.albums)
    //         ))
    //         .catch((err) => (
    //             console.log(err.message)
    //         ))
    // }

    useEffect(() => {
        song_data();
    }, [count])

    console.log("s_data", s_data);

    const handleremove = (e) => {

        const new_data = s_data.filter((i) => (
            i._id !== e
        ))
        setS_data(new_data)

        axios.delete(`http://localhost:2244/songs/${e}`)
            .then((res) => (
                console.log("while removing", res)
            ))
        console.log(e)
    }
    const handlename = () => {

        let y = [...s_data].sort((a, b) => {

            let fa = a.genre.toLowerCase(),
                fb = b.genre.toLowerCase();
            //   console.log("sorting",fa,fb);
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })



        setS_data(y);
    }
    const handleage = () => {

        // console.log("sorting",sortes);
        let x = [...s_data].sort((a, b) => {
            // console.log("a", a.year, "b", b.year)
            return a.year - b.year
        })
        setS_data(x)

    }


    const handlelist = (el, t) => {

        let song_listdata = el;

        prev(song_listdata);
        history.push(`/songlist/${t}`)

    }
    const handleprev = () => {

        setCount((e) => e - 1)
        history.push(`/access/${count - 1}`)
    }
    const handlenext = () => {
        //console.log(count)
        setCount((e) => e + 1)
        history.push(`/access/${count + 1}`)
    }

    const handlenum = (e) => {
        setCount(e)
        history.push(`/access/${e}`)
    }


    return (

        <div className={styles.main}>
            <div>
                <Link to="/login">
                    <button>Artist Login</button>
                </Link>
                <Link to="/register">
                    <button>Artist SignUp</button>
                </Link>
            </div>
            <div>
                {/* <button className={styles.name} onClick={handlename}>Sort By Genre</button> */}
                <button className={styles.age} onClick={handleage}>Sort By Year</button>
            </div>

            <div className={styles.contes_p}>
                {
                    s_data.map((e) => (
                        <div className={styles.content} key={e._id}>
                            <div className={styles.first_div}>
                                <div className={styles.title}>{e.title}</div>

                            </div>
                            <div className={styles.sec_div}>
                                <div>{e.genre}</div>

                                <div>{e.year}</div>

                                <div><span>Song Length: </span>{e.song.length}</div>

                                <button onClick={() => { handlelist(e.song, e.title) }} >View songs</button>

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
