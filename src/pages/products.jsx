import CartProduct from "../components/Fragments/CartProduct"
const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CartProduct>
                <CartProduct.Header image ="/images/shoes-1.jpg" />
                <CartProduct.Body title="Shoes Nike"> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ipsam unde nesciunt, 
                similique reprehenderit officia vel, sint, est hic minus aut error maxime illo animi
                necessitatibus. Earum ipsa doloribus cum! 
                </CartProduct.Body>
                <CartProduct.Footer price="Rp. 1.000.000" />
            </CartProduct>
        </div>
    )
}

export default ProductsPage