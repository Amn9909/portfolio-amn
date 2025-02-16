"use client";

import { Carousel } from "../../../../components/ui/acernityCarousel";
export function   AskCarousel() {
  // const slideData = [
  //   {
  //     title: "Mystic Mountains",
  //     button: "Explore Component",
  //     src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Urban Dreams",
  //     button: "Explore Component",
  //     src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Neon Nights",
  //     button: "Explore Component",
  //     src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Desert Whispers",
  //     button: "Explore Component",
  //     src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  const slideData = [
    {
      id: 1,
      title: "Coalitionify",
      description:
        "A platform that integrates various services with WebSockets for real-time notifications, authentication, and payment integration using Razorpay.",
      technologies: [
        "Next.js",
        "NestJS",
        "React",
        "Redux",
        "Tailwind CSS",
        "Socket.IO",
        "MongoDB",
        "Docker",
      ],
      features: [
        "Real-time notifications using WebSockets",
        "Authentication and authorization",
        "Razorpay payment gateway integration",
        "Dark mode support",
        "Dynamic UI with shadcn UI components",
      ],
      repo: "https://github.com/yourusername/coalitionify",
      liveDemo: "https://coalitionify.com",
    },
    {
      id: 2,
      title: "AddressBook API",
      description:
        "A backend microservice that manages an address book, handling contact creation, updates, and real-time synchronization with WebSockets.",
      technologies: ["NestJS", "MongoDB", "Mongoose", "Socket.IO", "Redis"],
      features: [
        "CRUD operations for contacts",
        "WebSocket-based real-time updates",
        "JWT authentication",
        "Role-based access control",
      ],
      repo: "https://github.com/yourusername/addressbook-api",
      liveDemo: "https://api.addressbook.com",
    },
    {
      id: 3,
      title: "Interactive Developer Portfolio",
      description:
        "A visually appealing portfolio showcasing projects, skills, and blog posts with animations and dark mode support.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
      features: [
        "Smooth animations using Framer Motion",
        "Dark mode support",
        "Project showcase with live previews",
        "Blog section for tech articles",
      ],
      repo: "https://github.com/yourusername/portfolio",
      liveDemo: "https://yourportfolio.com",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, payments, and real-time order tracking.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Express.js",
        "MongoDB",
        "Razorpay",
      ],
      features: [
        "Product management dashboard",
        "Cart and checkout system",
        "Secure payment integration with Razorpay",
        "Real-time order tracking",
      ],
      repo: "https://github.com/yourusername/ecommerce-platform",
      liveDemo: "https://ecommerce-demo.com",
    },
    {
      id: 5,
      title: "DevConnect - Developer Social Network",
      description:
        "A social platform for developers to share knowledge, post blogs, and connect through messaging.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Node.js"],
      features: [
        "User authentication with Firebase",
        "Real-time messaging",
        "Post and comment system",
        "Profile customization",
      ],
      repo: "https://github.com/yourusername/devconnect",
      liveDemo: "https://devconnect.com",
    },
    {
      id: 6,
      title: "SaaS Dashboard",
      description:
        "A dashboard for monitoring SaaS product performance, including revenue tracking and user analytics.",
      technologies: ["Next.js", "Chakra UI", "PostgreSQL", "NestJS"],
      features: [
        "Graph-based analytics",
        "User subscription management",
        "Dark/light mode",
        "Role-based access control",
      ],
      repo: "https://github.com/yourusername/saas-dashboard",
      liveDemo: "https://saas-dashboard.com",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
