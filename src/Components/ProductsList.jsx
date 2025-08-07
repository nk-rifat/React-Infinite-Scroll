import { useRef, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadedRef = useRef(null);
 
  return (
    <div>
      <h1>Products List</h1>
      

     <div ref={loadedRef}>Loaded More Products...</div>
    </div>
  );
};

export default ProductsList;
