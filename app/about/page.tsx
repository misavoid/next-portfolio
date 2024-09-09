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
                    <p> One of my first big projects involved building SQL queries for a web crawler that sifted
                        through over 600,000 webpages, gathering news on topics like customer experience, fiber optic
                        expansion and the telecommunications market in Germany.</p>
                    <p> The project that really fired it off was a sentiment analysis on newspaper articles about
                        fiber optic expansion in Germany. It was my first time working
                        with machine learning, and it was a huge learning experience.</p>
                    <p>
                        Next to all that, I’ve worked on projects I’m super proud of, like Momentta,
                        a time-tracking software that helps me keep track of tasks when I’m bouncing
                        between them. I also created a DHL label converter because, let’s be honest,
                        who wants an A4-sized label when you can extract only the important stuff and
                        print it neatly on a 62mm label?</p>

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
