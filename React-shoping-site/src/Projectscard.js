

function Productscard({prod,del}){

    console.log("hi");
    var clr = { border: "2px solid green", width: "190px", height: "340px", display: "inline-block", margin: "50px", color: "black", textAlign: "center",display:"block" }
var center={textAlign:"center",display:"inline-block"}
      return(
        <div style={center}>
        

        <div>
            <h1>ProductCart</h1>
            { console.log("hiii from prods")}
            { console.log(prod)}
            
            {prod.map((ele,index) =>

<div style={clr} className="aa">
    <img src={ele.img} height="100px" width="100px"></img>
    <div key={index}>                        
        <p><b>product ID</b>:{ele.id}</p><p><b>product item</b>:{ele.item}</p><p><b>product brand</b>:{ele.brand}</p> <p><b>product code</b>:{ele.code}</p>  <p><b>category</b>:{ele.category}</p>  <p><b>product price</b>:{ele.price}</p>
        <button class="btn btn-outline-danger" onClick={()=>{del(ele.id)}}>delete</button>
        {console.log(ele)}
    </div>
   
</div>


)}
           
           
            
            
        </div>


        </div>
      )
    
}
export default Productscard;