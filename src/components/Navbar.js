import {FaShoppingCart} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar=()=>{

    const {cart}=useSelector(state =>(state));


    return(
        <div>
            <nav className="flex  justify-between  items-center h-20 max-w-6xl mx-auto ">
                <NavLink to="/">
                    <div className="ml-5  ">
                    <img src="https://ecomzy-shopping-cart.vercel.app/logo.png"  className="h-[50px] w-[150px]"/>
                    </div>
                </NavLink>
                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/">
                    <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                    <FaShoppingCart className="relative text-3xl"/>
                    <div>
                        {
                            cart.length>0 &&
                            <span className=" absolute  ml-[13px] -mt-[30px] flex justify-center items-center bg-green-500 rounded-full  w-5 h-5 animate-bounce ">{cart.length}</span>
                        }
                    </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;