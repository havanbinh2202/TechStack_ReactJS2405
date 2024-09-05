import Blog from "../UI/Blog";
import OurProduct from "../UI/OurProducts";
import Tesminal from "../UI/Tesminal";
import Visit from "../UI/Visit";

const Product = () => {

    const products = [
        {
            thumbnail: "img/product-1.jpg",
            name:"Fresh Tomato",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-2.jpg",
            name:"Fresh Orange",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-3.jpg",
            name:"Fresh Banana",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-4.jpg",
            name:"Fresh Fruid",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-5.jpg",
            name:"Fresh Fruid",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-6.jpg",
            name:"Fresh Fruid",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-7.jpg",
            name:"Fresh Fruid",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-8.jpg",
            name:"Fresh Fruid",
            old_price: 29.99,
            price: 19.00
        },
    ]
    return(
        <>
            <OurProduct products={products}/>
            <Visit/>
            <Tesminal/>

        </>
    );
}
export default Product;