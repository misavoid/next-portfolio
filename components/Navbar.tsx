import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="logo">MyPortfolio</a>
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
