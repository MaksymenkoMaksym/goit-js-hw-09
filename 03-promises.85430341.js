var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const l={firstDelay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submit:document.querySelector('[type="submit"]')},{firstDelay:i,step:u,amount:s,submit:a}=l;function c(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o(r.Notify.failure(`Fulfilled promise ${e+1} in ${t}ms`)):n(r.Notify.success(`Rejected promise ${e+1} in ${t}ms`))}),t)}))}a.addEventListener("click",(e=>{e.preventDefault();for(let e=0;e<s.value;e++){const t=+u.value*e;c(e,+i.value+t).then((e=>console.log(e))).catch((e=>{console.log(e)}))}}));
//# sourceMappingURL=03-promises.85430341.js.map
