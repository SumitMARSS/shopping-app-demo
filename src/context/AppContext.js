import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const searchUrl = "https://dummyjson.com/products/search?q=";

  async function searchFetchUrl() {
    setLoading(true);
    if (searchProduct) {
      try {
        const res = await fetch(`${searchUrl}${searchProduct}`);
        const data = await res.json();
        setPosts(data.products);
      } catch (error) {
        console.error("Error fetching data from searchUrl:", error);
      }
    } else {
      console.log("searchProduct is empty");
    }
    setLoading(false);
  }

  // Add searchProduct to dependency array if you want to reset website each time
  useEffect(() => {
    searchFetchUrl();
  }, []);

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    searchProduct,
    setSearchProduct,
    searchFetchUrl,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
