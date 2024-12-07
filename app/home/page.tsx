"use client"
import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import CustomCarousel from "../(components)/Carousel";
import ProfileSection from "../(components)/ProfileSection";
import ContactUs from "../(components)/ContactUs";
import ContactInfo from "../(components)/ContactInfo";
import ProjectCards from "../(components)/ProjectCards";
import { useTheme } from "next-themes";



const Home = () => {

    const { theme } = useTheme()

    const skills = [
        "Next.js",
        "React",
        "Redux",
        "shadcn UI",
        "Tailwind CSS",
        "NestJS",
        "Express.js",
        "Socket.IO",
        "Mongoose",
        "Docker",
        "Swagger",
        "WebSocket Implementation",
        "API Development",
        "Payment gateway Integration",
        "Content Creation",
        "Video Editing",
    ];

    const projects = [
        {
            name: 'Backend Development',
            description:
                'Designed and developed scalable backend systems to support modern web applications. ' +
                'Built microservices using Node.js, Express, and NestJS, incorporating database integration, ' +
                'authentication, and real-time features like WebSocket communication.',
            technologies: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'MySQL','Redis', 'Docker'],
        },
        {
            name: 'Frontend Development',
            description:
                'Created interactive and user-friendly interfaces for web applications. Worked with modern ' +
                'JavaScript frameworks to deliver seamless user experiences, integrating responsive designs ' +
                'and state management for robust functionality.',
            technologies: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Matrial UI', 'shadcn'],
        },
        {
            name: 'Graphics Design',
            description:
                'Produced compelling graphic designs for marketing materials, websites, and branding. ' +
                'Focused on creating visually appealing content that aligns with brand identity and resonates ' +
                'with target audiences.',
            technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
        },
        {
            name: 'Video Editing',
            description:
                'Edited high-quality videos for various purposes, including promotional content, tutorials, ' +
                'and social media. Utilized advanced editing tools to ensure smooth transitions, captivating effects, ' +
                'and professional-grade output.',
            technologies: ['Adobe Premiere Pro', 'After Effects','Cap cut'],
        },
        {
            name: 'Content Creation',
            description:
                'Developed engaging content strategies and delivered high-value written, visual, and multimedia content ' +
                'for blogs, social media, and marketing campaigns. Ensured alignment with SEO principles and audience engagement.',
            technologies: ['WordPress', 'Google Docs', 'Grammarly', 'SEO Tools (Ahrefs, SEMrush)'],
        },
        {
            name: 'Agency Services',
            description:
                'Operated as a one-stop solution for clients, providing end-to-end services ranging from web development ' +
                'to digital marketing and branding. Ensured successful project delivery by collaborating with diverse teams.',
            technologies: ['Asana', 'Slack', 'Google Workspace', 'Notion', 'Zoho CRM'],
        },
    ];


    const profileDetails = {
        name: 'Aman Kazi',
        designation: 'Full-stack Software Developer'
    }

    return (
        <div
            className={`w-full h-full grid grid-cols-3 ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}
        >
            <div className="2xl:grid-cols-3 xl:grid-cols-3 3xs:col-span-3 2xl:col-span-1 sm:col-span-3 xs:col-span-3 xxs:col-span-3 md:col-span-1 lg:col-span-1 ">
                <div className="w-4/4 h-96 overflow-scroll border border-white-900 rounded-md m-2">
                    <ProfileSection skills={skills} profileDetails={profileDetails} />
                </div>
                <div className="w-full flex items-center justify-center overflow-hidden">
                    <CustomCarousel projects={projects} />
                </div>
                <div
                    className={`m-2 border h-38 rounded-md ${theme === 'dark' ? 'border-white-900' : 'border-white-900'}`}
                >
                    <ContactInfo />
                </div>
                <div
                    className={`m-2 border h-36 rounded-md ${theme === 'dark' ? 'border-white-900' : 'border-white-900'}`}
                >
                    <ContactUs />
                </div>
            </div>
            <div className="col-span-2 3xs:col-span-3 xxs:col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
                <div className="m-2">
                    <Card className="p-2 flex items-center justify-between">
                        <CardHeader className="font-extrabold">
                            Aman H Kazi
                            {/* <CardDescription>Search projects</CardDescription> */}
                        </CardHeader>
                    </Card>
                </div>
                <div className="h-3/4">
                    <ProjectCards projects={projects} />
                </div>
            </div>
        </div>
    )
}

export default Home