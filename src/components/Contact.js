import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">

                    <div className="col-lg-5">

                        <div className="info-wrap">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>Address</h3>
                                    <p>Tagore nager no 3, Vikhroli, Mumbai, IN 400083</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-telephone flex-shrink-0"></i>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>8652694224</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>omkardorugade52@gmail.com</p>
                                </div>
                            </div>

                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d504382.7352244697!2d72.8777!3d19.0760!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8cb6263c4f7%3A0x9ab6fdbcc8fcbdfb!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                frameBorder="0"
                                style={{ border: 0, width: "100%", height: "270px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps - Mumbai"
                            />

                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">Your Name</label>
                                    <input type="text" name="name" id="name-field" className="form-control" required />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email-field" className="pb-2">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email-field" required />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="subject-field" className="pb-2">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="message-field" className="pb-2">Message</label>
                                    <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="reset">Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;
