
gsap.from(".header",{
    scrollTrigger: ".header",
    x:-200,
    opacity:0,
    duration:2,
     
})
gsap.from(".about-content",{
    scrollTrigger: ".about-content",
    x:-200,
    opacity:0,
    duration:2,
    delay:0.11
     
})
gsap.from(".socle-media",{
    scrollTrigger: ".socle-media",
    x:-200,
    opacity:0,
    height:300,
    duration:2,
    delay:0.11
     
})

function scrollfunction (){
    var aboutsection = document.getElementsByClassName("about");
    var projectsection = document.getElementsByClassName("projcts");
    var contectsection = document.getElementsByClassName("contact");

    var navebarLinks = document.querysectionAll(".navebar a");

    if (aboutsection.offseTop <= window.pageYOffset && projectsection.offseTop);
    nevebarfLink[0].classList.remove("active");
    navebarLinks
}
