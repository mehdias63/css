import React from 'react'

export default function Index() {
    const nav = document.querySelector(".primery")
  const navToggle = document.querySelector(".mobile-nav")
  navToggle.addEventListener("click", ()=>{
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);}
  })
  return (
    <div>index</div>
  )
}
