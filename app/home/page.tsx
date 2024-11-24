"use client"
import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import CustomCarousel from "../(components)/Carousel";
import ProfileSection from "../(components)/ProfileSection";
import ContactUs from "../(components)/ContactUs";
import ContactInfo from "../(components)/ContactInfo";
import { useState } from "react";
import ProjectCards from "../(components)/ProjectCards";



const Home = () => {
    const [searchModal, setSearchModal] = useState(false)

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

    const profileDetails = {
        name: 'Aman Kazi',
        designation: 'Full-stack Software Developer'
    }

    return (
        <div className="w-full h-full grid grid-cols-3">
            <div className="2xl:grid-cols-3 xl:grid-cols-3 3xs:col-span-3 2xl:col-span-1 sm:col-span-3 xs:col-span-3 xxs:col-span-3 md:col-span-1 lg:col-span-1 ">
                <div className="w-4/4 h-96 overflow-scroll border border-white-900 rounded-md m-2">
                    <ProfileSection skills={skills} profileDetails={profileDetails} />
                </div>
                <div className="w-full flex items-center justify-center overflow-hidden">
                    <CustomCarousel skills={skills} />
                </div>
                <div className="m-2 border border-gray-500 opacity-30 h-52 rounded-lg">
                    <ContactInfo />
                </div>
                <div className="m-2 border border-gray-500 opacity-30 h-36 rounded-lg">
                    <ContactUs />
                </div>
                {/* <div className="m-2 border border-gray-500 opacity-30 h-52 rounded-lg">
                    direct contact us
                </div> */}
            </div>
            <div className="col-span-2 3xs:col-span-3 xxs:col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
                <div className="m-2">
                    <Card className="p-2 flex items-center justify-between">
                        <CardHeader>
                            <CardDescription>Search projects</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                {/* <div>
                </div> */}
                  <ProjectCards projects={skills}/>
            </div>
        </div>
    )
}

export default Home