import { Fragment } from "react";
import CartProduct from "../components/Fragments/CartProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

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

//membuat variabel untuk memanggil di localstorage
const email = localStorage.getItem("email");

const ProductsPage = () => {
  //membuat fungsi hendle Logout
  const handleLogout = () => {
    //menghapus data di localstorage email dan password
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="bg-red-600 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="h-3/4 flex flex-wrap">
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
        <div className="w-1/4"></div>
      </div>
      <div className="flex w-100 justify-center">
        {/*componen counter di bawah menggunakan class componen */}
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
