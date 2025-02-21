"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BadgeIcon } from "lucide-react";
import PaperIcon from "@/lib/src/PaperIcon";
import LocationTriggerIcon from "@/lib/src/LocationTriggerIcon";
import SepratorWithAnimation from "../SepratorWithAnimation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePicImg from "../../../../asset/profile-pic.jpg";
import Socials from "../socials/Socials";

const HeaderSection = () => {
  const dawnloadCV = () => {
    const link = document.createElement("a");
    link.href = `public\Aman h kazi software developer 2025.pdf`; // Ensure your file is in the public folder
    link.download = "Aman_Kazi_Resume.pdf"; // Custom filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="p-2"
      >
        {/* heading and sub-title  */}

        <div className="p-2 flex">
          <div className="w-[70%]">
            <h1 className=" text-4xl 3xs:text-4xl xxs:text-6xl xs:text-5xl ">
              Hi, I&apos;m
            </h1>
            <h1 className="font-sans text-8xl font-bold 3xs:text-5xl xxs:text-7xl xs:text-7xl">
              Aman
            </h1>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="w-[30%]"
          >
            <Avatar className="w-30 h-30">
              <AvatarImage src={profilePicImg.src} alt="@shadcn" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
        <div>
          <SepratorWithAnimation />
          <h2 className="opacity-80">
            Software developer from pune, product builder & contributor{" "}
          </h2>
        </div>

        <div>
          {/* Badges  */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "anticipate" }}
            className="p-2 flex items-center justify-start"
          >
            <Badge>
              <LocationTriggerIcon />
              <span>Pune</span>
            </Badge>

            <Badge className="ml-2" onClick={dawnloadCV}>
              <PaperIcon />
              <span>Resume</span>
            </Badge>
          </motion.div>

          <SepratorWithAnimation />
        </div>

        <div>
          {/* about section  */}

          <div className="flex p-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                delay: 2,
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="mr-2"
            >
              <BadgeIcon color="green" />
            </motion.div>
            <h2 className="font-bold underline">About</h2>
          </div>

          <SepratorWithAnimation />

          {/* about section description */}

          <div className="p-2">
            <span className="text-balance opacity-80  ml-10">
              My name is
              <span className="ml-2 mr-1  text-sm font-bold underline">
                Aman Kazi,
              </span>
              and I&apos;m a passionate software developer with expertise in
              delivering interactive frontends and robust backend solutions.
              Over the past 2 years, I have honed my skills in modern JavaScript
              frameworks like React and Next.js, backend technologies such as
              Node.js and NestJS, and databases including MySQL and MongoDB
            </span>
          </div>
        </div>

        <SepratorWithAnimation />

        {/* experties title section */}

        <div className="flex p-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              delay: 2,
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="mr-2"
          >
            <BadgeIcon color="green" />
          </motion.div>
          <h2 className="ml-2 font-bold underline">Professional experince</h2>
        </div>

        <SepratorWithAnimation />

        {/* Expertise section description */}

        <div className="p-2">
          <span className="text-balance opacity-80">
            <span className="font-bold underline  text-sm ml-10 mr-2"></span>I
            am a{" "}
            <span className="font-bold underline  text-sm ml-2 mr-2">
              software developer
            </span>
            with over
            <span className="font-bold underline  text-sm ml-2 mr-2">
              two years of experience
            </span>
            delivering
            <span className="font-bold underline  text-sm ml-2 mr-2">
              interactive front-end
            </span>
            interfaces and robust back-end solutions. I specialize in frameworks
            like
            <span className="font-bold underline  text-sm ml-2 mr-2">
              React with Shadcn and Tailwind CSS
            </span>
            My proficiency with
            <span className="font-bold underline  text-sm ml-2 mr-2">
              Redux Toolkit
            </span>
            and core React concepts like hooks, components, and props ensures
            seamless state management On the back-end, I excel in developing
            microservices using
            <span className="font-bold underline  text-sm ml-2 mr-2">
              Node.js, Express, and NestJS
            </span>
            with hands-on experience in databases such as
            <span className="font-bold underline  text-sm ml-2 mr-2">
              MySQL, MongoDB
            </span>
            utilizing ORM tools like
            <span className="font-bold underline  text-sm ml-2 mr-2">
              Sequelize and Mongoose
            </span>{" "}
            I am skilled in implementing
            <span className="font-bold underline  text-sm ml-2 mr-2">
              authentication, authorization
            </span>
            and data manipulation strategies, and integrating third-party
            services, including
            <span className="font-bold underline text-sm ml-2 mr-2">
              Zoho Inventory, AWS SNS, Redis, S3, Google SMTP, and Socket.IO for
              real-time communication
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderSection;
