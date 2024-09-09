import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <div className="container">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="hero">
                <h1>Data Scientist & Software Engineer</h1>
                <p>
                    With a passion for data science and software development, I build tools
                    and insights that drive innovation.
                </p>
                <a href="/projects" className="cta">View Projects</a>
            </section>


            {/* About Me Section */}
            <section className="about" id="about">
                <h2>About Me</h2>
                <p>
                    I am a developer focused on both software engineering and data science.
                    Using modern tools like Python, Docker, and TensorFlow, I create solutions
                    that solve real-world problems.
                </p>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
