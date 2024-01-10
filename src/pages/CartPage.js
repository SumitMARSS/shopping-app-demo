import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import "./CartPage.css";


function CartPage(){

    const {cart} = useSelector(state => (state));
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount( cart.reduce((acc,curr) => acc+curr.price, 0) );
    }, [cart])

    return (
    <div className="cart-page">
        {
            cart.length > 0 ? 
            (
                <div className="left-right-bar">
                    <div className="cart-page-item">
                        {
                            cart.map((post) => (<CartItem post={post}/>))
                        }
                    </div>

                    <div className="cart-right">
                        <div className="head"> Your Cart </div>
                        <p> Summary</p>
                        <div className="cart-total">
                            <div >Items: <span>{cart.length}</span></div>
                            <div >
                                Total Amount: <span>₹ {totalAmount}</span>
                            </div>
                        </div>
                        <div className="cart-checkout">
                            <button>
                                Checkout Now
                            </button>
                        </div>
                    </div>
                    
                </div>
                

            ) : 
            (
                <div className="empty">
                    <span>"Your Cart is empty!"</span>
                    <NavLink to={"/"} className="nav-shop">
                        <div>Shop Now</div>
                    </NavLink>
                </div>
            )
        }
        
    </div>
    )
}

export default CartPage;