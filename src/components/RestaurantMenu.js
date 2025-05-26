import { data } from "browserslist";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(data);
    setResInfo(json.data.cards);
  };
  
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resInfo[3]?.card?.card?.info;
  return (
    <div className="Menu">
      <h1>{name}</h1>
      <ul>
        <li>{cuisines.join(", ")}li></
        <li>{avgRating}⭐</li>
        <li>{costForTwo}</li>
        <li>Cocunut Pudding</li>
        <li>Acai Bowl</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
