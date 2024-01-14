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
                  Hey there! I&#39;m a huge tech enthusiast and currently employed
                  as a developer at TCS. My ultimate goal is to become a
                  front-end engineer, and I&#39;m working hard towards achieving
                  that. Apart from my passion for technology, I have a deep love
                  for animals, which always brings me joy. I also enjoy
                  traveling to new places, exploring different cultures, and
                  trying out delicious food. Oh, and did I mention that I&#39;m a
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
              <Show>
              <a href="http://">
              <div
                  className="group inline-flex w-full h-14 px-7 items-center justify-center text-base mt-12 font-medium violet-submit transition btn-submit"
                 
                >
                  <span className="mr-2 bg-svg">Download CV</span>
                  <svg
                    className="bg-svg"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"></path>
                  </svg>
                </div>
              </a>
              </Show>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
