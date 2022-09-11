// Responsive Navbar
const nav = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const right_nav = document.querySelector(".right-nav")
const right_nav_child = right_nav.children;

function activate_class() {
    nav.classList.toggle("nav-open");
    right_nav.classList.toggle("right-nav-open");
    hamburger.classList.toggle("hamburger-active");
}

hamburger.addEventListener("click", activate_class)

for (child of right_nav_child) {
    child.addEventListener("click", activate_class)
}


// Auto typing 
var typed = new Typed(".auto-type", {
    strings: ["Coder", "Developer", "Subject Matter Expert", "Freelancer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
})



let skillsSection = document.getElementById("skills");
let aboutSection = document.getElementById("about");
let contactSection = document.getElementById("contact");
let card = document.querySelector(".card");
let message_img = document.querySelector(".message-img");



// Animation on scrolling
document.addEventListener("scroll", function () {

    const clientHeight = document.documentElement.clientHeight;

    const aboutSectionB = aboutSection.getBoundingClientRect().bottom;
    const aboutSectionT = aboutSection.getBoundingClientRect().top;

    const skillsSectionB = skillsSection.getBoundingClientRect().bottom;
    const skillsSectionT = skillsSection.getBoundingClientRect().top;

    const contactSectionB = contactSection.getBoundingClientRect().bottom;
    const contactSectionT = contactSection.getBoundingClientRect().top;

    // About Section
    if (aboutSectionB >= 0) {
        card.style = "animation: cardAnime 1.5s ease-in-out 1;"
    }

    else {
        card.style = "left: 0;"
    }

    if (aboutSectionT >= clientHeight) {
        card.style = "left: 0;"
    }

    // Skill Section
    if (skillsSectionB >= 0) {
        bar1.style = "animation: bar1Animation 1.5s ease-in-out 1;";
        bar2.style = "animation: bar2Animation 1.5s ease-in-out 1;";
        bar3.style = "animation: bar3Animation 1.5s ease-in-out 1;";
        bar4.style = "animation: bar4Animation 1.5s ease-in-out 1;";
        bar5.style = "animation: bar2Animation 1.5s ease-in-out 1;";
    }

    else {
        bar1.style = "width:0;"
        bar2.style = "width:0;"
        bar3.style = "width:0;"
        bar4.style = "width:0;"
        bar5.style = "width:0;"
    }

    if (skillsSectionT >= clientHeight) {
        bar1.style = "width:0;"
        bar2.style = "width:0;"
        bar3.style = "width:0;"
        bar4.style = "width:0;"
        bar5.style = "width:0;"
    }


    // Contact animation
    if (contactSectionB >= 0) {
        console.log("Upper")
        message_img.style = "animation: imgAnime 1.5s ease-in-out  1;";
    }

    else {
        message_img.style = "right: 0; bottom: 0;";
        console.log("Neeche")
    }

    if (contactSectionT >= clientHeight) {
        message_img.style = "right: 0; bottom: 0;";

    }


})

// Scroll to top button
let top_btn = document.querySelector(".top-btn");
top_btn.addEventListener("click", () => {
    window.scroll(0, 0);
})
