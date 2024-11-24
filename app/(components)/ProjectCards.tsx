import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

interface Skills {
    projects: string[]
}

const ProjectCards: React.FC<Skills> = ({ projects }) => {
    return (
        <div className="p-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
            {projects.map((project) =>
                <div key={project} className="col-span-1 h-4/4 border border-white-600 rounded-md">
                    <Card>
                        <CardHeader>Project name</CardHeader>
                        <CardContent>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ea eius qui aliquid maxime ratione velit excepturi sunt dolores tempora possimus debitis eaque nulla voluptas voluptate eos, doloribus quod fuga!ratione velit excepturi sunt dolores tempora possimus debitis eaque nulla voluptas voluptate eos, doloribus quod fuga!</p>
                        </CardContent>
                        <CardFooter className='flex justify-between'>
                            {project}
                            <div>
                                <Button className='ml-4'>Buy</Button>
                                <Button variant="outline" size="icon">
                                    <ChevronRight />
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