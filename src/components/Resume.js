import React from 'react';
import '../App.css';


const Resume = () => {
    return (
        <section id="resume" className="resume section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Resume</h2>
                <p>Experienced Python Backend Developer with a strong track record in building and maintaining
                    backend systems. Skilled in creating efficient web services and APIs using Python frameworks
                    like Django and Flask. Comfortable working with both SQL and NoSQL databases. Experienced
                    with tools like Docker for managing applications and integrating third-party services. Always
                    eager to learn and apply new technologies to improve system performance.
                </p>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left column - Summary and Education */}
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Omkar Dorugade</h4>
                            <p><em>Innovative and deadline-driven Backend Devloper with 2+ years of experience designing and developing user-centered Web Application.</em></p>
                            <ul>
                                <li>Vikhroli, Mumbai, India</li>
                                <li>8652694224</li>
                                <li>omkardorugade52@thinkitive.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>B.E. Electrical Engineering</h4>
                            <h5>2017 - 2020</h5>
                            <p><em>Pillai Hoc College of Engineering and Technology, Mumbai, India</em></p>
                        </div>

                        <div className="resume-item">
                            <h4>Diploma in Electrical Engineering</h4>
                            <h5>2014 - 2017</h5>
                            <p><em>N.E.S Polytechnic, Mumbai, India</em></p>
                        </div>

                        <h3 className="resume-title">Skills</h3>
                        <div className="resume-item">
                            <h4>Languages & Frameworks:</h4>
                            <p>Python</p>
                            <p>Django</p>
                            <p>Rest-Framwork</p>
                            <p>Flask</p>
                        </div>

                        <div className="resume-item">
                            <h4>Database Technologies:</h4>
                            <p>Relational Databases: MySQL</p>
                            <p>NoSQL Databases: MongoDB</p>
                        </div>

                        <div className="resume-item">
                            <h4>Tools & Technologies:</h4>
                            <p>Containerization & CI/CD: Docker</p>
                            <p>Version Control & Collaboration: Git</p>
                            <p>Project Management & Issue Tracking: Jira</p>
                            <p>Development Tools: Postman
                            </p>
                        </div>
                    </div>

                    {/* Right column - Professional Experience */}
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Thinkitive Technology - Software Engineer</h4>
                            <h5>Jan 2023 - Present</h5>
                            <p><em>Baner, Pune, India</em></p>
                            <ul>
                                <li>Write Effective, Scalable Code: Developed and maintained high-performance backend
                                    systems using Python, ensuring code efficiency and scalability to handle increasing user
                                    loads.
                                </li>
                                <li>Improve Responsiveness and Performance: Designed and implemented backend
                                    components that significantly enhanced application responsiveness and overall system
                                    performance.
                                </li>
                                <li>Integrate User-Facing Elements: Worked closely with frontend teams to integrate user-facing
                                    elements seamlessly into applications, ensuring a smooth and cohesive user experience.
                                    Test and Debug Programs: Conducted thorough testing and debugging of backend systems
                                    to identify and fix issues, ensuring reliable and error-free application performance.
                                </li>
                                <li>Enhance Existing Systems: Refactored and optimized existing systems to improve
                                    functionality and address performance bottlenecks.
                                </li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>RNV Biotech PVT LTD - Project Engineer</h4>
                            <h5>Sep 2021 - Oct 2022</h5>
                            <p><em>Mumbai, India</em></p>
                            <ul>
                                <li>Monitor site safety and legal requirements. Schedule and monitor engineering tasks</li>
                                <li>Identify project phases and elements Establish specifications for projects based on client
                                    requirements, and product design
                                </li>
                                <li>Establish or design testing methods to monitor the overall quality of the project
                                    Collect and analyze project information to create status reports and recommend future
                                    actions.
                                </li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Power Matrix Solution - Service Engineer</h4>
                            <h5>Nov 2020 - Aug 2021</h5>
                            <p><em>Mumbai, India</em></p>
                            <ul>
                                <li>Installed and maintained complex electrical systems used to manufacture capacitors and</li>
                                <li>filters. - Developed, performed, and scheduled preventive maintenance
                                    Worked close with engineering to resolve design issues
                                </li>
                                <li>Skilled in installation and repair of APFC panel and Harmonic filters.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Resume;
