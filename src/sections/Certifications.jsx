import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
    return (
        <SectionWrapper id="certifications">
            <h2 className="section-title">My <span>Certifications</span></h2>
            <motion.div
                className="cert-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                {resumeData.certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="cert-card"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 240, 255, 0.15)" }}
                    >
                        <div className="cert-icon">
                            <FaCertificate />
                        </div>
                        <div className="cert-content">
                            <h3>{cert.name}</h3>
                            <div className="cert-meta">
                                <span className="cert-issuer">{cert.issuer}</span>
                                <span className="cert-date">{cert.date}</span>
                            </div>
                            {cert.credentialId && (
                                <div className="cert-id">
                                    <span className="label">ID:</span> {cert.credentialId}
                                </div>
                            )}
                            {/* Placeholder for verification link if URL logic is added later */}
                            {cert.credentialId && (
                                <div className="cert-verify">
                                    <span>Verified</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Certifications;
