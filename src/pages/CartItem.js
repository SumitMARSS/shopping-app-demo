
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
import "./CartItem.css";

function CartItem({post}){

    const dispatch = useDispatch();

    function deleteItemCart(){
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className="cartItem">
            <div>
                <img src={post.thumbnail} />
            </div>
            <div>
                <div>
                    <h4> {post.title} </h4>
                </div>
                <div  className="card-descrip">
                    <p> {post.description} </p>
                </div>
                <div className="cart-price-dump">
                    <div className="price">
                        <p> ₹ {post.price} </p>
                    </div>
                    <div>
                        <button onClick={deleteItemCart} >
                            <MdDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;