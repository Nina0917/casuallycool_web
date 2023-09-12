import { useState } from "react";
import Logo from "../assets/avatar_white.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="z-20 w-full bg-gray-900 ">
      <div
        id="footer-center"
        class="mx-auto px-10 pt-10 rounded-lg shadow sm:px-12 xl:max-w-6xl"
      >
        <div class="sm:flex sm:items-center sm:justify-between">
          <div id="Contact">
            <p className="text-2xl text-zinc-50 font-semibold ml-2">
              Contact Us
            </p>
            <ul class="list-outside my-6 sm:mb-0">
              <li className="flex items-center mb-3">
                <ArrowTopRightOnSquareIcon className="text-gray-400 h-6 w-6 inline"></ArrowTopRightOnSquareIcon>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScPG6-hkEi2OUrNrxsUaZxOdsSEnYQv6sKpG-dykJuGD-yV8w/viewform"
                  class="ml-4 text-md text-gray-400 hover:underline md:ml-6 dark:text-gray-400"
                >
                  Weekly Dance Classes’ Feedback
                </a>
              </li>
              {/* <li className="flex items-center">
                <ArrowTopRightOnSquareIcon className="text-gray-400 h-6 w-6 inline"></ArrowTopRightOnSquareIcon>
                <a
                  href="#"
                  class="ml-4 text-md text-gray-400 hover:underline md:ml-6 dark:text-gray-400"
                >
                  Performance Opportunities
                </a>
              </li> */}
            </ul>
          </div>

          <div id="logo" class="hidden md:flex items-center mb-4 sm:mb-0">
            <img
              src={Logo}
              style={{ width: "100px", height: "100px" }}
              class="mr-4 h-8 rounded-full"
            />
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://flowbite.com"
            target="_blank"
            class="hover:underline"
          >
            Casually Cool™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
