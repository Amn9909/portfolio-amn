"use client";
import React from "react";
import { FloatingDock } from "../../../../../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin
} from "@tabler/icons-react";
import ThemeSwitcher from "@/app/(toggleDarkMode)/ThemeSwitcher";
import { motion } from "framer-motion";
export function AppleFloatingDock() {
  const links = [
    {
      title: "Theme",
      icon: <ThemeSwitcher />,
      href: "/",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/home",
    },
    {
      title: "About",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },

    {
      title: "Blogs",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
    {
      title: "Newsletter",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/newsletter",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/amn_ak09",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Amn9909",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/amankaziak",
    },
  ];
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Start 100px below with 0 opacity
      animate={{ y: 0, opacity: 1 }} // Move to normal position with full opacity
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
      className="fixed bottom-0 left-0 right-0 text-white h-16 flex justify-center items-center rounded-xl"
    >
      <FloatingDock items={links} />
    </motion.div>
  );
}
