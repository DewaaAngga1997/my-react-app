import CartProduct from "../components/Fragments/CartProduct";

const products = [
  {
    id: 1,
    name: "Nike shoes",
    price: "Rp. 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
    unde nesciunt, similique reprehenderit officia vel, sint, est hic
    minus aut error maxime illo animi necessitatibus. Earum ipsa doloribus
    cum!`,
  },
  {
    id: 2,
    name: "Adidas shoes",
    price: "Rp. 1.500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
    unde nesciunt, similique reprehenderit officia vel, sint, est hic
    minu`,
  },
  {
    id: 3,
    name: "Adidas kawe",
    price: "Rp. 500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
    unde nesciunt`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CartProduct key={product.id}>
          <CartProduct.Header image={product.image} />
          <CartProduct.Body title={product.name}>
            {product.description}
          </CartProduct.Body>
          <CartProduct.Footer price={product.price} />
        </CartProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
