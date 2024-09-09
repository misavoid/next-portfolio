import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
}

export default function ProjectCard({ title, description, imageUrl, projectLink }: ProjectCardProps) {
    return (
        <div className="project-card">
            <Image src={imageUrl} alt={title} width={600} height={400} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href={projectLink} className="cta">
                View Case Study
            </Link>
        </div>
    );
}
