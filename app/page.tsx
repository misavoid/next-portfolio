import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from './data/projects';
import ProjectCard from '../components/ProjectCard'
import ScrollButton from '../components/scrollButton'

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
                    <p> My journey into data science began the moment I watched David Kriesel’s presentations
                        on Deutsche Bahn and Spiegel mining. That’s when it hit me — data is everywhere,
                        and if you know how to look, you can uncover just about anything.
                        His work inspired me to dive into this field, and I haven’t looked back since. </p>
                     <p>
                         I love solving real problems with a blend of data and development,
                        always learning something new along the way. For me, data is power,
                        and dashboards? Well, they’re just a fun way to make complex insights
                        crystal clear with almost no explanation needed.</p>

                    <p> Ready to dig into some data and make something cool? Let’s do it! </p>
                    <ScrollButton/>
                </div>
            </section>

            {/* Projects Section */}
            <section id="selected-projects" className="projects-section">
                <h2>Selected Work</h2>
                <div className="projects">
                    {/* Display the first project from the data */}
                    <ProjectCard
                        title={projects[0].title}
                        description={projects[0].description}
                        imageUrl={projects[0].imageUrl}
                        projectLink={projects[0].projectLink}
                        moreInfo={projects[0].moreInfo}
                    />

                    <ProjectCard
                        title={projects[1].title}
                        description={projects[1].description}
                        imageUrl={projects[1].imageUrl}
                        projectLink={projects[1].projectLink}
                        moreInfo={projects[1].moreInfo}
                    />

                    {/* Add more projects as needed */}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
