const pages = {

    // Trang chính
    "trang chủ":"index.html",

    "giới thiệu":"about.html",

    "liên hệ":"contact.html",

    // Môn học
    "toán":"pages/toan.html",

    "toan":"pages/toan.html",

    "hóa":"pages/hoa.html",

    "hoa":"pages/hoa.html",

    "vật lý":"pages/vatly.html",

    "vat ly":"pages/vatly.html",

    "sinh":"pages/sinh.html",

    "tiếng anh":"pages/english.html",

    "anh":"pages/english.html"

};

function searchPage(){

    let keyword = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    if(pages[keyword]){

        window.location.href = pages[keyword];

    }else{

        alert("Không tìm thấy kết quả!");

    }

}

document.getElementById("searchInput")
.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        searchPage();

    }

});
const pages = {
    "toan": "pages/toan/index.html",
    "hoa": "pages/hoa/index.html",
    "van": "pages/van/index.html",
    "ly": "pages/ly/index.html",
    "anh": "pages/anh/index.html"
};

function normalize(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function searchPage() {
    const keyword = normalize(document.getElementById("searchInput").value);

    for (const key in pages) {
        if (keyword.includes(key)) {
            window.location.href = pages[key];
            return;
        }
    }

    alert("Không tìm thấy môn học!");
}

document.getElementById("searchInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        searchPage();
    }
});
