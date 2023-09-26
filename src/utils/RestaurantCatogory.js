import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCatogory = ({data,ShowItems,SetShowItems}) => {
     //const[ShowItems,setShowItems] =useState(false)
    const handleClick = () => {
         SetShowItems();
    }
    
    return <div className="">
        <div className="w-6/12 bg-gray-50 mx-auto my-4 p-4 shadow-lg" onClick={handleClick}>
            <div className="flex justify-between cursor-pointer ">
                <span className="font-bold text-lg transition duration-200">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {ShowItems && <ItemList items = {data.itemCards}/>}
        </div>
    </div>
}

export default RestaurantCatogory;