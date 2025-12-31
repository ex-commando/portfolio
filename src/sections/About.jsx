import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <SectionWrapper id="about">
            <h2 className="section-title">About <span>Me</span></h2>
            <div className="about-content">
                <div className="about-text">
                    <p className="summary-text">{resumeData.summary}</p>

                    <div className="education-block">
                        <h3>Education</h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="edu-item">
                                <span className="edu-year">{edu.year}</span>
                                <div className="edu-details">
                                    <h4>{edu.degree}</h4>
                                    <p>{edu.school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-container">
                    <h3>Skills</h3>
                    <motion.div
                        className="skills-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {resumeData.skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skill-tag"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.1, backgroundColor: "var(--color-accent)", color: "#000" }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
