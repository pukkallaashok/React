import { CDN_URL } from "./constants";

const ItemList = ({items}) => {
    //console.log(items);
    //return <p>Hii</p>
    return (
    <div>
        {items.map((item)=>(
            <div key={item.card.info.id} className="py-2 m-2 border-b-2 border-gray-200 flex justify-between text-left"> 
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name} -</span>
                        <span> ₹{item.card.info.price ?  item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
               <div className="w-3/12 p-4"> 
                <div className="absolute">
                    <button className="mx-10 p-1 bg-green-100 rounded-lg shadow-lg ">ADD+</button> 
                </div>
                <img src={CDN_URL+item.card.info?.imageId} className="w-full"/>   
               </div>  
            </div> 
        ))}
    </div>
)};

export default ItemList;