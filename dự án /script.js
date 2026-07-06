const slides = [
    "images/banner-main.jpg",
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg"
];

let currentSlide = 0;

const sliderImage = document.querySelector(".slider img");
const sliderItems = document.querySelectorAll(".slider-info .item");

function showSlide(index) {
    currentSlide = index;

    if (sliderImage) {
        sliderImage.src = slides[currentSlide];
    }

    sliderItems.forEach((item, i) => {
        if (i === currentSlide) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

sliderItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        showSlide(index);
    });
});

setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}, 3000);

showSlide(0);

const products = document.querySelectorAll(".product");

products.forEach(product => {

    product.addEventListener("mouseenter", () => {
        product.style.transform = "translateY(-8px)";
        product.style.boxShadow = "0 12px 25px rgba(0,0,0,.2)";
    });

    product.addEventListener("mouseleave", () => {
        product.style.transform = "";
        product.style.boxShadow = "";
    });

});

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        products.forEach(product => {

            const name = product.querySelector("h3").textContent.toLowerCase();

            if (name.includes(keyword)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

}

const menuItems = document.querySelectorAll(".menu li a");

menuItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
        item.style.color = "#ff0000";
    });

    item.addEventListener("mouseleave", () => {
        item.style.color = "";
    });

});

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header-main");

    if (window.scrollY > 80) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "0";
        header.style.width = "100%";
        header.style.zIndex = "999";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.15)";
    } else {
        header.style.position = "";
        header.style.top = "";
        header.style.left = "";
        header.style.width = "";
        header.style.zIndex = "";
        header.style.boxShadow = "";
    }

});