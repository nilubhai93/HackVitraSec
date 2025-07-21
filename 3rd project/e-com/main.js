import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

showProductContainer(products);


window.addEventListener("scroll", () => {
    const topBanner = document.querySelector(".top_txt");
    if (window.scrollY > 10) {
        topBanner.style.display = "none";
    } else {
        topBanner.style.display = "flex"; // or "block" based on your layout
    }
});