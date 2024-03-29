// start carousel
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const sliderScrollbar = document.querySelector(
    ".container .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  const scrollAmount = imageList.clientWidth * 0.2; // scroll speed here

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      let newPosition = imageList.scrollLeft + scrollAmount * direction;

      if (newPosition < 0) {
        newPosition = maxScrollLeft;
      } else if (newPosition > maxScrollLeft) {
        newPosition = 0;
      }

      imageList.scroll({
        left: newPosition,
        behavior: "smooth",
      });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    // handleSlideButtons();
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
// end carousel

// handle read more

const readMore = document.getElementById("readMore");
const readMore2 = document.getElementById("readMore2");
const overedText = document;
const scrollToTopButton = document.getElementById("scroll-to-top");

// fix over flow card

readMore.addEventListener("click", () => {
  if (readMore.innerText === "...المزيد") {
    document.querySelector(".overed-text").style.display = "inline";
    readMore.innerText = "...عرض اقل";
  } else if (readMore.innerText === "...عرض اقل") {
    document.querySelector(".overed-text").style.display = "none";
    readMore.innerText = "...المزيد";
  }
});
readMore2.addEventListener("click", () => {
  if (readMore2.innerText === "...المزيد") {
    document.querySelector(".overed-text2").style.display = "inline";
    readMore2.innerText = "...عرض اقل";
  } else if (readMore2.innerText === "...عرض اقل") {
    document.querySelector(".overed-text2").style.display = "none";
    readMore2.innerText = "...المزيد";
  }
});

// handle phone click 

const phone = document.querySelectorAll(".phone-num");

phone.forEach((p)=>{
  p.addEventListener("click",(event)=>{
    let phoneNumber = "01021068752";
    let phoneLink = "tel:" + phoneNumber;
    window.open(phoneLink,"_blank")
  })
})

document.querySelectorAll(".whatsapp-btn").forEach(button => {
  button.addEventListener("click", function() {
    let phoneNumber = "01021068752";
    let whatsappLink = "https://wa.me/" + phoneNumber;
    window.open(whatsappLink,"_blank")
  });
});
document.querySelectorAll(".gmail").forEach(button => {
  button.addEventListener("click", function() {
    let email  = "info@ihabadvocate.com";
    let mailtoLink = 'mailto:' + email;
    window.open(mailtoLink,"_blank")
  });
});


// Initialize ScrollReveal


// ScrollReveal().reveal('.scroll-btm',{
//   delay: 200,
//   duration: 1000,
//   origin: 'bottom',
//   distance: '50px',
//   easing: 'ease-in-out',
//   // reset:"true",
  
// });
// ScrollReveal().reveal('.scroll-left',{
//   delay: 200,
//   duration: 1000,
//   origin: 'left',
//   distance: '50px',
//   easing: 'ease-in-out',
  
// });
// ScrollReveal().reveal('.scroll-right',{
//   delay: 200,
//   duration: 1000,
//   origin: 'right',
//   distance: '50px',
//   easing: 'ease-in-out',
  
// });
// ScrollReveal().reveal('.scroll-top',{
//   delay: 200,
//   duration: 1000,
//   origin: 'top',
//   distance: '50px',
//   easing: 'ease-in-out',
  
// });






let scrollRevealInstances = [];

function initScrollReveal() {

    scrollRevealInstances.push(
        ScrollReveal().reveal('.scroll-btm', {
            delay: 200,
            duration: 1000,
            origin: 'bottom',
            distance: '50px',
            easing: 'ease-in-out',
        })
    );

    scrollRevealInstances.push(
        ScrollReveal().reveal('.scroll-left', {
            delay: 200,
            duration: 1000,
            origin: 'left',
            distance: '50px',
            easing: 'ease-in-out',
        })
    );

    scrollRevealInstances.push(
        ScrollReveal().reveal('.scroll-right', {
            delay: 200,
            duration: 1000,
            origin: 'right',
            distance: '50px',
            easing: 'ease-in-out',
        })
    );

    scrollRevealInstances.push(
        ScrollReveal().reveal('.scroll-top', {
            delay: 200,
            duration: 1000,
            origin: 'top',
            distance: '50px',
            easing: 'ease-in-out',
        })
    );
}

function destroyScrollReveal() {

    scrollRevealInstances.forEach(instance => {
        instance.destroy();
    });

    scrollRevealInstances = [];
}

function handleResize() {
    const mediaQuery = window.matchMedia('(max-width: 1300px)'); // Adjust the media query as needed

    if (mediaQuery.matches) {

        destroyScrollReveal();
    } else {
       
        initScrollReveal();
    }
}


handleResize();


window.addEventListener('resize', handleResize);
