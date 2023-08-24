import React from "react";
import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
const SocialContacts = () => {
  const Social = [
    {
      child: (
        <>
          Facebook <FaFacebook size={28} />
        </>
      ),
      href: "https://www.facebook.com/people/CasuallyCool-Dance/100083571760315/?paipv=0&eav=Afay9puTZABvSjBn6df9rHf2Oo3YCBHJU4a6UoJZZTRPcotkiAPea01bf0xMgBDCdcA&_rdr",
      style: "rounded-tr-md",
    },
    {
      child: (
        <>
          Instagram <FaInstagram size={28} />
        </>
      ),
      href: "https://www.instagram.com/casuallycooldance/?fbclid=IwAR0JuU6s2FmvEo-4ykelXSsOfr6iYy_SKw5SeO1lUEgEKrYbccZcttdvdds",
    },
    {
      child: (
        <>
          Discord <FaDiscord size={28} />
        </>
      ),
      href: "https://discord.com/invite/8EvgAcjBws?fbclid=IwAR1vodmIOux-SbIQxfw_NyDuTqyvbZq9wU-qai7nqdvDxFUR9cgQQfOTJlU",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {Social.map(({ child, href, style }) => (
          <li
            className={
              "flex justify-between items-center w-40 h-12 px-4 mx-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-400" +
              " " +
              style
            }
          >
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialContacts;
