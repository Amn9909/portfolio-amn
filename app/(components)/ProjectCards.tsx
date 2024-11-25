import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

interface Skills {
    projects: string[]
}

const ProjectCards: React.FC<Skills> = ({ projects }) => {
    return (
        <div className="w-full p-2 grid grid-cols-6 gap-4">
            {projects.map((project) =>
                <div key={project} className="h-4/4 border border-white-600 rounded-md 2xl:col-span-2 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-6 xs:col-span-6 xxs:col-span-6 3xs:col-span-6 ">
                    <Card>
                        <CardHeader>Project name</CardHeader>
                        <CardContent>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Nostrum ea eius qui aliquid maxime ratione velit excepturi sunt
                                dolores tempora possimus debitis eaque nulla voluptas voluptate
                                eos, doloribus quod fuga!ratione velit excepturi sunt dolores
                                tempora possimus debitis eaque nulla voluptas voluptate eos,
                                doloribus quod fuga!</p>
                        </CardContent>
                        <CardFooter className='flex justify-between items-center p-2 m-0'>
                            <div className="flex items-center">
                                <h2>{project}</h2>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button className="">Buy</Button>
                                <Button className="">
                                    <ChevronRight/>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </div>
    )
}

export default ProjectCards