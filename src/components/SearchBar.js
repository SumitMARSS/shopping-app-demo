import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { AppContext } from "../context/AppContext";


function SearchBar(){

    const {searchProduct, setSearchProduct} = useContext(AppContext);

    const navigate = useNavigate();
    
    function changeHandler(event){
        setSearchProduct(event.target.value);
        console.log("Inside the Ui : ", event.target.value);
    }

    function clickHandler(event){
        event.preventDefault();
        console.log("Finally our data is : ");
        console.log(searchProduct);
        navigate(`/Product`);
    }

    return (
        <div className="searchBar">
            <div>
                <input 
                    type="text" 
                    placeholder="Search your products:"
                    onChange={changeHandler}
                />
            </div>

            <div>
                <button className="search-icon" onClick={clickHandler}>
                    <FaSearch />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;

