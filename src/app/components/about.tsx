"use client";
import "../css/about.css";
import { Show } from "@/app/components/reveal";

export default function About() {
  return (
    <section
      className="py-12 md:py-24 h-screen scale-95 lg:scale-100"
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
                  KW70 Fix is a leading real estate investment firm in the
                  Americas, headquartered in New York with offices in London,
                  Chicago, Barcelona, Vienna, Rome, Las Vegas. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Ea repudiandae porro
                  asperiores repellendus ducimus molestiae est nulla distinctio
                  consequatur expedita voluptas ad accusamus laboriosam, sunt
                  magnam obcaecati cum ipsum! Aliquam.
                </p>
              </Show>
            </div>
            <ul>
              <Show>
                <li className="flex items-end justify-between mb-6 pb-3 border-b-2 border-black">
                  <span className="text-2xl text-coolGray-600">01</span>
                  <div className="text-right">
                    <span className="block mb-1 text-2xl tracking-tight">
                      <span>20+</span>
                      <span className="text-2xl">m</span>
                      <sup>2</sup>
                    </span>
                    <span>It is a long established</span>
                  </div>
                </li>
              </Show>
              <Show>
                <li className="flex items-end justify-between mb-8 pb-3 border-b-2 border-black">
                  <span className="text-2xl text-coolGray-600">02</span>
                  <div className="text-right">
                    <span className="block mb-1 text-2xl tracking-tight">
                      500+
                    </span>
                    <span>It is a long established</span>
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
