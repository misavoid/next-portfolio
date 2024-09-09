import ProjectCard from '../../components/ProjectCard';
import { projects } from '../data/projects';
import Navbar from '../../components/Navbar';


export default function Projects() {
    return (
        <><Navbar/>
            <div className="projects-container">
                <h1>My Projects</h1>

                {/* Display all projects */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectLink={project.projectLink}/>
                ))}
            </div>
        </>
    );
}
