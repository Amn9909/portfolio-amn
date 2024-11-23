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
        <div className="grid lg:grid-cols-3">
            <div className="col-span-1">
                <div className="h-96 overflow-scroll border border-white-900 rounded-md m-2">
                    <ProfileSection skills={skills} profileDetails={profileDetails} />
                </div>
                <div className="xl:w-3/4 lg:w-2/4 md:w-3/4 mx-auto p-2">
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
            <div className="col-span-2">
                <div className="m-2">
                    <Card className=" p-2 flex items-center justify-between">

                        <CardHeader>
                            <CardDescription>Search projects</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                  <ProjectCards projects={skills}/>
            </div>
            <div> 
                {/* searchModal ?? <SearchBar isOpen={searchModal} /> */}
            </div>
        </div>
    )
}

export default Home