const Product = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={product.images} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
