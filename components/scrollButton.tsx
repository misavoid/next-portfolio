// components/ScrollButton.tsx
"use client";

export default function ScrollButton() {
    const handleScroll = () => {
        const section = document.getElementById('selected-projects');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleScroll} className="cta">
            My favorite projects ⬇
        </button>
    );
}
