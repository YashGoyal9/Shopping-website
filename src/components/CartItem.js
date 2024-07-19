
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem=({item,itemIndex})=>{


const dispatch=useDispatch();

const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.error("Remove from  cart");
}


    return(
        <div className="flex  justify-between items-center gap-6  max-w-2xl" >
            <div>
                <img className="h-[220px] w-[220px] " src={item.image}/>
            </div>
            
            <div className="flex flex-col gap-3 ">
                <p className="text-gray-700 font-semibold text-[23px]  mt-1  ">{item.title}</p>
                <p className="text-gray-600 font-normal semibold text-[20px]">{item.description.split(" ").splice(0,15).join(" ")+"..."}</p>

                <div className="flex justify-between px-5 pr-20 ">
                    <div>
                        <span className="text-green-600 font-bold">${item.price}</span>
                    </div>
                    <div onClick={removeFromCart} className="bg-red-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                    <RiDeleteBinFill/>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default CartItem;