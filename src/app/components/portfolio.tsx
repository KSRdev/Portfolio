import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import comingSoon from "../image/coming_soon.jpg";
import Image from "next/image";
import "../css/portfolio.css";

export default function Portfolio() {
  // const sectionRef = useRef(null);
  // const triggerRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const pin = gsap.fromTo(
  //     sectionRef.current,
  //     {
  //       translateX: 0,
  //     },
  //     {
  //       translateX: "-=25%",
  //       ease: "inOut",
  //       duration: 10,
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top top",
  //         end: "+=100%",
  //         scrub: 1,
  //         pin: true,
  //       },
  //     }
  //   );
  //   return () => {
  //     pin.kill();
  //   };
  // }, []);

  return (
    // <section className="py-12 h-screen" id="Portfolio" ref={triggerRef}>
    //   <h1 className="font-heading text-6xl md:text-10xl tracking-tightest about-me text-center">
    //     Latest Projects
    //   </h1>
    //   <div className="horizontal_scroll_container"  ref={sectionRef}>
    //     <div className="scroll_section py-12 md:py-20" >
    //       <div className="container px-4 mx-auto">
    //         <div className="flex flex-wrap mx-3">
    //           <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
    //             <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
    //               <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
    //                 Lorem ipsum dolor sit amet consectut domor
    //               </h2>
    //               <p className="text-xs md:text-base text-blueGray-400 leading-loose">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 luctus eget justo et iaculis.
    //               </p>
    //             </div>
    //             <div className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center">
    //               <a href="http://">gkykytkrykytky</a>
    //             </div>
    //           </div>
    //           <div className="w-full lg:w-2/3 flex flex-wrap px-3">
    //             <Image priority={true} src={comingSoon} alt="" className="imgProject" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="scroll_section py-12 md:py-20">
    //       <div className="container px-4 mx-auto">
    //         <div className="flex flex-wrap mx-3">
    //           <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
    //             <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
    //               <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
    //                 Lorem ipsum dolor sit amet consectut domor
    //               </h2>
    //               <p className="text-xs md:text-base text-blueGray-400 leading-loose">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 luctus eget justo et iaculis.
    //               </p>
    //             </div>
    //             <div className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center">
    //               <a href="http://">gkykytkrykytky</a>
    //             </div>
    //           </div>
    //           <div className="w-full lg:w-2/3 flex flex-wrap px-3">
    //             <Image priority={true} src={comingSoon} alt="" className="imgProject" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="scroll_section py-12 md:py-20">
    //       <div className="container px-4 mx-auto">
    //         <div className="flex flex-wrap mx-3">
    //           <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
    //             <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
    //               <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
    //                 Lorem ipsum dolor sit amet consectut domor
    //               </h2>
    //               <p className="text-xs md:text-base text-blueGray-400 leading-loose">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 luctus eget justo et iaculis.
    //               </p>
    //             </div>
    //             <div className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center">
    //               <a href="http://">gkykytkrykytky</a>
    //             </div>
    //           </div>
    //           <div className="w-full lg:w-2/3 flex flex-wrap px-3">
    //             <Image priority={true} src={comingSoon} alt="" className="imgProject" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      className="py-12 md:py-24 lg:h-screen scale-95 lg:scale-100"
      id="Portfolio"
    >
      <div className="container mx-auto px-4 filters">
        <div className="max-w-lg mx-auto lg:max-w-none mb-20">
          <div className="flex flex-wrap reverse justify-between mx-4 items-end">
            <div className="px-4">
              <ul className="flex flex-wrap -mb-2 items-center justify-end">
                <li className="mb-2 mr-2 sm:mr-8">
                  <button className="inline-block py-2.5 active" data-target="#First">First</button>
                </li>
                <li className="mb-2 mr-2 sm:mr-8">
                  <button className="inline-block py-2.5 linkProject" data-target="#Second">Second</button>
                </li>
                <li className="mb-2 mr-2 sm:mr-8">
                  <button className="inline-block py-2.5 linkProject">Third</button>
                </li>
              </ul>
            </div>
            <div className="px-4 mb-16 2xl:mb-0">
              <div className="inline-flex mx-auto items-start">
                <h1 className="font-heading text-6xl md:text-10xl mb-10 tracking-tightest about-me">
                  Selected projects
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full gap-4 px-4 mb-20 filters__active" data-path="0.0.1.1"  data-content id="First">
          <div className="group block" data-path="0.0.1.1.0">
            <div
              className="relative mb-6 rounded overflow-hidden"
              data-path="0.0.1.1.0.0"
            >
              <div className="absolute h-full w-full bg_transparent"></div>
              <Image
                className="block w-full h-full"
                src={comingSoon}
                alt=""
                data-config-id="auto-img-2-4"
                data-path="0.0.1.1.0.0.1"
              />
            </div>
            <div data-path="0.0.1.1.0.1">
              <div className="mb-2" data-path="0.0.1.1.0.1.0">
                <span
                  className="text-sm font-medium text-coolGray-600"
                  data-config-id="auto-txt-7-4"
                  data-path="0.0.1.1.0.1.0.0"
                >
                  Part-time
                </span>
                <span className="inline-block mx-4" data-path="0.0.1.1.0.1.0.1">
                  <svg
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-2-4"
                    data-path="0.0.1.1.0.1.0.1.0"
                  >
                    <path
                      d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z"
                      fill="#646464"
                      data-path="0.0.1.1.0.1.0.1.0.0"
                    ></path>
                  </svg>
                </span>
                <span
                  className="font-medium text-sm text-coolGray-600"
                  data-config-id="auto-txt-8-4"
                  data-path="0.0.1.1.0.1.0.2"
                >
                  Remote
                </span>
              </div>
              <h3
                className="text-4xl tracking-tight mb-6"
                data-config-id="auto-txt-9-4"
                data-path="0.0.1.1.0.1.1"
              >
                Althhorpe Street Leamigton Spa
              </h3>
              <p
                className="max-w-xl text-coolGray-600"
                data-config-id="auto-txt-10-4"
                data-path="0.0.1.1.0.1.2"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
          </div>
          <div className="group block" data-path="0.0.1.1.0">
            <div
              className="relative mb-6 rounded overflow-hidden"
              data-path="0.0.1.1.0.0"
            >
              <div className="absolute h-full w-full bg_transparent"></div>
              <Image
                className="block w-full h-full"
                src={comingSoon}
                alt=""
                data-config-id="auto-img-2-4"
                data-path="0.0.1.1.0.0.1"
              />
            </div>
            <div data-path="0.0.1.1.0.1">
              <div className="mb-2" data-path="0.0.1.1.0.1.0">
                <span
                  className="text-sm font-medium text-coolGray-600"
                  data-config-id="auto-txt-7-4"
                  data-path="0.0.1.1.0.1.0.0"
                >
                  Part-time
                </span>
                <span className="inline-block mx-4" data-path="0.0.1.1.0.1.0.1">
                  <svg
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-2-4"
                    data-path="0.0.1.1.0.1.0.1.0"
                  >
                    <path
                      d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z"
                      fill="#646464"
                      data-path="0.0.1.1.0.1.0.1.0.0"
                    ></path>
                  </svg>
                </span>
                <span
                  className="font-medium text-sm text-coolGray-600"
                  data-config-id="auto-txt-8-4"
                  data-path="0.0.1.1.0.1.0.2"
                >
                  Remote
                </span>
              </div>
              <h3
                className="text-4xl tracking-tight mb-6"
                data-config-id="auto-txt-9-4"
                data-path="0.0.1.1.0.1.1"
              >
                Althhorpe Street Leamigton Spa
              </h3>
              <p
                className="max-w-xl text-coolGray-600"
                data-config-id="auto-txt-10-4"
                data-path="0.0.1.1.0.1.2"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mb-20" data-path="0.0.1.1"  data-content id="Second">
          <div className="group block" data-path="0.0.1.1.0">
            <div
              className="relative mb-6 rounded overflow-hidden"
              data-path="0.0.1.1.0.0"
            >
              <div className="absolute h-full w-full bg_transparent"></div>
              <Image
                className="block w-full h-full"
                src={comingSoon}
                alt=""
                data-config-id="auto-img-2-4"
                data-path="0.0.1.1.0.0.1"
              />
            </div>
            <div data-path="0.0.1.1.0.1">
              <div className="mb-2" data-path="0.0.1.1.0.1.0">
                <span
                  className="text-sm font-medium text-coolGray-600"
                  data-config-id="auto-txt-7-4"
                  data-path="0.0.1.1.0.1.0.0"
                >
                  Part-time
                </span>
                <span className="inline-block mx-4" data-path="0.0.1.1.0.1.0.1">
                  <svg
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-2-4"
                    data-path="0.0.1.1.0.1.0.1.0"
                  >
                    <path
                      d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z"
                      fill="#646464"
                      data-path="0.0.1.1.0.1.0.1.0.0"
                    ></path>
                  </svg>
                </span>
                <span
                  className="font-medium text-sm text-coolGray-600"
                  data-config-id="auto-txt-8-4"
                  data-path="0.0.1.1.0.1.0.2"
                >
                  Remote
                </span>
              </div>
              <h3
                className="text-4xl tracking-tight mb-6"
                data-config-id="auto-txt-9-4"
                data-path="0.0.1.1.0.1.1"
              >
                Second
              </h3>
              <p
                className="max-w-xl text-coolGray-600"
                data-config-id="auto-txt-10-4"
                data-path="0.0.1.1.0.1.2"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
