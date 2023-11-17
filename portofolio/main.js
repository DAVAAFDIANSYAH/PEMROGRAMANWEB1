document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen <ul>
    var navList = document.querySelector(".sideNav ul");

    // Tambahkan event listener untuk <ul>
    navList.addEventListener("mouseenter", function (event) {
        // Periksa apakah yang di-hover adalah elemen <a>
        if (event.target.classList.contains("navLink")) {
            event.target.classList.add("hover");
        }
    });

    // Tambahkan event listener untuk <ul>
    navList.addEventListener("mouseleave", function (event) {
        // Periksa apakah yang di-hover adalah elemen <a>
        if (event.target.classList.contains("navLink")) {
            event.target.classList.remove("hover");
        }
    });
});
