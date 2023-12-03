import ProductCard from "./ProductCard";

const Products = ({ products, onShowLogin, onShowSignup }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard 
          key={product.productId} 
          product={product} 
          onShowLogin={onShowLogin} 
          onShowSignup={onShowSignup} 
        />
      ))}
    </div>
  );
};

export default Products;
