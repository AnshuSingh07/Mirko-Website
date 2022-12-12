function onclickmenu() {
  document.getElementById("menu-bar").classList.toggle("change");
}

function topshift() {
  if (screen.width < 768) {
    document
      .getElementById("contactTop-shift")
      .classList.toggle("change-contact");
  }
}
function removeChange() {
  if (screen.width < 768) {
    document
      .getElementById("contactTop-shift")
      .classList.remove("change-contact");
  }
}

// function topshift (){
//   var x=document.getElementById("contactTop-shift");

//   if(screen.width<=768){
//     console.log("anshu");
//     console.log(x.style.marginTop);
//     if(x.style.marginTop==="0"){
//       x.style.marginTop="10rem";
//     }
//     else{
//       x.style.marginTop="0";
//     }
//   }
// }

// var z=true;
// function topShift(){
//   var x=document.getElementById("contactTop-shift");

//   if(z){
//      x.style.marginTop="10rem";
//      z=false;
//   }
//   else{
//      x.style.marginTop="0rem";
//      z=true;
//   }
// }

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
    /* each value defines a particular screen size width */
    200: {
      slidesPerView: 1 /*property for screen size >= 200*/,
    },
    768: {
      slidesPerView: 2 /*property for screen size >= 768*/,
    },
    992: {
      slidesPerView: 3 /*property for screen size >= 992*/,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.onscroll = function () {
  mytopBtn(); // back to top button
};

function mytopBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-button").style.display = "block";
  } else {
    document.getElementById("top-button").style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = "0";
}

AOS.init({
  duration: 1000,
  easing: "ease",
  once: true, // whether animation should happen only once - while scrolling down
});
