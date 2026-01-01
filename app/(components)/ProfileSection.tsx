import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import profile from '../asset/img-no-bg.png'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import ThemeSwitcher from '../(toggleDarkMode)/ThemeSwitcher'
const nestJs = '/nest.png'
const tailwind = '/tailwind.png'
const aws = '/AWS.png'

interface profileDetail {
    name?: string
    designation?: string
    imageUrl?: string
}

interface ProfileSectionProps {
    skills: string[]
    profileDetails: profileDetail
}

const skillIcons: { [key: string]: string } = {
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "shadcn UI": "https://ui.shadcn.com/favicon.ico", // Placeholder, as shadcn doesn't have official icon
    "Tailwind CSS": tailwind,
    "NestJS": nestJs,
    "AWS": aws,
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Socket.IO": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "Mongoose": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Swagger": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    "WebSocket Implementation": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "API Development": "https://img.icons8.com/?size=100&id=122637&format=png&color=000000", // Generic API icon
    "Payment gateway Integration": "https://img.icons8.com/?size=100&id=117523&format=png&color=000000", // Payment icon
    "Content Creation": "https://img.icons8.com/?size=100&id=122977&format=png&color=000000", // Content icon
    "Video Editing": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg"
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ skills, profileDetails }) => {
    const { theme } = useTheme()
    return (
        <div>
            <Card className="flex flex-col items-center justify-center m-2 border-none">
                <CardContent className="m-2 h-20">
                    <Avatar className=''>
                        <AvatarImage className={theme === 'dark' ? "rounded-full h-20 border-4 border-white" :"rounded-full h-20 border-4 border-gray-800"} src={profile.src}/>
                    </Avatar>
                </CardContent>
                <CardHeader className="m-0 p-2">
                    <CardTitle>{profileDetails.name ?? 'user'}</CardTitle>
                    <CardDescription>{profileDetails.designation ?? 'designation'}</CardDescription>
                </CardHeader>
                <CardContent className="m-0 p-2 ">
                    <div className="grid grid-cols-2 gap-2">
                        {skills.map((skill) => (
                            <Card key={skill} className="flex items-center p-2 hover:scale-105 transition-transform max-h-14 max-w-46">
                                <Image src={skillIcons[skill] || "https://img.icons8.com/?size=100&id=122637&format=png&color=000000"} alt={skill} width={40} height={40} className="mr-2" />
                                <span className="text-sm">{skill}</span>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfileSection