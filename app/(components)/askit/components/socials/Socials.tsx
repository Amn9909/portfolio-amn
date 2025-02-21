// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import React from "react";
// import {
//   FaInstagram,
//   FaLinkedin,
//   FaXTwitter,
//   FaYoutube,
// } from "react-icons/fa6";

// const Socials = () => {
//   const socials = [
//     {
//       id: "youtube",
//       name: "My YouTube",
//       username: "The Cutting Edge School",
//       description: "Find free crash courses on AI & UX",
//       icon: <FaYoutube className="text-red-500 text-3xl" />,
//       link: "https://www.youtube.com/@amnak09",
//       size: "col-span-2 row-span-2",
//     },
//     {
//       id: "linkedin",
//       name: "My LinkedIn",
//       username: "Ansh Mehra",
//       description: "Connect with me on LinkedIn.",
//       icon: <FaLinkedin className="text-blue-600 text-3xl" />,
//       link: "https://www.linkedin.com/in/amankaziak",
//       size: "col-span-2 row-span-2",
//     },
//     {
//       id: "instagram",
//       name: "My Instagram",
//       username: "@anshmehra.in",
//       description: "Building in public and sharing my journey.",
//       icon: <FaInstagram className="text-pink-500 text-3xl" />,
//       link: "https://www.instagram.com/amn0_9",
//       size: "col-span-1",
//     },
//     {
//       id: "twitter",
//       name: "My X (Twitter)",
//       username: "@anshmehra",
//       description: "Sharing insights and thoughts.",
//       icon: <FaXTwitter className="text-white text-3xl" />,
//       link: "https://twitter.com/amn_ak09",
//       size: "col-span-1",
//     },
//   ];

//   return (
//     <div className="w-full p-6">
//       <div className="grid grid-cols-4 gap-4 overflow-hidden">
//         {/* yt  */}
//         <Card className="h-[150px] flex justify-center items-center col-span-2">
//           <CardContent className="p-2 h-[95%] transition hover:scale-105 hover:shadow-lg">
//             <div className=" overflow-hidden border-2 w-full h-full rounded-lg">
//               <a
//                 key={socials[0].id}
//                 href={socials[0].link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`bg-black p-2 rounded-xl flex flex-col justify-between ${socials[0].size} `}
//               >
//                 <div className="h-[90%]">
//                   {socials[0].icon}
//                   <div className="text-start">
//                     <h3 className="text-white font-bold">{socials[0].name}</h3>
//                     <p className="text-gray-400 text-sm">
//                       {socials[0].username}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 text-sm mt-1">
//                   {socials[0].description}
//                 </p>
//               </a>
//             </div>
//           </CardContent>
//         </Card>

//         {/* linkedin  */}

//         <Card className="h-[150px] flex justify-center items-center col-span-1">
//           <CardContent className="w-[80%] h-full p-2">
//             <div className=" overflow-hidden border-2 w-full h-full rounded-lg">
//               <a
//                 key={socials[1].id}
//                 href={socials[1].link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`bg-black p-2 rounded-xl flex flex-col justify-between ${socials[1].size} `}
//               >
//                 <div className="h-[90%]">
//                   {socials[1].icon}
//                   <div className="text-start">
//                     <h3 className="text-white font-bold">{socials[1].name}</h3>
//                     <p className="text-gray-400 text-sm">
//                       {socials[1].username}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 text-sm mt-1">
//                   {socials[1].description}
//                 </p>
//               </a>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="h-[150px] 3xs:h-[50px] 3xs:m-0 xs:h-[100px] sm:h-[100px] lg:[100px] md:[100px] xl:[150px] flex justify-center items-center col-span-1 ">
//           <CardContent className="w-[80%] h-full p-0">
//             <div className="overflow-hidden border-2 w-full h-full rounded-lg">
//               <a
//                 key={socials[2].id}
//                 href={socials[2].link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`bg-black rounded-xl flex flex-col justify-between ${socials[2].size} `}
//               >
//                 <div className="h-[90%]">
//                   {socials[2].icon}
//                   <div className="text-start">
//                     <h3 className="text-white font-bold">{socials[2].name}</h3>
//                     <p className="text-gray-400 text-sm">
//                       {socials[2].username}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 text-sm mt-1">
//                   {socials[2].description}
//                 </p>
//               </a>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Socials;



import { Card, CardContent } from "@/components/ui/card";
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
      username: "Amn",
      description: "Find free crash courses on AI & UX",
      icon: <FaYoutube className="text-red-500 text-3xl" />,
      link: "https://www.youtube.com/@amnak09",
      size: "col-span-2 row-span-2",
    },
    {
      id: "linkedin",
      name: "My LinkedIn",
      username: "aman kazi",
      description: "Connect with me on LinkedIn.",
      icon: <FaLinkedin className="text-blue-600 text-3xl" />,
      link: "https://www.linkedin.com/in/amankaziak",
      size: "col-span-2 row-span-2",
    },
    {
      id: "instagram",
      name: "My Instagram",
      username: "amn0_9",
      description: "Building in public and sharing my journey.",
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      link: "https://www.instagram.com/amn0_9",
      size: "col-span-1",
    },
    {
      id: "twitter",
      name: "My X (Twitter)",
      username: "amn_ak09",
      description: "Sharing insights and thoughts.",
      icon: <FaXTwitter className="text-white text-3xl" />,
      link: "https://twitter.com/amn_ak09",
      size: "col-span-1",
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-4 gap-4">
        {socials.map((social) => (
          <Card key={social.id} className="h-[150px] max-w-[320px]:h-[50px] flex justify-center items-center col-span-1 sm:col-span-2">
            <CardContent className="p-2 h-full w-full flex justify-center items-center">
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-full"
              >
                {/* Show only icon on mobile, full content on larger screens */}
                <div className="text-4xl">{social.icon}</div>
                <div className="hidden sm:block text-center">
                  <h3 className="text-white font-bold">{social.name}</h3>
                  <p className="text-gray-400 text-sm">{social.username}</p>
                  <p className="text-gray-300 text-xs mt-1">
                    {social.description}
                  </p>
                </div>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Socials;
