import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';
import './TechStack.css';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaPhp, FaLaravel, FaPython,
    FaNodeJs, FaRust, FaAws, FaDocker, FaGitAlt, FaDatabase, FaJava, FaLinux,
    FaNetworkWired, FaCode, FaWordpress
} from 'react-icons/fa';
import {
    SiTailwindcss, SiNextdotjs, SiTypescript, SiDjango, SiFlask, SiGo,
    SiPostgresql, SiMongodb, SiMysql, SiRedis, SiFirebase, SiGraphql,
    SiPostman, SiSwagger, SiFastapi, SiKubernetes, SiApachekafka,
    SiRabbitmq, SiNginx, SiVercel, SiGithub, SiStackblitz
} from 'react-icons/si';

const iconMap = {
    "HTML5": <FaHtml5 />,
    "CSS3": <FaCss3Alt />,
    "Tailwind CSS": <SiTailwindcss />,
    "JavaScript": <FaJs />,
    "React": <FaReact />,
    "Next.js": <SiNextdotjs />,
    "Vue.js": <FaVuejs />,
    "TypeScript": <SiTypescript />,
    "Node.js": <FaNodeJs />,
    "PHP": <FaPhp />,
    "Laravel": <FaLaravel />,
    "WordPress": <FaWordpress />,
    "Python": <FaPython />,
    "Django": <SiDjango />,
    "Flask": <SiFlask />,
    "Golang": <SiGo />,
    "Rust": <FaRust />,
    "Java": <FaJava />,
    "RESTful APIs": <FaNodeJs />,
    "GraphQL": <SiGraphql />,
    "gRPC": <FaNetworkWired />,
    "Postman": <SiPostman />,
    "Swagger": <SiSwagger />,
    "FastAPI": <SiFastapi />,
    "Docker": <FaDocker />,
    "Kubernetes": <SiKubernetes />,
    "Apache Kafka": <SiApachekafka />,
    "RabbitMQ": <SiRabbitmq />,
    "AWS Lambda": <FaAws />,
    "NGINX": <SiNginx />,
    "PostgreSQL": <SiPostgresql />,
    "MongoDB": <SiMongodb />,
    "MySQL": <SiMysql />,
    "Redis": <SiRedis />,
    "SQLite": <FaDatabase />,
    "Firebase": <SiFirebase />,
    "AWS": <FaAws />,
    "Git": <FaGitAlt />,
    "GitHub": <SiGithub />,
    "CI/CD Pipelines": <FaCode />,
    "Linux": <FaLinux />,
    "Vercel": <SiVercel />
};

const TechStack = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(resumeData.techStack)[0]);

    const getCategoryTitle = (category) => {
        if (category === 'apis') return 'APIs';
        if (category === 'devops') return 'DevOps';
        return category.charAt(0).toUpperCase() + category.slice(1);
    };

    return (
        <SectionWrapper id="tech-stack" bgIcon={<SiStackblitz />}>
            <h2 className="section-title">My <span>Tech Stack</span></h2>

            <div className="tech-tabs">
                {Object.keys(resumeData.techStack).map((category) => (
                    <button
                        key={category}
                        className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                        onClick={() => setActiveTab(category)}
                    >
                        {getCategoryTitle(category)}
                    </button>
                ))}
            </div>

            <div className="tech-stack-container">
                <div className="tech-category active">
                    <h4 className="category-title">{getCategoryTitle(activeTab)}</h4>
                    <div className="tech-grid">
                        {resumeData.techStack[activeTab].map((tech, i) => (
                            <div key={i} className="tech-item" title={tech}>
                                <span className="tech-icon">{iconMap[tech] || <FaCode />}</span>
                                <span className="tech-name">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default TechStack;
