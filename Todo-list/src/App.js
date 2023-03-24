import { useState } from "react";
import Todolist from "./Todolist";



function Todo(){
    var [todo,settodo]=useState("")
    var [list,setlist]=useState([])
var todoTask=(e)=>{
var get=e.target.value
    settodo(get)
}
var todoTask2=(e)=>{
   e.preventDefault();
    var displaylist=[...list,todo];
    setlist(displaylist)
    settodo("")

}
var todoTask3=(indexvalue)=>{
   var del=list.filter((ele,index)=>index!==indexvalue)
 setlist(del)
 }




    return(
        <div>
            <center>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Todo application</h4>
                        <form onSubmit={todoTask2}>
                            <input type="text" name="todo" value={todo} onChange={todoTask} class="btn btn-outline-success"/>
                            <input type="submit" name="add" class="btn btn-outline-warning"></input>
                        </form>
                        <Todolist todos={list} del={todoTask3}/>
                    </div>
                </div>
            </center>

        </div>
    )
}
export default Todo;