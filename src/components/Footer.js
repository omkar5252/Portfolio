// src/components/Footer.js
import React from 'react';
import '../App.css';


const Footer = () => {
    return (
        <footer className="text-center py-4">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
