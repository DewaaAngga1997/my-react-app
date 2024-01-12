import Button from "../Elements/Button"
const CartProduct = () => {
    return (
        
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
                <a href="#">
                    <img src="/images/shoes-1.jpg" 
                    alt="product"
                    className="p-8 rounded-t-lg" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-white">
                        Sepatu baru
                        </h5>
                        <p className="text-m text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laborum, autem natus ea fugit deleniti illo quasi! Autem excepturi sapiente dicta dolorem! Impedit unde corrupti architecto? Tempore explicabo omnis qui.
                        </p>
                    </a>
                </div>
                    <div className="flex items-center justify-between px-5 pb-5">
                        <span className="text-xl font-bold text-white">
                        Rp 1.000.000
                        </span>
                        <Button variant="bg-blue-600">Add To Cart</Button>
                    </div>
            </div> 
    )
}


export default CartProduct