(()=>{"use strict";$(document).ready((function(){"/Navigation/index.html"!==document.location.pathname&&"/Navigation/"!==document.location.pathname&&"/index.html"!==document.location.pathname||$(".reviews-slider").slick({slidesToShow:3,speed:1e3,autoplay:!0,centerMode:!0,centerPadding:0,pauseOnHover:!1})})),(()=>{const e=document.querySelector(".header"),t=document.querySelectorAll(".header__nav__link"),o=document.querySelector(".header__contacts__block-facebook"),a=document.querySelector(".header__contacts__block-insta"),n=document.querySelector(".header__contacts__block-vk"),c=document.querySelector(".logo__link__img"),i=document.querySelector(".header__nav__link-active");window.addEventListener("scroll",(()=>{let l=window.scrollY;l>1&&l<=500?e.style.transform="translateY(-100px)":l>500?(e.style.transform="translateY(0)",e.classList.add("header-active"),t.forEach((e=>{e.classList.add("header__nav__link-dark"),e.style.color="#000"})),i.classList.add("header__nav__link-active-dark"),o.style.background="url('./img/social/facebook-dark.png') no-repeat center / cover",a.style.background="url('./img/social/insta-dark.png') no-repeat center / cover",n.style.background="url('./img/social/vk-dark.png') no-repeat center / cover",c.style.background="url('./img/logo-dark.png') no-repeat center / cover"):(e.style.transform="translateY(0)",e.classList.remove("header-active"),i.classList.remove("header__nav__link-active-dark"),t.forEach((e=>{e.classList.remove("header__nav__link-dark"),e.style.color="#fff"})),o.style.background="url('./img/social/facebook.png') no-repeat center / cover",a.style.background="url('./img/social/insta.png') no-repeat center / cover",n.style.background="url('./img/social/vk.png') no-repeat center / cover",c.style.background="url('./img/logo.png') no-repeat center / cover")}))})(),(()=>{const e=document.querySelector(".promo__info");window.addEventListener("scroll",(()=>{let t=window.scrollY;"/index.html"!==document.location.pathname&&"/Navigation/index.html"!==document.location.pathname&&"/Navigation/"!==document.location.pathname||(e.style.opacity=t>=20?0:1)}))})(),(()=>{if("/about.html"===document.location.pathname||"/Navigation/about.html"===document.location.pathname){const e=document.querySelector(".info__slider"),t=document.querySelectorAll(".info__slide"),o=document.querySelectorAll(".info__slider__dot");let a=0;t.forEach(((e,t)=>{e.style.transition="opacity 1s",t>0&&(e.style.opacity=0,e.style.visibility="hidden")})),o[a].classList.add("info__slider__dot-active");const n=(e,t)=>{e[t].style.opacity=0},c=(e,t)=>{e[t].style.opacity=1};e.addEventListener("click",(e=>{t.forEach((e=>{e.style.visibility="visible"})),o[a].classList.remove("info__slider__dot-active"),n(t,a),e.target.closest(".info__slider__button-next")&&a++,e.target.closest(".info__slider__button-prev")&&a--,e.target.closest(".info__slider__dot")&&o.forEach(((t,o)=>{t.classList.remove("info__slider__dot-active"),e.target===t&&(a=o,t.classList.add("info__slider__dot-active"))})),a>=t.length&&(a=0),a<0&&(a=t.length-1),c(t,a),o[a].classList.add("info__slider__dot-active")}))}})(),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),500)}})();