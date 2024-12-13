import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=new m(".gallery-item a",{captions:!0,captionDelay:250,captionsData:"alt"});function g(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:f,downloads:d})=>`
    <li class="gallery-item">
      <a href="${i}" class="gallery-link">
        <img  class="gallery-image" 
        src="${o}" 
        alt="${e} 
        "width="360"
        height="200"/>
        <div class="info">
          <p class= "info-title"> Likes: ${t}</p>
          <p class= "info-title">Views: ${a}</p>
          <p class= "info-title">Comments: ${f}</p>
          <p class= "info-title">Downloads: ${d}</p>
        </div>
      </a>
    </li>
    `).join("");u.insertAdjacentHTML("beforeend",r),p.refresh()}function h(s){const r="47491197-d7346e1a6b6c8bc0fb7fb6a4d",o="https://pixabay.com/api/",i=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const c=document.querySelector(".gallery-form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");c.addEventListener("submit",y);function y(s){s.preventDefault();const r=s.currentTarget.elements.query.value.trim();if(!r){n.error({message:"Please enter a correct query"});return}u.innerHTML="",l.classList.remove("hidden"),h(r).then(o=>{if(o.hits.length===0)return n.error({title:"",backgroundColor:"red",messageColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});g(o.hits),c.reset()}).catch(o=>{n.error({backgroundColor:"red",position:"topRight",message:o.message})}).finally(()=>l.classList.add("hidden"))}
//# sourceMappingURL=index.js.map
