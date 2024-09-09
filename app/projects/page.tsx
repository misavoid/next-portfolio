'use client';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../data/projects';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Use useSearchParams instead of useRouter

export default function Projects() {

    const searchParams = useSearchParams();
    const [expandedProject, setExpandedProject] = useState('');

    useEffect(() => {
        const expand = searchParams.get('expand'); // Get the 'expand' query param
        if (expand) {
            setExpandedProject(expand); // Automatically expand the project based on query param
        }
    }, [searchParams]);

    return (
        <>
            <Navbar />
            <div className="projects-container">
                <h1>My Projects</h1>

                {/* Display all projects */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        moreInfo={project.moreInfo}
                        projectLink={project.projectLink}
                        isExpanded={project.title === expandedProject} // Automatically expand based on the query parameter
                    />
                ))}
            </div>
        </>
    );
}