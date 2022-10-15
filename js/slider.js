document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const mediaQuerySlider = 1151;

    const sliderParamsMobile = {
      sliderWrap: "js-slider-main",
      cardsContainerName: "js-slider",
      cardsWrapName: "js-slides-wrap",
      card: "slide",
      paginationClassName: "test-pagination",
      navClassName: "test-navigation",
      navBtnClassName: "nav-btn",
      navPrev: "test-prev",
      navNext: "test-next"
    };

    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateSlider(params) {

      params.cardsContainer.classList.add("swiper-container");
      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
        effect: 'fade',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          300: {
            loop: true,
            allowTouchMove: false,
            slidesPerView: 1,
            speed: 4500,
          },
          1151: {
            slidesPerView: 0,
          },
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
            navigation.remove();
          }
        }
      });
    }

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth < mediaQuerySlider &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth > mediaQuerySlider && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsMobile);
    });
  })();
});


// services
document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const mediaQuerySlider = 1151;

    const sliderParamsMobile = {
      sliderWrap: "js-slider-main-1",
      cardsContainerNameServices: "js-slider-1",
      cardsWrapName: "js-slides-wrap-1",
      card: "slide-1",
      paginationClassName: "test-pagination",
      navClassName: "test-navigation",
      navBtnClassName: "nav-btn",
      navPrev: "test-prev",
      navNext: "test-next"
    };

    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateSlider(params) {

      params.cardsWrap.classList.add("swiper-wrapper");
      params.cardsSlider = new Swiper(`.${params.cardsContainerNameServices}`, {
        effect: 'flip',
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },

        breakpoints: {
          300: {
            loop: true,
            allowTouchMove: true,
            slidesPerView: 1,
            speed: 2500,
            spaceBetween: 40,
            // autoHeight: true,
          },
          1151: {
            slidesPerView: 0,
          },
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
            navigation.remove();
          }
        }
      });
    }

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth < mediaQuerySlider &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth > mediaQuerySlider && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsMobile);
    });
  })();
});


// benefits
document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const mediaQuerySlider = 1151;

    const sliderParamsMobile = {
      sliderWrap: "js-slider-main-benefits-1",
      cardsContainerNamebenefitsOne: "js-slider-benefits-1",
      cardsWrapName: "js-slides-wrap-benefits-1",
      card: "slide-benefits-1",
      paginationClassName: "test-pagination",
      navClassName: "test-navigation",
      navBtnClassName: "nav-btn",
      navPrev: "test-prev",
      navNext: "test-next"
    };

    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateSlider(params) {

      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerNamebenefitsOne}`, {
        effect: 'cube',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true,
        },
        breakpoints: {
          300: {
            loop: true,
            allowTouchMove: true,
            slidesPerView: 1,
            speed: 2500,
          },
          1151: {
            slidesPerView: 0,
          },
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
            navigation.remove();
          }
        }
      });
    }

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth < mediaQuerySlider &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth > mediaQuerySlider && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsMobile);
    });
  })();
});

document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const mediaQuerySlider = 1151;

    const sliderParamsMobile = {
      sliderWrap: "js-slider-main-benefits-2",
      cardsContainerNamebenefitsTwo: "js-slider-benefits-2",
      cardsWrapName: "js-slides-wrap-benefits-2",
      card: "slide-benefits-2",
      paginationClassName: "test-pagination",
      navClassName: "test-navigation",
      navBtnClassName: "nav-btn",
      navPrev: "test-prev",
      navNext: "test-next"
    };

    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateSlider(params) {

      params.cardsWrap.classList.add("swiper-wrapper");
      params.cardsSlider = new Swiper(`.${params.cardsContainerNamebenefitsTwo}`, {
        effect: 'cube',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          300: {
            loop: true,
            allowTouchMove: true,
            slidesPerView: 1,
            speed: 2500,
            // spaceBetween: 40,
          },
          1151: {
            slidesPerView: 0,
          },
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
            navigation.remove();
          }
        }
      });
    }

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth < mediaQuerySlider &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth > mediaQuerySlider && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsMobile);
    });
  })();
});


// location
document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const mediaQuerySlider = 1151;

    const sliderParamsMobile = {
      sliderWrap: "js-slider-main-location",
      cardsContainerNameLocation: "js-slider-location",
      cardsWrapName: "js-slides-wrap-location",
      card: "slide-location",
      paginationClassName: "test-pagination",
      navClassName: "test-navigation",
      navBtnClassName: "nav-btn",
      navPrev: "test-prev",
      navNext: "test-next"
    };

    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateSlider(params) {

      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerNameLocation}`, {
        effect: 'cards',
        breakpoints: {
          300: {
            loop: false,
            allowTouchMove: true,
            slidesPerView: 1,
          },
          1151: {
            slidesPerView: 0,
          },
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
            navigation.remove();
          }
        }
      });
    }

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth < mediaQuerySlider &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth > mediaQuerySlider && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsMobile);
    });
  })();
});
