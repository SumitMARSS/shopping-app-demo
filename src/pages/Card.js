import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
import "./Card.css";
import RatingStar from "./Rating";

function Card({post}){

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    


    function removeFromCart(){
        //for removal only id is enough
        dispatch(remove(post.id));
        toast.error("Item removed to Cart");
    }

    function addToCart(){
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    // card details

    return (
        <div className="card-item">
            <div className="card-title" >
                <h4> {post.title} </h4>
            </div>
            <div className="card-descrip">
                <p> {post.description} </p>
            </div>
            <div className="img-container">
                <img src={post.thumbnail} alt="img" />
            </div>

            <div className="all-related-info">
                <div className="disc">
                    <p > <span> {post.discountPercentage}% </span>   <br/> discount </p>
                </div>
                <div className="rating">
                    <RatingStar rating={post.rating} />
                </div>
                <div className="stock">
                    <p> <span>{post.stock} </span> <br/> left </p>
                </div>
            </div>

            <div className="price-tag">
                <div className="price">
                    <p> ₹ {post.price} </p>
                </div>
                <div className="add-to-cart">
                    {
                        cart.some((p) => p.id == post.id) ? 
                        (
                            <button onClick={removeFromCart} >
                                Remove Item
                            </button>
                        ): 
                        (
                            <button onClick={addToCart} >
                                Add To Cart
                            </button>
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Card;