import React from 'react';
import '../App.css';


const About = () => {
    return (
        <section id="about" className="about section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4">
                        <img src="assets/img/my-profile-img.jpg" className="img-fluid" alt="Profile" />
                    </div>
                    <div className="col-lg-8 content">
                        <h2>Web Developer</h2>
                        <p className="fst-italic py-3">
                            I am Python developer with a strong background in building web applications using frameworks like Django and Flask.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>18 October 1998</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span></span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>8652694224</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Mumbai, India</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>omkardorugade52@gmail.com</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            Experienced in developing RESTful APIs, integrating databases, and implementing authentication systems. 
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
