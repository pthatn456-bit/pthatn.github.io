// ==========================
// script.js
// ==========================

// Countdown Flash Sale
function startCountdown() {
    let hours = 1;
    let minutes = 59;
    let seconds = 59;

    const hEl = document.querySelectorAll(".countdown div")[0];
    const mEl = document.querySelectorAll(".countdown div")[1];
    const sEl = document.querySelectorAll(".countdown div")[2];

    setInterval(() => {
        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes < 0) {
            minutes = 59;
            hours--;
        }

        if (hours < 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

        hEl.textContent = String(hours).padStart(2, "0");
        mEl.textContent = String(minutes).padStart(2, "0");
        sEl.textContent = String(seconds).padStart(2, "0");
    }, 1000);
}

// Search focus effect
function searchEffect() {
    const searchBox = document.querySelector(".search-box input");

    searchBox.addEventListener("focus", () => {
        searchBox.parentElement.classList.add("active");
    });

    searchBox.addEventListener("blur", () => {
        searchBox.parentElement.classList.remove("active");
    });
}

// Smooth scroll for menu
function menuScroll() {
    document.querySelectorAll(".menu a").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
        });
    });
}

// Simple product hover effect
function productHover() {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.zIndex = "10";
        });

        card.addEventListener("mouseleave", () => {
            card.style.zIndex = "1";
        });
    });
}

// Auto slider simple
function autoSlider() {
    const slider = document.querySelector(".slider img");

    const images = [
        "images/banner1.jpg",
        "images/banner2.jpg",
        "images/banner3.jpg"
    ];

    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        slider.src = images[index];
    }, 3000);
}

// Init
document.addEventListener("DOMContentLoaded", () => {
    startCountdown();
    searchEffect();
    menuScroll();
    productHover();
    autoSlider();
});
// ==========================
// script.js (tiếp phần mở rộng)
// ==========================

// Mobile menu toggle (nếu có thêm nút sau này)
function mobileMenu() {
    const menu = document.querySelector(".menu");

    const toggleBtn = document.createElement("div");
    toggleBtn.innerHTML = "☰";
    toggleBtn.style.fontSize = "24px";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.display = "none";
    toggleBtn.classList.add("mobile-toggle");

    document.querySelector(".header").prepend(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    function checkScreen() {
        if (window.innerWidth <= 768) {
            toggleBtn.style.display = "block";
        } else {
            toggleBtn.style.display = "none";
        }
    }

    window.addEventListener("resize", checkScreen);
    checkScreen();
}

// Lazy load images simple
function lazyLoadImages() {
    const imgs = document.querySelectorAll("img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute("data-src");
                if (src) img.src = src;
                observer.unobserve(img);
            }
        });
    });

    imgs.forEach(img => observer.observe(img));
}

// Scroll to top button
function scrollTopButton() {
    const btn = document.createElement("button");
    btn.innerText = "↑";
    btn.classList.add("scroll-top");

    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Fake notification popup
function fakeNotify() {
    const notify = document.createElement("div");
    notify.classList.add("notify");
    notify.innerText = "Có người vừa mua sản phẩm!";

    document.body.appendChild(notify);

    setInterval(() => {
        notify.classList.add("show");

        setTimeout(() => {
            notify.classList.remove("show");
        }, 3000);

    }, 8000);
}

// Init extend
document.addEventListener("DOMContentLoaded", () => {
    mobileMenu();
    lazyLoadImages();
    scrollTopButton();
    fakeNotify();
});
// ==========================
// script.js (final phần bổ sung)
// ==========================

// Add smooth reveal on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll(
        ".product-card, .category-item, .brand-grid img, .section-title"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "0.6s ease";
        observer.observe(el);
    });
}

// Add notification styles dynamically
function addNotifyStyle() {
    const style = document.createElement("style");
    style.innerHTML = `
        .scroll-top{
            position:fixed;
            bottom:20px;
            right:20px;
            width:45px;
            height:45px;
            border:none;
            border-radius:50%;
            background:#ffd400;
            font-size:20px;
            cursor:pointer;
            display:none;
            z-index:9999;
        }

        .notify{
            position:fixed;
            bottom:20px;
            left:20px;
            background:#222;
            color:#fff;
            padding:12px 18px;
            border-radius:8px;
            font-size:14px;
            opacity:0;
            transform:translateY(20px);
            transition:0.4s;
            z-index:9999;
        }

        .notify.show{
            opacity:1;
            transform:translateY(0);
        }

        .menu.show{
            display:flex !important;
            flex-direction:column;
            background:#ffd400;
            position:absolute;
            top:100%;
            left:0;
            width:100%;
        }
    `;
    document.head.appendChild(style);
}

// Init final
document.addEventListener("DOMContentLoaded", () => {
    addNotifyStyle();
    revealOnScroll();
});