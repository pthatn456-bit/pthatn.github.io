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