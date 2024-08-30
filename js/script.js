let hamburger = document.querySelector("#hamburger");
hamburger.onclick = function(){
    let navBar = document.querySelector(".navlist");
    let socialMedia = document.querySelector(".socialmedia");
    let navlinks = document.querySelectorAll(".navlist ul li");
    navBar.classList.toggle("active");
    socialMedia.classList.toggle("active");
}