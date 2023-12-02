import imgProfile from "../image/profile.png";
import Image from "next/image";
import React from "react";
import "../css/hero.css";


export default function Hero() {
  return (
    <section id="Hero" className="h-screen flex flex-col justify-center items-center mt--2 ">
      <div className="ProfileImage grid justify-items-center">
        <div className="profile__border ">
        </div>
        <div className="profile__cont absolute">
          <Image priority={true} src={imgProfile} alt="imgProfile" className="imgProfile" />
        </div>
      </div>
      <div className="mt-9 text-center">
        <h2 className="profile__profession">Developer</h2>
        <h1 className="profile-heading font-bold">The FrontEnd Expert</h1>
        <ul className="profile__social">
          <a href="https://www.behance.net/simoneradaelli" target="_blank" className="profile__social-link">
            <i className="ri-behance-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/kalyan-simone-radaelli" target="_blank" className="profile__social-link">
            <i className="ri-linkedin-box-line"></i>
          </a>
          <a href="https://github.com/KSRdev" target="_blank" className="profile__social-link">
            <i className="ri-github-line"></i>
          </a>
        </ul>
        <a href="#About" className="home__scroll">
          <span className="home__scroll-name">Scroll Down</span>
          <i className='ri-arrow-down-line home__scroll-icon'></i>

        </a>
      </div>
    </section>
  );
}
