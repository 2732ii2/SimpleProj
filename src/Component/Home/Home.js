import React, { useEffect, useState } from 'react'
import "./home.css";
import SameComp from '../SameComp';
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from "react-spinners";

export default function Home() {
    const navi=useNavigate();
    const [Data,setData]=useState([]);
    const [filteredArr,setfilteredArr]=useState([]);

    const [err,setErr]=useState("");
    const [value,setvalue]=useState("");
    async function apicall(){
        try{
            const data= await fetch("https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1");
            const mainD=await data.json();
            console.log(mainD);
                setData(mainD?.docs);
        }
        catch(e){
            console.log(e)
            setErr(e?.message);
        }
    }
    function onChangeEvent(e){
        console.log(e);
        setvalue(e.target.value);
    }
    useEffect(()=>{
        if(Data.length){
            var c=Data.filter((e)=>{
                if(e.title.includes(value))
                return e;
            })
            setfilteredArr(c);
        }
    },[value])
    useEffect(()=>{
        apicall();
    },[])
  return (
    <div className='home'>
        <div className='upperSlit'>
            <div className='searchbar'>
                Search book by name
                <input  className='inp_' onChange={onChangeEvent}/>
            </div>
            <button className='bookself' onClick={()=>navi("/save")}>My BookSelf</button>
        </div>
            {
               err?
               <div></div>:
               filteredArr.length? <div className='content'>
               { filteredArr.map((e,i)=>{
                return <SameComp index={i} element={e} type={"main"} />
            })}
               </div>:
               Data?.length? <div className='content'>
               { Data.map((e,i)=>{
                return <SameComp index={i} element={e} type={"main"} />
            })}
               </div>
               :
               <div className='loader' >
                <ClipLoader color="black" />
                </div>
            }
    </div>
  )
}
