import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Socials = () => {
  const socials = [
    {
      id: "youtube",
      name: "My YouTube",
      username: "The Cutting Edge School",
      description: "Find free crash courses on AI & UX",
      icon: <FaYoutube className="text-red-500 text-3xl" />,
      link: "https://www.youtube.com/@amnak09",
      size: "col-span-2 row-span-2",
    },
    {
      id: "linkedin",
      name: "My LinkedIn",
      username: "Ansh Mehra",
      description: "Connect with me on LinkedIn.",
      icon: <FaLinkedin className="text-blue-600 text-3xl" />,
      link: "https://www.linkedin.com/in/amankaziak",
      size: "col-span-2 row-span-2",
    },
    {
      id: "instagram",
      name: "My Instagram",
      username: "@anshmehra.in",
      description: "Building in public and sharing my journey.",
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      link: "https://www.instagram.com/amn0_9",
      size: "col-span-1",
    },
    {
      id: "twitter",
      name: "My X (Twitter)",
      username: "@anshmehra",
      description: "Sharing insights and thoughts.",
      icon: <FaXTwitter className="text-white text-3xl" />,
      link: "https://twitter.com/amn_ak09",
      size: "col-span-1",
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-4 gap-4 overflow-hidden">
        <Card className="h-[150px] flex justify-center items-center col-span-2">
          <CardContent className="p-2 h-[95%] transition hover:scale-105 hover:shadow-lg">
            <div className=" overflow-hidden border-2 w-full h-full rounded-lg">
              <a
                key={socials[0].id}
                href={socials[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-black p-2 rounded-xl flex flex-col justify-between ${socials[0].size} `}
              >
                <div className="h-[90%]">
                  {socials[0].icon}
                  <div className="text-start">
                    <h3 className="text-white font-bold">{socials[0].name}</h3>
                    <p className="text-gray-400 text-sm">
                      {socials[0].username}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-1">
                  {socials[0].description}
                </p>
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[150px] flex justify-center items-center col-span-1">
          <CardContent className="w-[80%] h-full p-2">
          <div className=" overflow-hidden border-2 w-full h-full rounded-lg">
              <a
                key={socials[0].id}
                href={socials[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-black p-2 rounded-xl flex flex-col justify-between ${socials[0].size} `}
              >
                <div className="h-[90%]">
                  {socials[0].icon}
                  <div className="text-start">
                    <h3 className="text-white font-bold">{socials[0].name}</h3>
                    <p className="text-gray-400 text-sm">
                      {socials[0].username}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-1">
                  {socials[0].description}
                </p>
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className="h-[150px] flex justify-center items-center col-span-1">
          <CardContent className="w-[80%] h-full p-2">
          <div className="overflow-hidden border-2 w-full h-full rounded-lg">
              <a
                key={socials[0].id}
                href={socials[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-black p-2 rounded-xl flex flex-col justify-between ${socials[0].size} `}
              >
                <div className="flex justify-center items-center">
                  {socials[0].icon}
                  {/* <div className="text-start">
                    <h3 className="text-white font-bold">{socials[0].name}</h3>
                    <p className="text-gray-400 text-sm">
                      {socials[0].username}
                    </p>
                  </div> */}
                </div>
                {/* <p className="text-gray-300 text-sm mt-1">
                  {socials[0].description}
                </p> */}
              </a>
            </div>
          </CardContent>
        </Card>

        {/* <a
          key={socials[0].id}
          href={socials[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-black p-6 rounded-xl flex flex-col justify-between ${socials[0].size} transition hover:scale-105 hover:shadow-lg`}
        >
          <div className="flex items-center gap-3">
            {socials[0].icon}
            <div>
              <h3 className="text-white font-bold">{socials[0].name}</h3>
              <p className="text-gray-400 text-sm">{socials[0].username}</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-3">{socials[0].description}</p>
        </a> */}
      </div>
    </div>
  );
};

export default Socials;
