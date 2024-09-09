import Navbar from '../../components/Navbar';

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <h1>About Me</h1>
                <p>
                    Hi! I'm Patricia, a Junior Data Scientist & Developer with a passion
                    for blending data and code to craft meaningful solutions.
                    Whether it's building dashboards, solving complex problems,
                    or working on personal projects like <strong>Momentta</strong>,
                    I'm always eager to dive deep into technology.

                </p>
                <p>
                    When I'm not coding or analyzing data, you can find me exploring nature,
                    enjoying video games, or working on creative side projects.
                    I'm always on the lookout for new challenges, be it improving productivity with my tools,
                    or just experimenting with the latest tech.
                </p>
                <p>
                    With a love for vibrant designs (and a preference for subtle, playful animations),
                    I enjoy combining functionality with aesthetics to make experiences that are both
                    effective and enjoyable. Drop me a line if you'd like to collaborate or
                    just chat about coding, design, or the latest in tech!
                </p>
            </div>
        </>
    );
}
