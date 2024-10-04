import React, { useEffect, useRef } from 'react';
import '../App.css';
import AOS from 'aos';  // AOS for animations
import 'aos/dist/aos.css';  // AOS styles
import Typed from 'typed.js';  // Typed.js for typing effect

const Home = () => {
    const typedElement = useRef(null);  // Create a reference for the typed element

    useEffect(() => {
        // Initialize AOS animations
        AOS.init({ duration: 1000 });

        // Initialize Typed.js for typing animation
        const typed = new Typed(typedElement.current, {
            strings: ["Developer", "Python Devloper"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
        });

        // Cleanup Typed.js on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="hero section dark-background">
            <img src="assets/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-in" className="" />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Omkar Dorugade</h2>
                <p>
                    I'm <span ref={typedElement}></span> {/* Use the ref here */}
                    <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
                </p>
            </div>
        </section>
    );
};

export default Home;
