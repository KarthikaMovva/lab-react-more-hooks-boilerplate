import { useReducer,useRef } from "react";
import "./App.css"
function Focuslist(num,task){
 if(task.type==="ADD_NEW_ITEM"){
  return[...num,{text: task.payload, Hidden : false}]
 }
 else if(task.type==="MAPPED_ARRAY"){
  return[...task.payload]
 }
 else{
  return num
 }}
 function Steps(){
 const[state,unpack]= useReducer(Focuslist,[])

 const assignvariable=useRef();
//  console.log(assignvariable)

 function Totoggel(requiredindex){ 
let convertarray= state.map((ele,index)=>{
    if(index===requiredindex){
        return{
            text : ele.text,
            Hidden : !ele.Hidden,
        }
    }else{
        return ele;
    }
})

unpack({type : 'MAPPED_ARRAY', payload : convertarray})
 }
 return(
    <div>
        <div>
            <input type="text" ref={assignvariable} className="input" onKeyDown={(e)=>{if(e.key=="Enter")
            {unpack({type : "ADD_NEW_ITEM",payload : e.target.value }
            ); e.target.value=""}}}/>
        </div>
        <div>{state.map(function (e,index){
            return(
                <div key={index} className="numof">
                  <p className="list">{e.Hidden==true? "Text is Hidden":e.text}</p>
                  <button onClick={()=>{Totoggel(index)}} className="toggel">Toggel</button>
                </div>
            )
        })}</div>
        <div>
            <button onClick={()=>{assignvariable.current.focus()}} className="focus">Focus input box</button>
        </div>
    </div>
 )
 }
export default Steps;