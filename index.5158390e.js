!function(){var e,t,n,c,i;e=document.querySelector(".header__menu--js"),t=document.querySelector(".js-open"),n=document.querySelector(".js-close"),c=document.querySelectorAll(".link-close-menu"),i=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")},t.addEventListener("click",i),n.addEventListener("click",i),c.forEach((function(e){e.addEventListener("click",i)})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=index.5158390e.js.map
