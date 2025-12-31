import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <h2 className="section-title">Work <span>Experience</span></h2>
            <div className="experience-timeline">
                {resumeData.experience.map((job) => (
                    <motion.div
                        key={job.id}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <span className="job-date">{job.period}</span>
                            <h3 className="job-role">{job.role}</h3>
                            <h4 className="job-company">{job.company}</h4>
                            <ul className="job-description">
                                {job.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
