import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaUserShield } from "react-icons/fa";

function Navbar({ language, setLanguage, setCurrentPage, onAdminClick, isAdmin }) {
    const [date, setDate] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const today = new Date();
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        setDate(today.toLocaleDateString(language === "en" ? "en-IN" : "mr-IN", options));
    }, [language]);

    const handleLinkClick = (page) => {
        setCurrentPage(page);
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => handleLinkClick("home")}>
                PharmaCare
            </div>

            <div
                className={`menu-toggler ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {!isAdmin && (
                <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <button onClick={() => handleLinkClick("home")}>
                        {language === "en" ? "Home" : "मुखपृष्ठ"}
                    </button>
                    <button onClick={() => handleLinkClick("about")}>
                        {language === "en" ? "About" : "आमच्याबद्दल"}
                    </button>
                    <button onClick={() => handleLinkClick("editions")}>
                        {language === "en" ? "Editions" : "आवृत्त्या"}
                    </button>
                    <button onClick={() => handleLinkClick("articles")}>
                        {language === "en" ? "Articles" : "लेख"}
                    </button>
                    <button onClick={() => handleLinkClick("contact")}>
                        {language === "en" ? "Contact" : "संपर्क"}
                    </button>
                </div>
            )}

            <div className="navbar-right">
                <div
                    className="language-toggle"
                    onClick={() => setLanguage(language === "en" ? "mr" : "en")}
                >
                    <div className={`toggle-slider ${language === "mr" ? "marathi" : "english"}`}></div>
                    <span className="toggle-label left">EN</span>
                    <span className="toggle-label right">MR</span>
                </div>
                <span className="date">{date}</span>

                <button className="admin-icon" onClick={onAdminClick}>
                    <FaUserShield size={20} />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
