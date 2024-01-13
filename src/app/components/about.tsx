"use client";
import "../css/about.css";
import { Show } from "@/app/components/reveal";

export default function About() {
  return (
    <section
      className="py-12 md:py-24 lg:h-screen scale-95 lg:scale-100"
      id="About"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-start mb-6">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="lg:max-w-md xl:max-w-xl">
              <h1 className="font-heading text-6xl md:text-10xl mb-10 tracking-tightest about-me">
                About Me
              </h1>
              <Show>
                {/* <div className=" border-gray-100 scale-90">
                  <div className="flex items-center justify-between px-4 py-5 rounded_top bg_white">
                    <span className="text-sm bg_white">@saturn_ui</span>
                    <i className="ri-instagram-line bg_white"></i>
                  </div>
                  <img
                    src="/img/about_img.jpeg"
                    alt=""
                    className="hidden lg:block about__img"
                  ></img>
                  <div className="px-4 pt-4 pb-5 bg_white rounded_down">
                    <span className="block text-s mb-2.5 bg_white">
                      This is example post
                    </span>
                    <div className="flex items-center bg_white">
                      <i className="ri-heart-fill text-red-500 bg_white"></i>
                      <span className="text-sm text-gray-500 bg_white">
                        12.903
                      </span>
                    </div>
                  </div>
                </div> */}
                <img
                  src="/img/about_img.jpeg"
                  alt=""
                  className="hidden lg:block about__img"
                ></img>
              </Show>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md xl:max-w-xl ml-auto mb-20 text-right">
              <Show>
                <p className="text-lg">
                  Hey there! I&apos;m a huge tech enthusiast and currently employed
                  as a developer at TCS. My ultimate goal is to become a
                  front-end engineer, and I&apos;m working hard towards achieving
                  that. Apart from my passion for technology, I have a deep love
                  for animals, which always brings me joy. I also enjoy
                  traveling to new places, exploring different cultures, and
                  trying out delicious food. Oh, and did I mention that I&apos;m a
                  total foodie? Lastly, photography is another hobby of mine
                  that allows me to capture beautiful moments and express my
                  creativity.
                </p>
              </Show>
            </div>
            <ul>
              <Show>
                <li className="flex items-end justify-between mb-6 pb-3 border-b-2 border-black">
                  <span className="text-2xl text-coolGray-600">01</span>
                  <div className="text-right">
                    <span className="block mb-1 text-2xl tracking-tight">
                      <span>7</span>
                    </span>
                    <span>Traveled destinations.</span>
                  </div>
                </li>
              </Show>
              <Show>
                <li className="flex items-end justify-between mb-8 pb-3 border-b-2 border-black">
                  <span className="text-2xl text-coolGray-600">02</span>
                  <div className="text-right">
                    <span className="block mb-1 text-2xl tracking-tight">
                      3
                    </span>
                    <span>Track record of delivering completed projects.</span>
                  </div>
                </li>
              </Show>
              <Show>
                <li className="flex items-end justify-between mb-8 pb-3 border-b-2 border-black">
                  <span className="text-2xl text-coolGray-600">03</span>
                  <div className="text-right">
                    <span className="block mb-1 text-2xl tracking-tight">
                      40 000+
                    </span>
                    <span>It is a long established</span>
                  </div>
                </li>
              </Show>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
