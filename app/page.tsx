import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { projects } from './data/projects';
import ProjectCard from '../components/ProjectCard';


export default function Home() {
    return (
        <div className="container">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Hi, I'm Patricia. </h1>
                    <h1 id="emoji-header"><span>👋🏻 👾</span></h1>
                    <h2>A Junior Data Scientist & Developer</h2>
                    <p>I craft solutions that blend data and software development to solve real-world problems.</p>
                    <Link href="/projects" className="cta">View My Work</Link>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <h2>Selected Work</h2>
                <div className="projects">
                    {/* Display the first project from the data */}
                    <ProjectCard
                        title={projects[0].title}
                        description={projects[0].description}
                        imageUrl={projects[0].imageUrl}
                        projectLink={projects[0].projectLink}
                    />

                    <ProjectCard
                        title={projects[1].title}
                        description={projects[1].description}
                        imageUrl={projects[1].imageUrl}
                        projectLink={projects[1].projectLink}
                    />

                    {/* Add more projects as needed */}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
