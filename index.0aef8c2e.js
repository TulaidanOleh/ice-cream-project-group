!function(){var e=document.querySelector(".header__menu--js"),t=document.querySelector(".js-open"),o=document.querySelector(".js-close"),c=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.0aef8c2e.js.map
