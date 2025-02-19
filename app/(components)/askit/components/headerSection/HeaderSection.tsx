"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BadgeIcon } from "lucide-react";
import PaperIcon from "@/lib/src/PaperIcon";
import LocationTriggerIcon from "@/lib/src/LocationTriggerIcon";
import { Separator } from "@/components/ui/separator";
import SepratorWithAnimation from "../SepratorWithAnimation";

const HeaderSection = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="text-white w-[50%]"
      >
        <div className="m-2">
          <h1 className="p-2 font-mono text-8xl 3xs:text-5xl xxs:text-7xl xs:text-7xl ">
            Hi, I&apos;m Aman
          </h1>

          <SepratorWithAnimation />
          <h2 className="opacity-80">
            Software developer from pune, product builder & contributor{" "}
          </h2>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "backOut" }}
          className="text-white w-[50%] m-2"
        >
          <Badge>
            <LocationTriggerIcon />
            <span>Pune</span>
          </Badge>

          <Badge className="ml-2">
            <PaperIcon />
            <span>Resume</span>
          </Badge>
        </motion.div>
        <SepratorWithAnimation />

        <div>
          <div className="flex">
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
          <span className="p-2 text-balance opacity-80">
            My name is
            <span className="ml-2 mr-1 text-xl font-bold underline">
              Aman Kazi,
            </span>
            and I&apos;m a passionate software developer with expertise in delivering
            interactive frontends and robust backend solutions. Over the past 2
            years, I have honed my skills in modern JavaScript frameworks like
            React and Next.js, backend technologies such as Node.js and NestJS,
            and databases including MySQL and MongoDB
          </span>
        </div>
        <SepratorWithAnimation />
      </motion.div>
    </div>
  );
};

export default HeaderSection;
