import { useEffect, useState } from "react"
import { product } from "./items"


function Nproduct() {
    var clr = { border: "2px solid green", width: "190px", height: "340px", display: "inline-block", margin: "50px", color: "black", textAlign: "center" }

    var [arr, setarr] = useState(product)
    var [noOfProducts, setNoOfProducts] = useState(0)
    var [narr, setnarr] = useState(arr)



    // -------- function logic---------

// var filterValues = ()=>{
    // var brands = document.getElementById("ad").value;
    // var min = document.getElementById("aa").value;
    // var max = document.getElementById("bb").value;
    // var cat = document.getElementById("ca").value;
    // 
// 
// 
    // var finalItems=product.filter((ele=>{
        // if(ele.brand==brands && min=="" && cat=="")
        // {
            // if(ele.price>8000){
                // return ele
            // }
        // }
        // return ele.brand==brands && ele.price==min &&ele.category==cat
        // if(ele.brand==null && ele.price==null &&ele.price ==null &&ele.category==null){
        //   return console.log(brands,min,cat)
        // }
        // else if(ele.brand==brands && ele.price==null &&ele.price ==null &&ele.category==null){
        //     setarr(ele.brand)
        // }
        // if((ele.brand!="")&&(ele.price=="") && (ele.category=="")){
        //     console.log('hui')
        // }
    // }))
    // setarr(finalItems)
    // console.log(finalItems);
    // console.log(brands,min,cat)
// }
    var product1 = () => {
        var a = document.getElementById("ad").value;


        var aa = product.filter((ele) => {
            return ele.brand == a

        })

        setarr(aa)
        setNoOfProducts(aa.length)
    }

    var product2 = () => {

        var min = document.getElementById("aa").value;
        var max = document.getElementById("bb").value;

        var fixprice = arr.filter(ele => {
            return ele.price>=min && ele.price<=max
        })



        setarr(fixprice)









    }


    var product4 = () => {
        var a = document.getElementById("ca").value;

        var ab = arr.filter((ele) => {
            return ele.category == a
        })

        setarr(ab)


    }
    var product5 = () => {

        var a = document.getElementById("ba").value;

        var ab = product.filter((ele) => {
            return ele.item.includes(a)
        })

        setarr(ab)
    }



    return (
        <div>
            <h4>founded items:{noOfProducts}</h4>

            {/*---------- design --------- */}
            <div>
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

                <select class="btn btn-outline-primary" id="ad" onChange={product1}>

                    <option value="">--select--</option>
                    <option value="lg">lg</option>
                    <option value="samsung">samsung</option>
                    <option value="dell">dell</option>
                    <option value="lenovo">lenovo</option>
                    <option value="barbie">barbie</option>
                    <option value="nike">nike</option>
                </select>

                <select class="btn btn-outline-primary" id="aa" onChange={product2}>

                    <option value="">--minimum--</option>
                    <option value="2500">2500</option>
                    <option value="3500">3500</option>
                    <option value="5500">5500</option>
                    <option value="6500">6500</option>
                </select>

                <select class="btn btn-outline-primary" id="bb" onChange={product2}>

                    <option value="">--maximum--</option>
                    <option value="6500">6500</option>
                    <option value="7500">7500</option>
                    <option value="8500">8500</option>
                    <option value="9500">9500</option>
                </select>


                <select class="btn btn-outline-primary" id="ca" onChange={product4}>

                    <option value="">--category--</option>
                    <option value="footwear">footwear</option>
                    <option value="cloths">cloths</option>
                    <option value="electric">electric</option>
                    <option value="toys">toys</option>

                </select>
                <input class="btn btn-outline-dark" placeholder="search" type="text" id="ba" onChange={product5} />
            </div>


            {/* ---------------display in this place---------------- */}

            {arr.map((abc) =>

                <div style={clr} className="aa">
                    <img src={abc.img} height="100px" width="100px"></img>
                    <div>

                        <p><b>product ID</b>:{abc.id}</p><p><b>product item</b>:{abc.item}</p><p><b>product brand</b>:{abc.brand}</p> <p><b>product code</b>:{abc.code}</p>  <p><b>category</b>:{abc.category}</p>  <p><b>product price</b>:{abc.price}</p>
                    </div>
                </div>

            )}
            <h4>{ }</h4>
        </div>
    )
}
export default Nproduct;