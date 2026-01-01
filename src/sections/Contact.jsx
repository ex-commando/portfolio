import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [activeTab, setActiveTab] = useState('message');

    return (
        <SectionWrapper id="contact">
            <h2 className="section-title">Contact <span>Francis</span></h2>
            <div className="contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>Let's Talk</h3>
                    <p>I'm currently available for freelance projects and full-time opportunities. Select a tab below to send a quick message or request a detailed project quote.</p>

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

                <div className="form-wrapper">
                    <div className="form-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'message' ? 'active' : ''}`}
                            onClick={() => setActiveTab('message')}
                        >
                            Send Message
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'quote' ? 'active' : ''}`}
                            onClick={() => setActiveTab('quote')}
                        >
                            Request a Quote
                        </button>
                    </div>

                    <div className="form-content">
                        <AnimatePresence mode="wait">
                            {activeTab === 'message' ? (
                                <motion.form
                                    key="message-form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    action="https://formsubmit.co/Francismission61@gmail.com"
                                    method="POST"
                                    className="contact-form"
                                >
                                    <input type="hidden" name="_subject" value="New Portfolio Message" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_next" value="http://localhost:5173" />

                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" placeholder="Message" rows="5" required></textarea>
                                    </div>
                                    <button type="submit" className="submit-btn">Send Message</button>
                                </motion.form>
                            ) : (
                                <motion.form
                                    key="quote-form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    action="https://formsubmit.co/Francismission61@gmail.com"
                                    method="POST"
                                    className="contact-form"
                                >
                                    <input type="hidden" name="_subject" value="New Quote Request" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_next" value="http://localhost:5173" />

                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="tel" name="phone" placeholder="Phone Number" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="business_name" placeholder="Business Name (Optional)" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Business Category</label>
                                        <select name="business_category" required>
                                            <option value="" disabled selected>Select Category</option>
                                            <option value="SaaS">SaaS</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="Client Service">Client Service (Agency, Consulting, etc.)</option>
                                            <option value="Local Small Business">Local Small Business</option>
                                            <option value="B2B Online">B2B or B2B Online</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Estimated Yearly Income</label>
                                        <select name="yearly_income" required>
                                            <option value="" disabled selected>Select Range</option>
                                            <option value="Less than $10,000">&lt; $10,000</option>
                                            <option value="More than $10,000">&gt; $10,000</option>
                                            <option value="More than $100,000">&gt; $100,000</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Service Needed</label>
                                        <select name="service" required>
                                            <option value="" disabled selected>Select Service</option>
                                            <option value="Website Development">Website Development</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="Data Analysis">Data Analysis</option>
                                            <option value="Video Editing">Video Editing</option>
                                            <option value="Graphics">Graphics</option>
                                            <option value="Cybersecurity Auditing">Cybersecurity Auditing</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Do you have at least $1,000 set aside?</label>
                                        <select name="has_budget" required>
                                            <option value="" disabled selected>Select Answer</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Where did you hear about me?</label>
                                        <select name="referral_source" required>
                                            <option value="" disabled selected>Select Source</option>
                                            <option value="Online">Online</option>
                                            <option value="Referral">Referral</option>
                                            <option value="Offline Event">Offline Event</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="submit-btn">Request Quote</button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
