
import React, { useState, useEffect, useContext } from 'react';
import Spinner from "./Spinner";
import Card from "./Card";
import "./Home.css";
import { AppContext } from '../context/AppContext';

function Home() {
    const url = "https://dummyjson.com/products";
    const [products, setProducts] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const {loading, setLoading} = useContext(AppContext);

    //fetching all products/posts

    async function fetchProducts() {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        } 
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleFilter = () => {
        // Filter products based on the price range
        const filteredProducts = products.filter((product) => {
            const productPrice = parseFloat(product.price);
            const isPriceInRange = (!minPrice || productPrice >= parseFloat(minPrice)) &&
                                  (!maxPrice || productPrice <= parseFloat(maxPrice));
            return isPriceInRange;
        });

        setProducts(filteredProducts);
    };

    const handleResetFilter = () => {
        // Reset the filter
        setMinPrice('');
        setMaxPrice('');
        fetchProducts();
    };

    return (
        <div className="cards-spinners">
            {/* filter section */}
            <div className="filter-section">
                <label htmlFor="minPrice">Min Price:</label>
                <input
                    type="number"
                    id="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />

                <label htmlFor="maxPrice">Max Price:</label>
                <input
                    type="number"
                    id="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <button onClick={handleFilter} className='filt-button'>Filter</button>
                <button onClick={handleResetFilter} className='filt-button'>Reset Filter</button>
            </div>

            {/* all cards display */}

            {
                loading ? (
                    <Spinner />
                ) : products.length > 0 ? 
                (
                    products.map((product) => <Card post={product} />)
                ) : ( "No products available" )
            }
        </div>
    );
}

export default Home;
