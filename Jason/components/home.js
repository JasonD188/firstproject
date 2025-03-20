document.addEventListener("DomContentLoaded", function (){

alert("Welcome to Sherap's Homade Kitchentte! Enjoy your visit");
});
document.querySelector("nav ul li a").array.forEach(link => {
    link.addEventListener("click",function (event) {
        event.preventDefault();
        
        let targetId = this.getAttribute("href").split(".html") [0];
        let targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo ( {
            top: targeSection.offsetTop - 50,
            behavior:"smooth"

            });
        } else {
            window.location.herf =  this.href;
        }
    });
    
});