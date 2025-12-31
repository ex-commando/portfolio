import { motion } from 'framer-motion';
import './SectionWrapper.css';

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`section-wrapper ${className}`}>
            <motion.div
                className="section-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
