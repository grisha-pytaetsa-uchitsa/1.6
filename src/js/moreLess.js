import { screenResolution, numberOfCards } from "./constants.js";

console.log(screenResolution.largeWidth);

const rascryt = document.querySelector(".main-button-more--slides");
const slideContainer = document.querySelector(".slider");
const slideBrands = slideContainer.querySelectorAll(".slider__slide");
const scryt = document.querySelector(".main-button-hide--slides");

const slideContainerRepair = document.querySelector(".card-slider");
const slideRepair = slideContainerRepair.querySelectorAll(
  ".card-slider__slide"
);
const rascrytRepair = document.querySelector(
  ".main-button-more--repair-slides"
);
const scrytRepair = document.querySelector(".main-button-hide--repair-slides");

const mainText = document.querySelectorAll(".main-info__text");
const rascrytText = document.querySelector(".main-button-more--text");
const scrytText = document.querySelector(".main-button-hide--text");

const priceList = document.querySelector(".price-list");

const width = document.documentElement.clientWidth;

scrytRepair.classList.add("hidden");
scryt.classList.add("hidden");
scrytText.classList.add("hidden");

const moreBtnFunction = (
  slide,
  minRes,
  maxRes,
  minNum,
  maxNum,
  moreBtn,
  lessBtn
) => {
  if (width >= minRes && width < maxRes) {
    for (let i = minNum; i < slide.length; i++) {
      slide[i].classList.add("hidden");
    }
  }

  if (width >= maxRes) {
    for (let i = maxNum; i < slide.length; i++) {
      slide[i].classList.add("hidden");
    }
  }

  moreBtn.addEventListener("click", function () {
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove("hidden");
    }
    lessBtn.classList.remove("hidden");
    moreBtn.classList.add("hidden");
  });

  lessBtn.addEventListener("click", function () {
    if (width >= minRes && width < maxRes) {
      for (let i = minNum; i < slide.length; i++) {
        slide[i].classList.add("hidden");
      }
    }

    if (width >= maxRes) {
      for (let i = maxNum; i < slide.length; i++) {
        slide[i].classList.add("hidden");
      }
    }
    moreBtn.classList.remove("hidden");
    lessBtn.classList.add("hidden");
  });
};

//

moreBtnFunction(
  slideBrands,
  screenResolution.mediumWidth,
  screenResolution.largeWidth,
  numberOfCards.brandsMediumWidth,
  numberOfCards.brandsLargeWidth,
  rascryt,
  scryt
);

moreBtnFunction(
  slideRepair,
  screenResolution.mediumWidth,
  screenResolution.largeWidth,
  numberOfCards.devicesMediumWidth,
  numberOfCards.devicesLargeWidth,
  rascrytRepair,
  scrytRepair
);

moreBtnFunction(
  mainText,
  200,
  screenResolution.largeWidth,
  numberOfCards.textMediumWidth,
  numberOfCards.textLargeWidth,
  rascrytText,
  scrytText
);

//

//

const swiperFunction = (slider) => {
  if (width < screenResolution.mediumWidth) {
    new Swiper(slider, {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: "auto",
      spaceBetween: 16,
    });
  }
};

swiperFunction(slideContainer);
swiperFunction(slideContainerRepair);
swiperFunction(priceList);
