import { useSelector } from "react-redux";
import {Link} from "react-router-dom"; 
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart=()=>{

    const {cart}=useSelector(state =>(state));
    const[totalAmount,setTotalAmount]=useState(0);

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=> acc+curr.price,0)) ;
    },[cart]);





    return (
        <div> 
            {
                cart.length>0 ?(
                    <div className="flex lg:flex-row flex-col max-w-4xl mx-auto items-center mt-[40px] gap-5">
                        <div className="flex flex-col gap-10">
                            {
                                cart.map((item,index)=>(
                                    <div>
                                    <CartItem key={item.id} item={item} itemIndex={index}/>
                                    <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                                    </div>
                                ))
                            }
                        </div>
                        
                            <div className="mx-auto flex flex-col justify-center gap-[400px]">
                                <div>
                                    <div className="text-green-700 font-bold text-lg uppercase   ">YOUR CART</div>
                                    <div className="text-green-700 font-bold text-[45px] uppercase   "> Summary</div>
                                    <p className="text-gray-700 font-bold text-md "> Total Items: {cart.length}</p>
                                </div>

                                <div>
                                    <div className="text-gray-700 font-bold text-md "> Total Amount: $<span className="font-extrabold ">{totalAmount}</span></div>
                                    <button className="text-white border-2 border-green-700  bg-green-700 rounded-full font-bold  text-[20px]
                                        py-3 px-20 uppercase hover:bg-white hover:text-green-700 transition
                                        duration-300 ease-in truncate " >CheckOut Now</button>
                                </div>

                            </div>
                    </div>
                ):
                (
                    <div className="flex  flex-col gap-3 justify-center items-center bg-white w-full h-[100vh] ">
                    <p className="text-black  text-xl font-semibold "> Cart is empty</p>
                    <Link to={"/"}>
                    <button
                    className="text-white border-2 border-green-700  bg-green-700 rounded-full font-bold  text-[17px]
                    py-2 px-10 uppercase hover:bg-white hover:text-green-700 transition
                    duration-300 ease-in truncate "
                    >Shop now</button>
                    </Link>
                    </div>
                )
            }
        </div>
    )
}
export default Cart;
