import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as n}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form");function u(i){i.preventDefault();const o=document.querySelector('input[type="number"]'),r=document.querySelector('input[name="state"]:checked');if(!r||!o){console.error("Error: Unable to find state of delay or delay input element");return}const s=r.value,t=Number(o.value);new Promise((e,c)=>{setTimeout(()=>{s==="fulfilled"?e(t):s==="rejected"&&c(t)},t)}).then(e=>{n.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{n.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})}m.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers2.js.map