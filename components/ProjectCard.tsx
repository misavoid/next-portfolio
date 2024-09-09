"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

interface ProjectCardProps {
    title: string,
    description: string,
    imageUrl: string,
    moreInfo: string,
    projectLink: string,
    isExpanded?: boolean
}

export default function ProjectCard({
                                        title,
                                        description,
                                        imageUrl,
                                        moreInfo,
                                        /* projectLink, */
                                    }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
            <Image src={imageUrl} alt={title} width={600} height={400}/>
            <h3>{title}</h3>
            <p>{description}</p>
            {isExpanded && (
                <div className="more-info">
                    <p>{moreInfo}</p>
                </div>
            )}
            <Link href={'/projects?expand=${title}'} className="cta" onClick={toggleExpand}>
                {isExpanded ? 'Hide Case Study' : 'View Case Study'}
            </Link>

        </div>
    );
}
