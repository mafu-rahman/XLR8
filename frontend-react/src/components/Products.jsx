const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.productId}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Year: {product.modelYear}</p>
          <p>Brand: {product.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
