import {  useEffect, useRef, useState } from "react";

const productsPerPage = 10;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadedRef = useRef(null);
  console.log(products)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${page * productsPerPage}`
      );
      const data = await response.json();
      

      if(data.products.length === 0){
        setHasMore(false);
      } else {
        setProducts(prevProducts => [...prevProducts, ...data.products]);
        setPage(prevPage => prevPage + 1);
      }
    };

    const onIntersection = (items) => {
      const loadedItem = items[0];
      if (loadedItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };
    const observer = new IntersectionObserver(onIntersection);

    if (observer && loadedRef.current) {
      observer.observe(loadedRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div>
      <h1>Products List</h1>

      <div ref={loadedRef}>Loaded More Products...</div>
    </div>
  );
};

export default ProductsList;
