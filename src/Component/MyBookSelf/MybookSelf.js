import React from 'react'
import SameComp from '../SameComp';
import "./Mybook.css";
import { useNavigate } from 'react-router-dom';
export default function MybookSelf() {
    const arr=JSON.parse(localStorage.getItem("dataarr"));
    console.log(arr);
    const navi=useNavigate();
  return (
    <div className='mybookShelf'>
        My Bookshelf
        {arr?.length? <div className='content'>
               { arr.map((e,i)=>{
                return <SameComp key={i} element={e} type={"bookself"}/>
            })}
               </div>:
            <div style={{marginTop:"40px",fontWeight:"400"}}>Save your data 
            
            <span onClick={()=>{
                navi("/");
            }}>back</span>
            </div>   
            }
    </div>
  )
}
