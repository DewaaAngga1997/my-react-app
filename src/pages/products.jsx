import { Fragment, useEffect, useRef, useState } from "react";
import CartProduct from "../components/Fragments/CartProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";
import getProducts from "../services/product.service";

// const products = [
//   {
//     id: 1,
//     name: "Nike shoes",
//     price: 1000000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
//     unde nesciunt, similique reprehenderit officia vel, sint, est hic
//     minus aut error maxime illo animi necessitatibus. Earum ipsa doloribus
//     cum!`,
//   },
//   {
//     id: 2,
//     name: "Adidas shoes",
//     price: 1500000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
//     unde nesciunt, similique reprehenderit officia vel, sint, est hic
//     minu`,
//   },
//   {
//     id: 3,
//     name: "Adidas kawe",
//     price: 500000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam
//     unde nesciunt`,
//   },
// ];

//membuat variabel untuk memanggil di localstorage
const email = localStorage.getItem("email");

const ProductsPage = () => {
  //membuat fungsi usestate untuk cart keranjang belanja
  //state selalu berpasangan ada state dan update'an statenya
  // const [cart, setCart] = useState([
  //   {
  //     //di bawah ini adalah nilai default
  //     id: 1,
  //     qty: 1,
  //   },
  // ]);

  //membuat useEffect di gunakan untuk update total price
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [products, setProducts] = useState([]);
  //code di bawah ini membuat fungsi DidMount atau perubahan di awal
  useEffect(() => {
    //mengecek data cart di localstorage
    if (localStorage.getItem("cart")) {
      //jika ada data di local storage tampilkan juka tidak tampilkan array kosong (JSON.parse adalah sebuah fungsi mengkonversi sebuah string JSON ke sebuah nilai)
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  //code di bawah ini membuat fungsi dimana kita akan DidUpdate di mana kita akan memantau perubahan statenya yaitu setCart
  useEffect(() => {
    //jika data cart ada lebih dari 0 maka tampilkan jika tidak jangan
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      const sumQty = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      setTotalPrice(sum);
      setTotalQty(sumQty);
      //simpan data cart di local storage (JSON.stringify adalah sebuah fungi mengkorversi sebuah nilai ke string JSON)
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //fungsi hendle to cart
  const handleAddToCart = (id) => {
    //kita cek dulu apakah item id ada di cart
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
  //useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  //hendle tocartreff (perbedaan usestate dan useRef adalah kalo usestate punya setter nya tapi kalo useref ngak)
  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  //kita bisa menggunakan useRef unntuk memanipulasi DOM, dengan cara di bawah ini
  //kita buat variable dengan useRef(null), dan jangan lupa untuk menambahkan ref juga di tag html yang kita ingin manipulasi seperti tag tr di totalprice
  const totalPriceRef = useRef(null);
  //lalu kita gunakan useEffect di bawah ini untuk menaipulasinya
  useEffect(() => {
    //jika data cart ada lebih dari 0 tampilkan
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      //jika tidak maka jangan tampilkan
      totalPriceRef.current.style.display = "none";
    }
    //[cart] di bawah ini adalah dependencynya untuk memantau perubahan cart
  }, [cart]);

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
          {products.length > 0 &&
            products.map((product) => (
              <CartProduct key={product.id}>
                <CartProduct.Header image={product.image} />
                <CartProduct.Body title={product.title}>
                  {product.description}
                </CartProduct.Body>
                <CartProduct.Footer
                  //data di bawah ini di ambil dari proops CartProduct.Footer
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
              {products.length > 0 &&
                cart.map((item) => {
                  {
                    /* kita mencari dari array product yang id nya adalah sama dengan yang ada di dalam cart */
                  }
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                      <td className="text-center">{item.qty}</td>
                      <td>
                        {(product.price * item.qty).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })}
              {/* membuat ref */}
              <tr ref={totalPriceRef}>
                <td colSpan={2}>
                  <b>Total Price</b>
                </td>
                <td className="text-center">
                  <b>{totalQty}</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    })}
                  </b>
                </td>
              </tr>
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
