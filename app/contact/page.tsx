import Navbar from '../../components/Navbar';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>If you'd like to get in touch, feel free to drop me a message via the form below!</p>
                <form className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit" className="cta">Send Message</button>
                </form>
            </div>
        </>
    );
}
