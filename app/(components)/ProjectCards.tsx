import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import Image, { StaticImageData } from 'next/image';

interface Project {
    name: string;
    description: string;
    technologies: string[];
    imageUrl?: any;
}
interface Skills {
    projects: Project[];
}

const ProjectCards: React.FC<Skills> = ({ projects }) => {
    return (
        <div className="w-full h-full p-2 grid grid-cols-6 gap-4">
            {projects.map((project) => (
                <div 
                    key={project.name} 
                    className="h-full border border-white-600 rounded-md 
                        2xl:col-span-2 xl:col-span-2 lg:col-span-3 md:col-span-3 
                        sm:col-span-6 xs:col-span-6 xxs:col-span-6 3xs:col-span-6"
                >
                    <Card className="h-full flex flex-col">
                        {project.imageUrl && (
                            <div className="p-4 flex justify-center">
                                <Image
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                                src={project.imageUrl} 
                                alt={project.name} 
                                width={0} 
                                height={0} 
                                className="rounded-md" />
                            </div>
                        )}
                        <CardHeader>{project.name}</CardHeader>
                        <CardContent>
                            <p>{project.description}</p>
                        </CardContent>
                        <CardContent>
                            {project.technologies.map((tech) => (
                                <Badge 
                                    className="m-1 hover:scale-110" 
                                    key={tech} 
                                    variant="secondary"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </CardContent>
                        {/* Ensure the footer stays at the bottom */}
                        <CardFooter className="mt-auto flex justify-end items-center p-2">
                            <Button>View more</Button>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;
