import { CDN_URL } from "./utils/constants";


const RestroCards = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,deliveryTime,cuisines,costForTwo}=resData;
    return(
        <div className="restro-cards bg-gray-200 hover:bg-gray-300 m-4 p-4 w-[270px] h-[400px] rounded-lg">
            <img className="res-img w-[100%] h-44 rounded-md" alt="res-img" 
            src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-1">{name}</h3>
            <span className="text-green-500 font-bold">Rating-{avgRating+"⭐" }</span>
            <span className="font-semibold"> - {costForTwo}</span>
            <h5 className="py-2 text-sm">{cuisines.join(", ")}</h5>
        </div>
        )
}

export const withMessage = (RestroCards) => {
    return(props)=>{
        return(
            <div>
                <label className="m-2 p-2 bg-black text-white absolute">Promoted</label>
                <RestroCards {...props}/>
            </div>
        );
    };
}

export default RestroCards;