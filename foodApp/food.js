import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>(
    <div className="header">
        <React.Fragment>{/*} and its shorthand version <></> are both used in React to group a list of children elements without adding extra nodes like <div> and <span> to the DOM.*/}
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </React.Fragment>{/*(when we add props, key prop alone supported)*/}
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>🛒</li>
            </ul>
        </div>
    </div>
)

const resList=[
				{
				"id": "2761",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2762",
				"name": "KFC",
				"address": "22nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["American", "Burger", "Fast Food", "Rolls"],
				"rating": 3.7,
				"cost_for_two": 500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"chains/9/65279/a411eb0d9326ac8a3e60063b60260c2d"
			},
				{
				"id": "2763",
				"name": "McDonals's",
				"address": "2nd Floor, Anna Street, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["American,Burger,Cafe"],
				"rating": 3.7,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"7/18387727/88bf2fad1fbf85cba64a644a2adcceb7_o2"
			},
				{
				"id": "2764",
				"name": "Dindigul Thalappakatti",
				"address": "4/63, MGR st, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"chains/1/65141/48a37af14bb29f58ad35cd0d4d14c512_o2"
			},
				{
				"id": "2765",
				"name": "Namma Veedu Vasanta Bhavan",
				"address": "871, Neru st, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["South Indian", "North Indian"],
				"rating": 4.2,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"6/20543526/3f1ea9bca418a05533f1b0cdda4d39de_o2"
			},
				{
				"id": "2766",
				"name": "Pizza Hut",
				"address": "65, Jansi Lane, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Pizza","Beverages","Fast Food"],
				"rating": 4.1,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"6/21006456/3849aafaeafdfa733f23f7e70fb608ab_o2"
			},
				{
				"id": "2767",
				"name": "Buhari Hotel",
				"address": "4/35,Blue beech, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Burger","Fast Food","Beverages"],
				"rating": 4.0,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"2/20968442/a81d986c671ffdb78d848a69a4cb2c48_o2"
			},
				{
				"id": "2768",
				"name": "Hotel saravana Bhavan",
				"address": "56, VS st, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["South Indian", "North-Indian"],
				"rating": 4.0,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"chains/9/65499/8096b242f31979a560e923310e07ee16_o2"
			},
				{
				"id": "2769",
				"name": "Domino's Pizza",
				"address": "556,York st, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Italian", "Pizza", "Fast Food"],
				"rating": 4.0,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"6/20060376/1fc9a366b808205f6294527b168d9a0b_o2"
			},
				{
				"id": "2710",
				"name": "Sangeetha Veg Restaurant",
				"address": "5,3rd Lane, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["South Indian", "North-Indian"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"chains/6/65486/e46e29c6f2dfd15a05c22ce315d73f5b_o2"
			},
				{
				"id": "2720",
				"name": "Basheer Bhai Biriyani",
				"address": "45,4th st, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Biriyani", "Chinese", "Roasted Chicken"],
				"rating": 4.0,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"0/19037700/14a81a43bfac0e047c2731e059a6870b_o2"
			},
				{
				"id": "2730",
				"name": "WOW! Momo",
				"address": "56,Marina Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Momos", "Chinese", "Fast Food"],
				"rating": 3.9,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"6/19725076/b23ef9e9ee5409c9c31ef0d262b9f4d2_o2"
			},
				{
				"id": "2740",
				"name": "Anjappar",
				"address": "2nd Floor,Phoenix Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["South-Indian", "Biriyani"],
				"rating": 4.0,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"chains/1/65031/a1a2a2f77fc3654e676be652c10c1ca4_o2"
			},
				{
				"id": "2750",
				"name": "Chai Kings",
				"address": "3rd Floor, VR Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Beverages", "Tea"],
				"rating": 4.2,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"6/18415226/f3db31b24477d2d04ee7206c3bb0ae7a_o2"
			},
				{
				"id": "2770",
				"name": "Hotel paramount",
				"address": "3, Market st, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["North-Indian", "Biryani", "Chinese"],
				"rating": 4.3,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"7/66377/2a602407499f76766f5d2285a3e319c1_o2"
			},
				{
				"id": "2780",
				"name": "Ibaco",
				"address": "1st floor, town st, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Ice Cream"],
				"rating": 4.3,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/66614/8c2fc3b2fae263104426d493d75a54c4"
			},
				{
				"id": "2790",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2160",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2260",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2360",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2460",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2560",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2660",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2860",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			},
				{
				"id": "2960",
				"name": "Meghana Foods",
				"address": "2nd Floor, MGF Mega City Mall, MG Road, Gurgaon",
				"locality": "MG Road",
				"city": "Gurgaon",
				"cuisine": ["Indian", "Asian", "Chinese"],
				"rating": 4.4,
				"cost_for_two": 1500,
				"has_discount": 0,
				"has_citibank_discount": 0,
                zmtcdnid:"4/19498304/9549cb193c1e79bfd4807fc29fe1e042_o2"
			}
]

