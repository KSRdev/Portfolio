import React from "react";
import Logo from "./logo";
import "../css/footer.css";

export default function Footer() {
  return (
    <section className="pt-24 overflow-hidden" id="Footer">
      <div className="container mx-auto px-4">
      <div className=" mx-8 mb-10 flex justify-center">
        <a className="logo" href="#header">
          <Logo />
        </a>
        </div>
        <ul className="flex flex-wrap justify-center -m-5 pb-8">
          <li className="p-5">
            <a
              className="font-heading text-base linksnav"
              href="#"
            >
              About
            </a>
          </li>
          <li className="p-5">
            <a
              className="font-heading text-base linksnav"
              href="#"
            >
              Projects
            </a>
          </li>
          <li className="p-5">
            <a
              className="font-heading text-base linksnav"
              href="#"
            >
                Skills
            </a>
          </li>
          <li className="p-5">
            <a
              className="font-heading text-base linksnav"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="border-b line-color"></div>
        <p className="text-gray-600 text-center py-8 text-sm">
          © Copyright 2022. All Rights Reserved by KSRDEV.
        </p>
      </div>
    </section>
  );
}
