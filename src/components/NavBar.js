import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Icon1 from "../img/Icon1.png"
import { useSelector } from "react-redux";
import "./NavBar.css"
import SearchBar from "./SearchBar";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";


function NavBar(){

    const {cart} = useSelector((state) => state);
    const {logout, token} = useAuth();

    function logoutHandler(){
        toast.success("Log Out Successfully");
        logout();
    }

    return (<div className="nav">

        {/* logo link */}

        <div className="image">
            <NavLink to={"/Home"}>
                <img src={Icon1} />
            </NavLink>
        </div>

        {/* search bar */}

        <div className="nav-search">
            <SearchBar/>
        </div>

        {/* all other useful links */}

        <div className="rest-nav">
            <div  >
                <NavLink to={"/Home"} className="nav-hm">
                    <span>Home</span>
                </NavLink>
            </div>
            <div>
                <NavLink to={"/Cart"} className="nav-cart">
                    
                    <div>
                        <FaShoppingCart />
                    </div>
                    <div className="cnt">
                        {
                            cart.length > 0 ? (<div>{cart.length}</div>) : ("")
                        }
                    </div>
                </NavLink>
            </div>

            <div className="logOut-btn">
                {
                    token && <span onClick={logoutHandler} >Log Out</span>
                } 
            </div>

        </div>
    </div>)
}

export default NavBar;