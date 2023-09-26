import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "./utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCatogory from "./utils/RestaurantCatogory";
import { useDispatch, useSelector } from "react-redux";
import { getRestroFetch } from "./utils/restroSlice";

const RestaurantMenu = () => {
  // const [resMenu,setResMenu] = useState(null);

  // this the lifting state up
  const [showIndex, setshowIndex] = useState(null);

  const {resId} = useParams();

  const resMenu = useRestaurantMenu(resId);
  // const resMenu = useSelector((state) => state.restraurant.restroList);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRestroFetch());
  // }, [dispatch]);
  // console.log(resMenu);
  if (resMenu === null) return <Shimmer />;

    const  {name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;
    // const { itemCards } =
    //   resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

    const catogaries =
      resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
  //console.log(catogaries);
  return (
    <div className="p-10 text-center">
        
      { <h1 className="p-2 font-bold">{name}</h1>}
      { <p className="p-2 font-semibold">Cuisines-{cuisines?.join(",")}-{costForTwoMessage}</p>}
      <p>
        {
          catogaries.map((catagory, index) => (
            <RestaurantCatogory
              data={catagory?.card?.card}
              ShowItems={index == showIndex ? true : false}
              SetShowItems={() => setshowIndex(index)}
            />
          ))}
      </p>
    </div>
  );
};

export default RestaurantMenu;
