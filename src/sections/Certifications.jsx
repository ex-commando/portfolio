import SectionWrapper from '../components/SectionWrapper';
import { useState } from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import {
    FaCertificate,
    FaShieldAlt,
    FaDatabase,
    FaPython,
    FaWordpress,
    FaPencilRuler,
    FaFileExcel,
    FaReact,
    FaHeartbeat,
    FaChartPie,
    FaGlobe,
    FaBullhorn,
    FaCode,
    FaGoogle,
    FaMicrosoft,
    FaHtml5,
    FaNetworkWired,
    FaPaintBrush
} from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';
import './Certifications.css';

const certIconMapping = {
    security: <FaShieldAlt />,
    hacking: <FaShieldAlt />,
    google_security: <FaGoogle />,
    data: <FaDatabase />,
    python: <FaPython />,
    wordpress: <FaWordpress />,
    design: <FaPencilRuler />,
    excel: <FaFileExcel />,
    react: <FaReact />,
    health: <FaHeartbeat />,
    chart: <FaChartPie />,
    humanitarian: <FaGlobe />,
    marketing: <FaBullhorn />,
    code: <FaCode />,
    google_data: <FaGoogle />,
    adobe: <SiAdobe />,
    microsoft: <FaMicrosoft />,
    html: <FaHtml5 />,
    cisco: <FaNetworkWired />,
    leadership: <FaCertificate />
};

const Certifications = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const certificatesPerPage = 8;

    // Logic for displaying current certificates
    const indexOfLastCert = currentPage * certificatesPerPage;
    const indexOfFirstCert = indexOfLastCert - certificatesPerPage;
    const currentCerts = resumeData.certifications.slice(indexOfFirstCert, indexOfLastCert);
    const totalPages = Math.ceil(resumeData.certifications.length / certificatesPerPage);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        const section = document.getElementById('certifications');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <SectionWrapper id="certifications" bgIcon={<FaCode />}>
            <h2 className="section-title">My <span>Certifications</span></h2>
            <div className="cert-grid">
                {currentCerts.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="cert-card"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(255, 0, 79, 0.15)" }}
                    >
                        <div className="cert-icon">
                            {certIconMapping[cert.iconType] || <FaCertificate />}
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
            </div>

            {totalPages > 1 && (
                <div className="pagination-controls">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="pagination-btn"
                    >
                        &lt; Previous
                    </button>
                    <span className="page-info">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="pagination-btn"
                    >
                        Next &gt;
                    </button>
                </div>
            )}
        </SectionWrapper>
    );
};

export default Certifications;
