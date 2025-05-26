import RestoCard from "./RestoCard";
// import resList from "../utils/mockData";
import {useEffect, useState, useRef} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [loading, setloading]=useState(true);
    const [restaurants, setRestaurants]=useState([]);
    const [allRestaurants, setAllRestaurants]=useState([]);
    const [searchText, setSearchText]=useState("");
    const [isfilterapplied, setIsFilterApplied]=useState(false);
    const [searchSuggestions, setSearchSuggestions]= useState([]);
    const[activeSuggestionIndex, setActiveSuggestionIndex]=useState(-1);
    const suggestionRefs=useRef([]);
    const searchRes=()=>{
        const filtered=allRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setRestaurants(filtered);
        setActiveSuggestionIndex(-1);
    }
    const topRestaurants=()=>{
        const topRestaurants=allRestaurants.filter(res=>res.info.avgRating>4.2);
        setRestaurants(topRestaurants);
        setIsFilterApplied(true);
    }
    useEffect(()=>{
        const filtered=allRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
        setRestaurants(filtered)
        setIsFilterApplied(false)
        if(searchText===""){
            setSearchSuggestions([]);
            setActiveSuggestionIndex(-1);  
        }     
        else{
            const searchSuggestions=filtered.map(res=>res.info.name).slice(0,5);
            setSearchSuggestions(searchSuggestions)
        }        
    },[searchText,allRestaurants])

    useEffect(()=>{
        if(activeSuggestionIndex>=0 && suggestionRefs.current[activeSuggestionIndex]){
            suggestionRefs.current[activeSuggestionIndex].scrollIntoView({
                block : "nearest"
            });
        }
    },[activeSuggestionIndex]);

    useEffect(()=>{
        fetchData()},[]);
 
    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9492127&lng=80.2546826&collection=80396&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json=await data.json();
        console.log(json);
        const allCards = json?.data?.cards;
    const restaurantCards = allCards
      .map((item) => item?.card?.card)
      .filter((card) => card?.["@type"].includes("Restaurant"));
        setRestaurants(restaurantCards);
        setAllRestaurants(restaurantCards);
        setloading(false)
};

const handleKeyDown=(e)=>{
    if(e.key==="ArrowDown"){
        e.preventDefault();
        setActiveSuggestionIndex(prev=>prev<searchSuggestions.length-1?prev+1:0)
    }
    else if(e.key==="ArrowUp"){
        e.preventDefault();
        setActiveSuggestionIndex(prev=>prev>0?prev-1:searchSuggestions.length-1)
    }
    else if(e.key==="Enter"){
        if (activeSuggestionIndex >= 0) {
        setSearchText(searchSuggestions[activeSuggestionIndex]);
        setSearchSuggestions([]);
        setActiveSuggestionIndex(-1);
        searchRes();
        } else {
        searchRes();
        }
    }
};    
    
    return allRestaurants.length===0?(<Shimmer/>):(
        <div className="body">
            <div className="search">
                <input type="search" placeholder="search here" value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)
                    if(searchText===""){
                       setSearchSuggestions([]);
                       setActiveSuggestionIndex(-1);
                    }   
                    else{
                       const searchSuggestions=allRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())).map(res=>res.info.name).slice(0,5);
                       setSearchSuggestions(searchSuggestions)
                        }}} onKeyDown={handleKeyDown}></input>
				<button onClick={searchRes}>search</button>
            </div>
            <div className="filters">
                <button className="top-restaurants" onClick={topRestaurants}>Top Restaurants</button>
                {isfilterapplied && (<button className="filter-reset" type="reset" onClick={()=>
                    {setRestaurants(allRestaurants);
                        setIsFilterApplied(false)
                    }}>X</button>)}
            </div>
            {searchSuggestions.length>0 &&(
            <ul className="suggestion-list">
            {searchSuggestions.map((suggestion, index)=>(
                <li key={index} ref={(el) => (suggestionRefs.current[index] = el)} onClick={()=>{setSearchText(suggestion);
                    setSearchSuggestions([]);
                    setActiveSuggestionIndex(-1);
                    searchRes();
                }} className={`suggestion-item ${index===activeSuggestionIndex?"active":""}`}>{suggestion}</li>
            ))}    
            </ul>)
            }
            {restaurants.length===0 && <p>No results match your search "{searchText}"</p>
            }
            <div className="resto-card-container">
                {
                    restaurants.filter((restaurant) => restaurant?.info).map(restaurant=><RestoCard key={restaurant.info.id} resData={restaurant.info}/>)
                }
            </div>
        </div>
    )
}

export default Body;