//to write CSS inside JS,JS object is used..***not recommended
// const styleCard={
//     backgroundColor: "#f0f0f0"
// };

//************************* PROPS ****************************/

// const RestoCard=(props)=>{//the props(object) can also be destructured
//     const{rating,imgSrc}=props;
//     return(
//         <div className="resto-card" >{/* style={styleCard}> OR style={{backgroundColor:"whitesmoke",border:2px}}--CSS inside JS*/}
//             <img src={imgSrc} alt="resto-card-logo"/>
//             <h3>{props.restoName}</h3>
//             <h4>{props.cuisine}</h4>
//             <h4>{rating}⭐</h4>
//         </div>
//     )
// }


const RestoCard=(props)=>{//the props(object) can also be destructured
    const{resData}=props;
    const{name,cuisine,rating,zmtcdnid}=resData;//THIS IS THE BEST PRACTICE
    return(
        <div className="resto-card" >{/* style={styleCard}> OR style={{backgroundColor:"whitesmoke",border:2px}}--CSS inside JS*/}
            <img src={"https://b.zmtcdn.com/data/pictures/"+zmtcdnid+"_featured_v2.jpg?output-format=webp"} alt="resto-card-logo"/>
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            {/* <h4>💰{resData.cost_for_two} for Two</h4> */}
            <h4>{resData.rating}⭐</h4>{/*THIS IS NOT THE BEST PRACTICE*/}
        </div>
    )
}




//***********************DESTRUCTURING PROPS(OBJECT)****************************

// const RestoCard=({restoName,cuisine,rating,imgSrc})=>{
//     return(
//         <div className="resto-card" >
//             <img src={imgSrc} alt="resto-card-logo"/>
//             <h3>{restoName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>{rating}⭐</h4>
//         </div>
//     )
// }


// PROPS --Properties(PROPS) can be passed to the component.If we want to dynamically pass some data to a component, it can be passed as a prop.At the EOD, PROPS are just arguments to (components)functions.PASSING A PROP TO A COMPONENT IS JUST LIKE PASSING AN ARGUMENT TO A FUNCTION


// const Body=()=>{
//     return(
//         <div className="body">
//             <div className="search">
//                 <input type="search" placeholder="search here"></input>
//             </div>
//             <div className="resto-card-container">
//                 <RestoCard restoName="Meghana Foods" cuisine="Indian.Chinese.Korean" rating="4.4" imgSrc="https://images.herzindagi.info/image/2018/Oct/indian-foods-loved-by-foreigners.jpg" /> {}
//                 <RestoCard restoName="KFC" cuisine="American" rating="4.8" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJaJSHHo7qNbvKwtZYCK_tPqbofDZnlkEZ8jNPJ_QrwQtyG1LLJ1QeFollSxW97PdM9U&usqp=CAU" /> 
//                 {/*React wraps these props into an JS object and pass it as props to react component*/}
//             </div>
//         </div>
//     )
// }

const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                <input type="search" placeholder="search here"></input>
            </div>
            <div className="resto-card-container">
                {/* <RestoCard  resData={resList[0]}/>
                <RestoCard  resData={resList[1]}/> 
                <RestoCard  resData={resList[2]}/> 
                <RestoCard  resData={resList[3]}/> 
                <RestoCard  resData={resList[4]}/> 
                <RestoCard  resData={resList[5]}/> 
                <RestoCard  resData={resList[6]}/> 
                <RestoCard  resData={resList[7]}/>   */} {/*NOT THE BEST PRACTICE*/}
                {/*✅ JS FUNCTIONAL PROGRAMMING(map(),reduce(),filter()),❌FOR LOOPS*/}
                {
                    resList.map(restaurant=><RestoCard key={restaurant.id} resData={restaurant}/>)//key is for code optimization.React doesn't uniquely identify the element without key and it will rerender everything if key wasn't provided
                    
                    // resList.map((restaurant, index)=><RestoCard key={index} resData={restaurant}/>)//DONT USE INDEX FOR KEY
                }
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
    <>
        <Header/>
        <Body/>
        {/* //Header
            //Body
               //Restaurant card component
            //Footer */}
    </>
    )
}   

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)