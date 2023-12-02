import {useState} from "react";


export default function Header() {
  const[mobileOpen,setMobileOpen] =useState(false)
  return (
    <div className="home">
      <a className="skip-to-content" href="#main">Skip to content</a>
      <header className="primary-header flex">
        <div>
          <img className="logo" src="../assets/shared/logo.svg" />
        </div>
        <button className={`mobile-nav ${mobileOpen ? "open" : ""}`} 
        aria-controls="primery"
        onClick={()=> setMobileOpen((preMobileOpen) => !preMobileOpen ) }>
        <span className="sr-only" aria-expanded="false">Menu</span>
        </button>
        
        <nav>
          <ul id="primery" data-visible="false" className={`primery flex underline ${mobileOpen ? "open" : ""}`} >
            <li className="active">
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="#"
              >
                <span aria-hidden="true">00</span>Home
              </a>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="#"
              >
                <span aria-hidden="true">01</span>Destination
              </a>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="#"
              >
                <span aria-hidden="true">02</span>Crew
              </a>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="#"
              >
                <span aria-hidden="true">03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="grid-container grid-container--home" id="main">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white d-block"> Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a className="large-button uppercase ff-serif text-dark bg-white">
            Explore
          </a>
        </div>
      </main>
    </div>
  );
}
