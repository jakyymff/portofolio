(function () {
      "use strict";

      const swiper = new Swiper('.swiper', {
            navigation: {
                  nextEl: '.project-nav-item-next',
                  prevEl: '.project-nav-item-prev',
            }
      });

      // replace all elements that have a data-feather attribute with SVG markup
      // corresponding to their data-feather attribute value.
      feather.replace();

})();
