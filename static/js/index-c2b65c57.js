import{r as e,c as t,w as r,o,a as n,b as s,T as i,d as a,e as l,f as c,g as u}from"./vue-a0de76f8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m=(e,t)=>{const r=e.__vccOpts||e;for(const[o,n]of t)r[o]=n;return r};const d=m({},[["render",function(a,l){const c=e("router-view");return o(),t(c,{key:a.$route.fullPath},{default:r((({Component:e})=>[n(i,{name:"fade",mode:"out-in"},{default:r((()=>[(o(),t(s(e)))])),_:2},1024)])),_:1})}]]),p={},f=function(e,t,r){if(!t||0===t.length)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if(e=function(e,t){return new URL(e,t).href}(e,r),e in p)return;p[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(!!r)for(let r=o.length-1;r>=0;r--){const n=o[r];if(n.href===e&&(!t||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,r)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},h={path:"/",component:a((()=>f((()=>import("./index-5712bffc.js")),["./index-5712bffc.js","./vue-a0de76f8.js"],import.meta.url))),children:[{path:"/",component:a((()=>f((()=>import("./home-d5fb9c7b.js")),["./home-d5fb9c7b.js","./vue-a0de76f8.js"],import.meta.url))),meta:{isHome:!0}}]},_={path:"/user",component:a((()=>f((()=>import("./index-f0dc5e9a.js")),["./index-f0dc5e9a.js","./vue-a0de76f8.js"],import.meta.url))),children:[{path:"/user",name:"用户首页",component:a((()=>f((()=>import("./user-3575bfb2.js")),["./user-3575bfb2.js","./vue-a0de76f8.js"],import.meta.url))),meta:{requiresAuth:!0}}]},E=[{path:"/login",component:a((()=>f((()=>import("./login-952fdfeb.js")),["./login-952fdfeb.js","./vue-a0de76f8.js"],import.meta.url)))},_,h],y=l({history:c(),routes:E});y.beforeEach(((e,t,r)=>{window.scrollTo(0,0);e.matched.some((e=>e.meta.requiresAuth))?r("/login"):r()}));const g=u(d);g.use(y),g.mount("#app");export{m as _};