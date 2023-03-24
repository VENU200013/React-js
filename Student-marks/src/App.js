import { useState } from "react";

function StudentMarks() {
    var [mark,setmark]=useState("");
    var [allmark,setallmark]=useState(0);
    var [avg,setavg]=useState();
    var marks=()=>{
        var mark1=document.getElementById("mark").value;
        var mark2=document.getElementById("mark2").value;
        var mark3=document.getElementById("mark3").value;
        var mark4=document.getElementById("mark4").value;

        var markv=Math.trunc(mark1)
        var markv2=Math.trunc(mark2);
        var markv3=Math.trunc(mark3);
        var markv4=Math.trunc(mark4);

    var total=markv+markv2+markv3+markv4;
    setavg(total/3)

    if(markv<35 || markv2<35 || markv3<35 || markv4<35 ){
        setmark("fail")
       }

      else{
       
       if(avg>=80){
        setmark("a")
       }
        else if(avg>=50){
        setmark("b")
       }
       else if(avg>=35){
        setmark("c")
       }
       else {setmark("fail")}}

       setallmark(total)
    }


    return(
    <center>
    <div>
        
        <h4>grade Calculator</h4>
        <input type="text" placeholder="telugu marks" id="mark" onChange={marks} class="btn btn-info"></input><br></br><br></br>
        <input type="text" placeholder="engish marks" id="mark2" onChange={marks}class="btn btn-info"></input><br></br><br></br>
        <input type="text" placeholder="hindi marks" id="mark3" onChange={marks} class="btn btn-info"></input><br></br><br></br>
        <input type="text" placeholder="math marks" id="mark4" onChange={marks}  class="btn btn-info"></input><br></br><br></br><br></br>
        grade:<input style={{width:"50px"}} value={mark} class="btn btn-outline-success"></input>   
        total:<input style={{width:"50px"}} value={allmark} class="btn btn-outline-success"></input>
        AVG:<input style={{width:"60px"}} value={avg} class="btn btn-outline-success"></input>

    </div>
    </center>)
    
}
export default StudentMarks;