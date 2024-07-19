

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { add } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";


const Product=({post})=>{

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();


const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.error("Remove from  cart");
}

const addToCart = ()=>{
    dispatch(add(post));
    toast.success("Added to cart");
}
 

    return(
        <div className="flex flex-col items-center justify-between  hover:scale-110 transition
         duration-300 ease-in shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl  ">
            <h2 className="text-gray-700 font-semibold text-lg truncate w-40 mt-1  ">{post.title}</h2>
            <p className="text-gray-400 font-normal w-40 text-[10px]">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            <img className="h-[180px]" src={post.image}/>
            <div className="flex justify-between items-center gap-11 w-full mt-5  ">
                <p className="text-green-600 font-semibold">${post.price}</p>
                <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[13px]
                 p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition
                duration-300 ease-in ">
                    {
                        cart.some((p)=>p.id==post.id)?(<button onClick={removeFromCart}>Remove item </button>):
                        (<button onClick={addToCart}>Add to cart</button>)
                    }
                </button>
            </div>
        </div>
    )
}
export default Product;