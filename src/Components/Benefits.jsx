import React from "react";
import blogimg1 from "../assets/blog_img_1.svg";
import list1 from "../assets/blogList1.svg";
import list2 from "../assets/blogList2.svg";
import list3 from "../assets/blogList3.svg";
import list4 from "../assets/blogList4.svg";
import list5 from "../assets/blogList5.svg";
import list6 from "../assets/blogList6.svg";
import list7 from "../assets/blogList7.svg";
import list8 from "../assets/blogList8.svg";

import { FaHandshake, FaLanguage, FaLayerGroup } from "react-icons/fa6";


const Benefits = () => {
  const BenefitsList1 = [
    {
      title: "Smart, flexible, and built around your business workflow",
      img: [blogimg1],
      heading: "Personalize every detail,",
      text: "From branding and interface layout to colors and menus, so Dreelio feels like an extension of your brand.",
    },
    {
      title: "Integrates seamlessly with the tools you already use",
      img: [list1, list2, list3, list4, list5, list6, list7, list8],
      heading: "Seamless integrations.",
      text: "Plug Dreelio into the tools you love. Set up automations, sync your data, and make your systems work smarter together.",
    },
  ];

  const benefitsList2 = [
    {
      icon: <FaHandshake />,
      title: "Collaborate in realtime",
      text: "Keep every conversation in sync use comments, messages, and project chats to stay on the same page.",
    },
    {
      icon: <FaLanguage />,
      title: "Speaks your language",
      text: "Set your language, currency, time, and date preferences for a seamless experience that feels truly local.",
    },
    {
      icon: <FaLayerGroup />,
      title: "View things your way",
      text: "Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.",
    },
  ];

 

  return (
    <div id="benefits" className="mx-[5%] xl:mx-[15%] mt-[10%]">
      <div className="text-center">
        <h5 className="text-md xl:text-lg text-gray-500 font-bold">FEATURES</h5>
        <h2 className="font-semibold text-3xl xl:text-5xl py-2">
          Built for freelancers,{" "}
        </h2>
        <h2 className="font-semibold text-3xl xl:text-5xl py-2">
          powered by simplicity
        </h2>
      </div>
      <div className="grid xl:grid-cols-2 gap-5 mt-5">
        {BenefitsList1.map((data, index) => (
          <div
            key={index}
            className="bg-[#F0EAE5] p-6 rounded-2xl flex gap-20 flex-wrap flex-grow"
          >
            <h3 className="text-3xl font-bold py-5">{data.title}</h3>
            <div className="flex flex-wrap gap-3">
              {data.img.map((dataimg, index) => (
                <img key={index} src={dataimg} />
              ))}
            </div>

            <span className="text-xl text-gray-500">
              <strong>{data.heading}</strong>
              {data.text}
            </span>
          </div>
        ))}
      </div>
      <div className="grid xl:grid-cols-3 mt-5 gap-5">
        {benefitsList2.map((data, index) => (
          <div key={index} className="bg-[#F0EAE5] flex flex-col rounded-2xl p-10 flex-grow">
            <div className="bg-white rounded-full w-fit p-2 mb-[15%]">
              <p className="text-3xl">{data.icon}</p>
            </div>
            <h2 className="font-bold text-xl my-3">{data.title}</h2>
            <p className="text-lg text-gray-600">{data.text}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Benefits;
