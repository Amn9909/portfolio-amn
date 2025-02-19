"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BadgeIcon } from "lucide-react";
import PaperIcon from "@/lib/src/PaperIcon";
import LocationTriggerIcon from "@/lib/src/LocationTriggerIcon";
import SepratorWithAnimation from "../SepratorWithAnimation";

const HeaderSection = () => {
  const dawnloadCV = () => {
    alert("file is dawnloading....")
  }
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="p-2 text-white w-[50%] 3xs:w-[100%] xxs:w-[100%] xs:w-[100%] sm:w-[100%] md:w-[50%] xl:w-[50%]"
      >
        {/* heading and sub-title  */}

        <div className="p-2">
          <h1 className="font-mono text-8xl 3xs:text-5xl xxs:text-7xl xs:text-7xl ">
            Hi, I&apos;m
          </h1>
          <h1 className="font-mono text-8xl 3xs:text-5xl xxs:text-7xl xs:text-7xl">
            Aman
          </h1>

          <SepratorWithAnimation />
          <h2 className="opacity-80">
            Software developer from pune, product builder & contributor{" "}
          </h2>
        </div>

        {/* Badges  */}

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "backOut" }}
          className="text-white w-[50%] p-2 flex"
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
            <span className="text-balance opacity-80">
              My name is
              <span className="ml-2 mr-1 text-xl font-bold underline">
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
            My name is
            <span className="ml-2 mr-1 text-xl font-bold underline">
              Aman Kazi,
            </span>
            and I&apos;m a passionate software developer with expertise in
            delivering interactive frontends and robust backend solutions. Over
            the past 2 years, I have honed my skills in modern JavaScript
            frameworks like React and Next.js, backend technologies such as
            Node.js and NestJS, and databases including MySQL and MongoDB
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderSection;
