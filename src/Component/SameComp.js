const SameComp=({index,element,type})=>{

    console.log(index,element);
    return  <div  key={index} className='maindivs'>
    <div style={{height:"150px"}}>
    <div className='title'>Book title : <div>{element?.title}</div> </div>
    <div className='count'>Edition Count : <div>{element?.edition_count}</div> </div>
    </div>
    {type==="main" && 
    <button className='bookself'  onClick={()=>{
        if(!JSON.parse(localStorage.getItem("dataarr"))){
            var arr=[];
            arr.push({"title":element?.title,edition_count:element?.edition_count})
            localStorage.setItem("dataarr",JSON.stringify(arr)) 
        }
        else{
            var c=JSON.parse(localStorage.getItem("dataarr"));
            var d=   c.map(e=>e?.title);
            if(!d.includes(element?.title)){
            c.push({"title":element?.title,edition_count:element?.edition_count});
            console.log(c);
            localStorage.setItem("dataarr",JSON.stringify(c));
        } 
        }
       
    }}>Add to Bookself</button>}
</div>
}
export default SameComp