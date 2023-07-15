(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{_L:()=>I,OP:()=>N,mD:()=>M,sQ:()=>J,yf:()=>F,xS:()=>f,Ac:()=>H});var t=function(e){e.disabled=!0,e.classList.add(H.inactiveButtonClass)},r=function(e){var t=e.querySelector(H.submitButtonSelector),r=Array.from(e.querySelectorAll(H.inputSelector));r.forEach((function(n){n.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(H.inputErrorClass),r.classList.remove(H.errorClass),r.textContent=""}(e,t):function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add(H.inputErrorClass),n.textContent=r,n.classList.add(H.errorClass)}(e,t,t.validationMessage)})(e,n),function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(H.inactiveButtonClass)):(t.disabled=!0,t.classList.add(H.inactiveButtonClass))}(r,t)}))}))};function n(e){e.classList.add("popup_opened"),document.addEventListener("keydown",a)}function o(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&o(document.querySelector(".popup_opened"))}document.querySelectorAll(".popup__close-button").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return o(t)})),t.addEventListener("click",(function(e){return function(e){e.target.classList.contains("popup_opened")&&o(e.target)}(e)}))}));var c={baseUrl:"https://nomoreparties.co/v1/plus-cohort-26",headers:{authorization:"d48850ee-0174-40ac-94a8-4573c8ed93c1","Content-Type":"application/json"}},i=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function u(e,t){return fetch(e,t).then(i)}function l(e){return e.some((function(e){return e._id===f}))}function s(e,t){var r=N.cloneNode(!0),o=r.querySelector(".card__title"),a=r.querySelector(".card__image"),i=r.querySelector(".card__like-button"),s=r.querySelector(".card__delete-button"),d=r.querySelector(".card__like-counter"),p=r.querySelector(".card").dataset.id=e._id;return o.textContent=e.name,a.src=e.link,a.alt=e.name,d.textContent=e.likes.length,l(e.likes)&&i.classList.add("card__like-button_active"),e.owner._id!==t&&r.querySelector(".card").removeChild(s),e.likes.length>0?d.classList.add("card__like-counter_active"):d.classList.remove("card__like-counter_active"),i.addEventListener("click",(function(e){!function(e){if(e.classList.contains("card__like-button_active"))return!0}(i)?function(e){return u("".concat(c.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:c.headers})}(p).then((function(e){d.textContent=e.likes.length,i.classList.add("card__like-button_active"),d.classList.add("card__like-counter_active")})).catch((function(e){return console.log(e)})):function(e){return u("".concat(c.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:c.headers})}(p).then((function(e){d.textContent=e.likes.length,i.classList.remove("card__like-button_active")})).catch((function(e){return console.log(e)}))})),s.addEventListener("click",(function(e){(function(e){return u("".concat(c.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:c.headers})})(p).then((function(t){e.target.closest(".card").remove()})).catch((function(e){return console.log(e)}))})),a.addEventListener("click",(function(){return t=e,I.textContent=t.name,J.src=t.link,J.alt=t.name,void n(F);var t})),r}var d=function(e,t){e.textContent=t?"Сохранение...":"Сохранить"};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f,v,m,y=document.querySelector(".profile"),_=y.querySelector(".profile__name"),h=y.querySelector(".profile__description"),S=y.querySelector(".profile__edit-button"),b=y.querySelector(".profile__avatar-image"),q=y.querySelector(".profile__edit-avatar-button"),k=document.querySelector(".popup_type_update-avatar"),L=k.querySelector("#avatarFormPopup"),C=k.querySelector("#update-avatar-input"),E=k.querySelector("#updateAvatar-save-button"),g=document.querySelector(".popup_type_editProfile"),x=g.querySelector("#editProfileFormPopup"),A=g.querySelector("#profile-name-input"),P=g.querySelector("#description-input"),O=g.querySelector("#editProfile-save-button"),U=document.querySelector(".popup_type_addCard"),j=y.querySelector(".profile__add-button"),w=U.querySelector("#card-name-input"),T=U.querySelector("#card-url-input"),B=U.querySelector("#cardFormPopup"),D=U.querySelector("#addCard-save-button"),M=document.querySelector(".elements-container"),N=document.querySelector("#cardTemplate").content,F=document.querySelector(".popup_type_image-preview"),I=document.querySelector(".popup__image-name"),J=document.querySelector(".popup__image"),H=(document.querySelector(".popup__form").querySelector(".popup__input"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"});v=u("".concat(c.baseUrl,"/users/me"),{headers:c.headers}),m=u("".concat(c.baseUrl,"/cards"),{headers:c.headers}),Promise.all([v,m]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,i=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];_.textContent=o.name,h.textContent=o.about,b.src=o.avatar,function(e,t){e.forEach((function(e){var r=s(e,t);M.prepend(r)}))}(a,f=o._id)})).catch((function(e){console.error(e)})),S.addEventListener("click",(function(){n(g),A.value=_.textContent,P.value=h.textContent})),q.addEventListener("click",(function(){n(k)})),j.addEventListener("click",(function(){n(U)})),x.addEventListener("submit",(function(e){e.preventDefault();var r,n=e.submitter;d(n,!0),(r={name:A.value,about:P.value},u("".concat(c.baseUrl,"/users/me"),{method:"PATCH",headers:c.headers,body:JSON.stringify({name:r.name,about:r.about})})).then((function(e){_.textContent=A.value,h.textContent=P.value,t(O),o(g)})).catch((function(e){console.error(e)})).finally((function(){d(n,!1)}))})),B.addEventListener("submit",(function(e,r){e.preventDefault();var n,a=e.submitter,i={name:w.value,link:T.value,owner:{_id:f},likes:[]};d(a,!0),(n=i,u("".concat(c.baseUrl,"/cards"),{method:"POST",headers:c.headers,body:JSON.stringify({name:n.name,link:n.link})})).then((function(e){var r=s(e);M.prepend(r),B.reset(),t(D),o(U)})).catch((function(e){console.error(e)})).finally((function(){d(a,!1)}))})),L.addEventListener("submit",(function(e){var r;e.preventDefault(),d(E,!0),(r=C.value,u("".concat(c.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:r})})).then((function(e){b.src=C.value,L.reset(),t(E),o(k)})).catch((function(e){console.error(e)})).finally((function(){d(E,!1)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(e){r(e)}))}(H)})();