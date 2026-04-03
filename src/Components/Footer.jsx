import React from "react";
import { FaXTwitter,FaLinkedin,FaLeaf } from "react-icons/fa6";

const Footer = () => {
  const footer_pages_link = [
    { tag: "Home", link: "#" },
    { tag: "Features", link: "#" },
    { tag: "Pricing", link: "#" },
    { tag: "Blog", link: "#" },
  ];
  const footer_information_link = [
    { tag: "Contact", link: "#" },
    { tag: "Privacy", link: "#" },
    { tag: "Terms of use", link: "#" },
    { tag: "404", link: "#" },
  ];
  return (
    <div className="pb-10 text-md">
    <div className="border rounded-3xl bg-white bg-opacity-30  mx-[15%] mt-[15%] p-10  ">
      <div className="flex gap-10 justify-between ">
        <div>
          <h2 className="font-bold text-xl flex items-center gap-2 flex-wrap">
            <FaLeaf /> Dreelio
          </h2>
          <p className="text-gray-600 py-2 mr-[50%]">
            Your favourite business management software. Built for early startup
            founders.
          </p>
          <div className="flex gap-3">
            <FaLinkedin className="bg-black text-white p-2 text-4xl border rounded-full"/> 
            <FaXTwitter className="bg-black text-white p-2 text-4xl border rounded-full"/>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-5">
            <h4 className="font-bold">PAGES</h4>
          {footer_pages_link.map((data) => (
            <a href={data.link} className="text-gray-600">{data.tag}</a>
          ))}
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold">INFORMATION</h4>
          {footer_information_link.map((data) => (
            <a href={data.link} className="text-gray-600">{data.tag}</a>
          ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t-2 border-gray-300 mt-4 pt-4">
        <p className="text-gray-600">© 2025 Dreelio. Created by Leon Chike</p>
        <p className="text-gray-600">Built in</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
