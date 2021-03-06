
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { Access_page } from './components/Artist_access';

import { Artist_page } from './components/Artist';

import {Register_page } from './components/Register';
import { useState } from "react";
import { Album_page } from "./components/Album";
import { Song_page } from "./components/Showsong";
import { Login_page } from "./components/Login";




function App() {

  const [em,setEm]=useState();
  let email=(pre)=>{
    setEm(pre)
    //console.log("pre",pre)
    }
    const [sm,setSm]=useState();
    
    let lis=(li)=>{
      setSm(li)
     
      //console.log("pre",pre)
      }
    

  return (
    <div className="App">
 <Switch>
         
        <Route exact path="/register">
          <Register_page prev={email}/>
        </Route>
        <Route exact path="/login">
          <Login_page prev={email}/>
        </Route>
        <Route path="/admin">
          <Artist_page next1={"/album"} next2={"/song"} next3={"/guest"} next4={em} />
        </Route>
        <Route exact path="/album">
          <Album_page />
        </Route>
        
        <Route path="/guest">
          <Access_page prev={lis} />
        </Route>
        <Route exact path="/song/:id">
          <Song_page next={sm} />
        </Route>

        </Switch>
        {/* <Login_page /> */}
      {/* <Access/> */}
      {/* <admin/> */}
      {/* <Contest/> */}
     {/* <SignUpForm4 /> */}
    </div>
  );
}

export default App;
