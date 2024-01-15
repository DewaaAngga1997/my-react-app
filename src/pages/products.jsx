import { Fragment, useState } from "react";
import CartProduct from "../components/Fragments/CartProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Nike shoes",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
    unde nesciunt, similique reprehenderit officia vel, sint, est hic
    minus aut error maxime illo animi necessitatibus. Earum ipsa doloribus
    cum!`,
  },
  {
    id: 2,
    name: "Adidas shoes",
    price: 1500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
    unde nesciunt, similique reprehenderit officia vel, sint, est hic
    minu`,
  },
  {
    id: 3,
    name: "Adidas kawe",
    price: 500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
    unde nesciunt`,
  },
];

//membuat variabel untuk memanggil di localstorage
const email = localStorage.getItem("email");

const ProductsPage = () => {
  //membuat fungsi usestate untuk cart keranjang belanja
  //state selalu berpasangan ada state dan update'an statenya
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

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
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CartProduct key={product.id}>
              <CartProduct.Header image={product.image} />
              <CartProduct.Body title={product.name}>
                {product.description}
              </CartProduct.Body>
              <CartProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CartProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl text-blue-600 font-bold ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                    <td className="text-center">{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center w-4/6">
        {/* membuat komponen menggunakan class tapi tidak di sarankan */}
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
