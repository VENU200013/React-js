

function Todolist({todos,del}){
    var clr = {color: "white", textAlign: "center" }

    var a=1
    return(
        <div>
            <table class="table table-dark" style={{width:"800px"}}>
            <thead> <tr><th scope="col">slno</th><th scope="col">data</th><th scope="col">delete</th></tr></thead>
            {todos.map((ele,index)=>
               <tbody style={clr} key={index}> <tr> <td scope="row">{a++}</td><td>{ele}</td>   <td><button class="btn btn-outline-info" onClick={()=>{del(index)}}>del</button></td></tr></tbody>
           )}
            </table>
        </div>
    )
}
export default Todolist;