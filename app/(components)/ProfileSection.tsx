'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import profile from '../asset/img-no-bg.png'
import { useTheme } from 'next-themes'

interface profileDetail {
    name?: string
    designation?: string
    imageUrl?: string
}

interface ProfileSectionProps {
    skills: string[]
    profileDetails: profileDetail
}

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
                <CardContent className="m-0 p-2 space-y-2">
                    {skills.map((skill) => (
                        <Badge className='m-1 hover:scale-110' key={skill} variant="outline">{skill}</Badge>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfileSection