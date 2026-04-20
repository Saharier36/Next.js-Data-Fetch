import Product from "@/components/Product";

const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products", {next: {revalidate: 20}});
    return res.json()
}

const ProductPage = async() => {
    const products = await getProducts()
    return (
      <div>
        <h2>Products: {products.length}</h2>
        <div className="max-w-6xl py-10 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default ProductPage;