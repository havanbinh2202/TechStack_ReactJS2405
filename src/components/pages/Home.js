import Blog from "../UI/Blog";
import HomeAbout from "../UI/HomeAbout";
import Tesminal from "../UI/Tesminal";
import Visit from "../UI/Visit";
import HomeFeature from "../UI/HomeFeature";
import OurProduct from "../UI/OurProducts";

const Home = () => {
    const about_me = "Besst Organic food in the word";
    const desc_txt = "Uống nước muối vào buổi sáng sẽ đặc biệt có lợi cho những người ";
    const fas = [
        "Tempor erat elitr rebum at clita",
        "Aliqu diam amet diam et eos",
        "Clita duo justo magna dolore erat amet"
    ];

    const features = [
        {
            icon:"img/icon-1.png",
            label:"Natural Process",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."
        },
        {
            icon:"img/icon-1.png",
            label:"Organic Products",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."
        },
        {
            icon:"img/icon-1.png",
            label:"Biologically Safe",
            text:"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."
        }
    ]
    
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
            <HomeAbout label={about_me} sub_title ={desc_txt} list = {fas}><i>Hello World!</i></HomeAbout>
            <HomeFeature features={features} title="Our Features"/>
            <OurProduct products={products}/>
            <Visit/>
            <Tesminal/>
            <Blog/>
        </>
    );
}
export default Home;