
import { useContext, useEffect, useState } from "react";
import Spinner from "./Spinner";
import Card from "./Card";
import { AppContext } from "../context/AppContext";


function SearchProduct() {

  //consumption of Context Api
  const {searchFetchUrl, posts,searchProduct, loading} = useContext(AppContext);
  console.log("Finally our data is hjjahj : ", searchProduct);


  //no need directly make change //add dependency in appContext
  // Adding searchProduct to dependency array if we don;t want first time render site until we search
  useEffect(() => {
    searchFetchUrl();
  }, [searchProduct]);

  return (
    <div className="cards-spinners">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        posts.map((post) => <Card key={post.id} post={post} />)
      ) : (
        "No posts exist on the Search Page"
      )}
    </div>
  );
}

export default SearchProduct;
