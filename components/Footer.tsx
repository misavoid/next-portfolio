import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                Connect with me on <a href="https://github.com/misavoid">GitHub</a> |{" "}
                <Link href="https://www.linkedin.com/in/patricia-vernau-a71b4b228/">LinkedIn</Link>
            </p>
            <p>© {new Date().getFullYear()} Patricia Vernau. All rights reserved.</p>
        </footer>
    );
}
