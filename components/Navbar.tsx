import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            {/*  <div className="navbar-brand">
                <Link href="/">
                    <img src="/public/icons/misa-clouds.png"  alt='logo'/>
                </Link>
            </div>

                */ }
            <ul className="navbar-links">
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/projects">PROJECTS</Link>
                </li>
                <li>
                    <Link href="/about">ABOUT</Link>
                </li>
                <li>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
}
