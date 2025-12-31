import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <SectionWrapper id="contact">
            <h2 className="section-title">Get In <span>Touch</span></h2>
            <div className="contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>Let's Talk</h3>
                    <p>I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative touch, let's hear it.</p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <FaEnvelope className="icon" />
                            <span>Francismission61@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <FaPhone className="icon" />
                            <span>+234 706 847 3984</span>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt className="icon" />
                            <span>Abuja, Nigeria</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    className="contact-form"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="form-group">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn" disabled>Send Message (Demo)</button>
                </motion.form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
