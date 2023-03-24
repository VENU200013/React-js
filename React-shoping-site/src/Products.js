import { click } from "@testing-library/user-event/dist/click"
import { useEffect, useState } from "react"
import { product } from "./items"
import "./product.css"
import Productscard from "./Projectscard"


function Products() {
    var clr = {  width: "240px", height: "380px", display: "inline-block", margin: "20px", color: "black", textAlign: "center", }

    var [arr, setarr] = useState(product)
    var [noOfProducts, setNoOfProducts] = useState(0)
    var [cart,setcart]=useState([])
    var [modal,setModal]=useState(true)
   


    // -------- function logic---------

var filterValues = ()=>{
    var brands = document.getElementById("ad").value;
    var min = document.getElementById("aa").value;
    var max = document.getElementById("bb").value;
    var cat = document.getElementById("ca").value;
    var sear = document.getElementById("ba").value;

    var ab = product.filter((ele) => {
        return ele.item.includes(sear)
    })
    setarr(ab)
    
   
    
     if(brands!=""&&min==""&&max==""&&cat==""){
      var brandVal= product.filter(ele=>{
        return ele.brand==brands
       })
       setarr(brandVal)
       }
       else if(brands!=""&&min!=""&&max==""&&cat==""){
        var brandAndMinVal= product.filter(ele=>{
            return ele.brand==brands&&ele.price>=min
           })
           setarr(brandAndMinVal)
              }
              else if(brands!=""&&min!=""&&max!=""&&cat==""){
                var brandAndMinAndMaxVal= product.filter(ele=>{
                    return ele.brand==brands&&ele.price>=min&&ele.price<=max
                   })
                   setarr(brandAndMinAndMaxVal)
                      }
                      else if(brands==""&&min==""&&max==""&&cat!=""){
                        var catVal= product.filter(ele=>{
                            return ele.category==cat
                           })
                           setarr(catVal)
                              }
                              else if(brands==""&&min==""&&max!=""&&cat!=""){
                                var maxcatVal= product.filter(ele=>{
                                    return ele.price<=max&&ele.category==cat
                                   })
                                   setarr(maxcatVal)
                                      }
                                      else if(brands==""&&min!=""&&max!=""&&cat!=""){
                                        var minmaxcatVal= product.filter(ele=>{
                                            return ele.price>=min&&ele.price<=max&&ele.category==cat
                                           })
                                           setarr(minmaxcatVal)
                                              }
                                              else if(brands!=""&&min==""&&max==""&&cat!=""){
                                                var btancatVal= product.filter(ele=>{
                                                    return ele.brand==brands&&ele.category==cat
                                                   })
                                                   setarr(btancatVal)
                                                      }
                                                      else if(brands!=""&&min!=""&&max==""&&cat!=""){
                                                        var btanmincatVal= product.filter(ele=>{
                                                            return ele.brand==brands&&ele.price>=min&&ele.category==cat
                                                           })
                                                           setarr(btanmincatVal)
                                                              }
                                                             else if(brands==""&&min!=""&&max==""&&cat==""){
                                                               var mincatVal= product.filter(ele=>{
                                                                   return ele.price>=min
                                                                  })
                                                                  setarr(mincatVal)
                                                                     }
                                                                     else if(brands==""&&min==""&&max!=""&&cat==""){
                                                                       var maxVal= product.filter(ele=>{
                                                                           return ele.price<=max
                                                                          })
                                                                          setarr(maxVal)
                                                                             }
                                                                             else if(brands==""&&min!=""&&max!=""&&cat==""){
                                                                               var minmaxVal= product.filter(ele=>{
                                                                                   return ele.price>=min&&ele.price<=max
                                                                                  })}
                                                                                  else if(brands!=""&&min!=""&&max!=""&&cat!=""){
                                                                                   var all= product.filter(ele=>{
                                                                                       return ele.brand==brands&& ele.price>=min&&ele.price<=max && ele.category==cat
                                                                                      })
                                                                                  setarr(all)
                                                                                      }
                  
    setNoOfProducts(brandVal.length)                                       
}                                                               
var cartFun=(ele)=>{                                            
                            
    cart.push(ele)      
    // var cartDummyArr=[];
        
    
    // cartDummyArr.push(ele)                                        
    setcart([...cart]);                                         

    }                                                           


    var cartdel=(indexvalue)=>{  
    
        var del=cart.filter((ele)=>ele.id!=indexvalue)                        
      setcart(del)                                              
      }                                                                                         

      var show=()=>{
        var anim=document.getElementById("anim");
        if(modal==true || modal==false){
        anim.style.transform="scale(1.1)";
        anim.style.transition="all 1s"}
       setModal(!modal)
      
           
        }
        var anim=()=>{
            var anim=document.getElementById("anim");
            anim.style.transform="scale(1.02)";
            anim.style.transition="all 1s"
        }
        
    return (
        <div className="mainDiv" id="anim" onLoad={anim}>
           
            

            {/*---------- design --------- */}
            <div className="mar">
            <h6 style={{position:"absolute",top:"10px",left:"640px"}} class="btn btn-outline-danger">founded items:{noOfProducts}</h6>
                <div style={{position:"absolute",top:"60px",left:"1250px"}}>
            <button onClick={show}class="btn btn-outline-info"><img  src="./images/arrow.png"height="25px" width="25px"></img>back <b>cart</b><img  src="./images/cart.png"></img></button>&nbsp;<span class="text-warning"><b>{cart.length}</b></span>
            
            </div>
            <img src="./images/hm2.png" width="1500px" height="200px" ></img>
            
                <marquee direction="right">
                    <img src="./images/hm4.png" height="120px" width="200px" ></img>
                    <img src="./images/hm5.png" height="120px" width="200px" ></img>
                    <img src="./images/hm6.png" height="120px" width="200px" ></img>
                    <img src="./images/hm7.png" height="120px" width="200px" ></img>
                    <img src="./images/hm8.png" height="120px" width="200px" ></img>
                </marquee>
            </div>

            {/* ------------ id selecters-------------- */}
            <div>

                <select  class="btn btn-outline-primary" id="ad" onChange={filterValues}>

                    <option value="">--select--</option>
                    <option value="lg">lg</option>
                    <option value="samsung">samsung</option>
                    <option value="dell">dell</option>
                    <option value="lenovo">lenovo</option>
                    <option value="barbie">barbie</option>
                    <option value="nike">nike</option>
                </select>
     <select class="btn btn-outline-primary" id="aa" onChange={filterValues}>

                    <option value="">--minimum--</option>
                    <option value="2500">2500</option>
                    <option value="3500">3500</option>
                    <option value="4500">4500</option>
                    <option value="5500">7500</option>
                </select>


                <select  class="btn btn-outline-primary" id="bb" onChange={filterValues}>

                    <option value="">--maximum--</option>
                    <option value="6500">6500</option>
                    <option value="7500">7500</option>
                    <option value="8500">8500</option>
                    <option value="9500">9500</option>
                </select>


                <select  class="btn btn-outline-primary" id="ca" onChange={filterValues}>

                    <option value="">--category--</option>
                    <option value="footwear">footwear</option>
                    <option value="cloths">cloths</option>
                    <option value="electric">electric</option>
                    <option value="toys">toys</option>

                </select>
                <input class="btn btn-outline-dark" placeholder="search" type="text" id="ba" onChange={filterValues} />
            </div>


            {/* ---------------display in this place---------------- */}
            {modal?
            <div id="ab">
            {arr.map((abc) =>

                <div style={clr} className="aa">
                    <img src={abc.img} height="100px" width="100px"></img>
                    <div>                        
                        <p>product ID<b>:{abc.id}</b></p><p>product item<b>:{abc.item}</b></p><p>product brand<b>:{abc.brand}</b></p>  <p>category<b>:{abc.category}</b></p>  <p>product price<b>:{abc.price}</b><br></br>
                        <button onClick={()=>cartFun(abc)} class="btn btn-warning">add cart</button></p>
                        
                        
                    </div>
                   
                </div>    
            )}
        </div>

:
<div  id="ac">
{cart.map((abc,index) =>

<div style={clr} className="aa">
    <img src={abc.img} height="100px" width="100px"></img>
    <div>                        
        <p>product ID:<b>{abc.id}</b></p><p>product item:<b>{abc.item}</b></p><p>product brand:<b>{abc.brand}</b></p>  <p>category:<b>{abc.category}</b></p>  <p>product price:<b>{abc.price}</b>
        <br></br><button class="btn btn-outline-danger" onClick={()=>cartdel(abc.id)}>delete</button></p>
        
        {console.log(abc)}
    </div>
   
</div>


)}</div>}


{/* {cart.map(ele=>{
    return(
        <div>
          
            {console.log(ele.brand)}
            </div>
    )
})} */}

{/* <div style={{display:"block"}} id="ac">
<Productscard prod={cart} del={cartdel}/>
</div> */}
        </div>
        
    )
}
export default Products;