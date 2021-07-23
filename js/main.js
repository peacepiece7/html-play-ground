// Visual fade in
const fadeInEl = document.querySelectorAll(".visual .fade-in");

fadeInEl.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});
// Side badge scroll event
const sideBadgeEl = document.querySelector(".side-badge .side-badge__ad");
const pageUpEl = document.querySelector(".side-badge .side-badge__page-up");
// prettier-ignore
window.addEventListener("scroll", _.throttle(handleScrollMove, 500));

function handleScrollMove(event) {
  // else if 2개 사용 불가
  // dealy 1000ms이상시 에러
  if (window.scrollY > 400) {
    gsap.to(sideBadgeEl, 0.5, {
      opacity: 0,
      display: "none",
    });
    gsap.to(pageUpEl, 0.5, {
      opacity: 1,
      display: "flex",
    });
  } else {
    gsap.to(sideBadgeEl, 0.3, {
      opacity: 1,
      display: "block",
    });
    gsap.to(pageUpEl, 0.4, {
      opacity: 0,
      display: "none",
    });
  }
}

pageUpEl.addEventListener("click", handlePageUp);

function handlePageUp() {
  gsap.to(window, 0.6, {
    scrollTo: 0,
  });
}

// sub menu
const subMenuEls = document.querySelectorAll(".sub-menu__inner");

[...document.querySelectorAll(".sub-menu__inner > h4")].forEach((node) => {
  const subMenuInnerEl = node.closest(".sub-menu__inner");
  node.addEventListener("mouseover", function () {
    const flyOutEl = subMenuInnerEl.querySelector(".fly-out");
    flyOutEl.classList.add("active");
  });
  subMenuInnerEl.addEventListener("mouseleave", function () {
    const flyOutEl = subMenuInnerEl.querySelector(".fly-out");
    flyOutEl.classList.remove("active");
  });
});

function showFlyOut() {}

// Promotion section
new Swiper(".promotion .swiper-container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSildes: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
  },
});

// Notice section

new Swiper(".notice .swiper-container", {
  loop: true,
  direction: "vertical",
  autoplay: {
    delay: 3000,
  },
});

// Main cat scroll magic

const mainCatEls = document.querySelectorAll("#animateFadeInside");
const MainCattrigger = document.querySelector(".main-cat-promotion");

mainCatEls.forEach((mainCatEl) => {
  new ScrollMagic.Scene({
    triggerElement: MainCattrigger,
    triggerHook: 0.7,
  })
    .setClassToggle(mainCatEl, "show")
    .addTo(new ScrollMagic.Controller());
});

const catTitleEl = document.querySelectorAll(".choice-cat__title h4");
const catPharsEl = document.querySelector(".choice-cat__title p");
const catListEls = document.querySelectorAll(".choice-cat .cat-list img");
const choiceCatTrigger = document.querySelector(".choice-cat");

catListEls.forEach((catListEls) => {
  new ScrollMagic.Scene({
    triggerElement: choiceCatTrigger,
    triggerHook: 0.9,
  })
    .setClassToggle(catListEls, "show")
    .addTo(new ScrollMagic.Controller());
});

[catTitleEl, catPharsEl].forEach((catEl) => {
  new ScrollMagic.Scene({
    triggerElement: choiceCatTrigger,
    triggerHook: 0.9,
  })
    .setClassToggle(catEl, "show")
    .addTo(new ScrollMagic.Controller());
});
