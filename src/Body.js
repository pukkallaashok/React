import RestroCards,{withMessage} from "./RestroCards";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
//import { withMessage } from "./RestroCards";
import UserContext from "./utils/UserContext";

const Body = () => {
    const [ListofRestroCards,setListofRestroCards] = useState([]); //for the total restaurant cards
    const [Searchtext,setSearchtext]=useState("");//for the text to search the selected restaurants 
    const [FilteredRestro,setFilteredRestro]=useState([]);//to handle the bug(bug is when filtered the cards are updated to firlted restro)
    const RestroMessage = withMessage(RestroCards);
    //console.log(ListofRestroCards);
    const {loginUser,setUserInfo} = useContext(UserContext);
    //console.log(loginUser+" body")



    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //Optional chaining
        setListofRestroCards(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
     
    if (onlineStatus === false) 
    return
     (
        <h1>Looks like you are offline!! check your connectivity </h1>
     );

    //conditonal rendering and optional chaining
    
    return ListofRestroCards?.length === 0 ? (<Shimmer/>):(
    <div className="body shadow-lg rounded-2xl">
        <div className="p-2 shadow-lg text-center bg-blue-50 rounded-2xl flex justify-between" >
            <input type="text" className="search border-stone-50 rounded-md bg-red-100" value={Searchtext} //for search bar
            onChange={(e) => {setSearchtext(e.target.value)}}/>
            <button className="px-2 m-2 bg-red-100 rounded-lg shadow-md" onClick={() => {

                const filteredList = FilteredRestro.filter((res => res.info.name.toLowerCase().includes(Searchtext.toLowerCase())))
                setFilteredRestro(filteredList);
            }}>search</button>

            <div className="rounded-lg shadow-md">UserName : 
                <input className="p-2" value={loginUser} onChange={(e)=>{setUserInfo(e.target.value)}}/>
            </div>  
            <button className="Filter-Rescards px-2 m-2 bg-blue-200 rounded-lg shadow-md" 
            onClick=
            {() => 
                {
                    const resfilter = ListofRestroCards.filter(
                        (res) => res.info.avgRating >= 4.5);
                     setFilteredRestro(resfilter) 
                }
            }>
                Top Rated Restaurants</button>
        </div>
        <div className="restro-container py-3 m-1 flex flex-wrap bg-slate-100 rounded-lg ">
        {
            FilteredRestro?.map((restaurant)=>
            (
            <Link key={restaurant?.info.id} className="restroLink" to={"/restaurants/"+restaurant?.info.id}>
                {restaurant?.info.aggregatedDiscountInfoV3
                     ? (<RestroMessage  resData={restaurant?.info}/>):(<RestroCards  resData={restaurant?.info}/>)}
            </Link>))
        }
        </div>
    </div>
    )
}

export default Body;