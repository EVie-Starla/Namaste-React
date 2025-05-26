import { CDN_URL_P1 } from "../utils/constants";
import { CDN_URL_P2 } from "../utils/constants";

const RestoCard=(props)=>{
    const{resData}=props;
    const{name,cuisines,avgRating,cloudinaryImageId}=resData;
    return(
        <div className="resto-card" >
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="resto-card-logo"/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{resData.avgRating}⭐</h5>
        </div>
    )
}

export default RestoCard;