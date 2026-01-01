import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Hero.css';
import heroImage from '../assets/francis.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section className="hero" ref={ref}>
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    style={{ y: yText, opacity }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hello, I'm
                    </motion.h2>
                    <h1 className="hero-name">FRANCIS ADEGBE</h1>
                    <h3>SOFTWARE DEVELOPER</h3>
                    <p className="hero-summary">
                        Expert Computer Scientist specializing in robust programming, innovative solutions, and technical leadership.
                    </p>

                    <div className="hero-socials">
                        <a href="https://github.com/ex-commando" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/francisadegbe" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="mailto:Francismission61@gmail.com"><FaEnvelope /></a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    style={{ y: yImage, opacity }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="image-backdrop"></div>
                    <img src={heroImage} alt="Francis Adegbe" className="hero-img" />
                </motion.div>
            </div>


        </section>
    );
};

export default Hero;
