import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

const allSpecialEditions = [
    { title: "PharmaCare Special - August 2025", date: "2025-08-17", pdfUrl: "/pdfs/pharmacare_aug2025.pdf", year: 2025 },
    { title: "Health Today - July 2025", date: "2025-07-17", pdfUrl: "/pdfs/healthtoday_jul2025.pdf", year: 2025 },
    { title: "Medical Weekly - June 2024", date: "2024-06-17", pdfUrl: "/pdfs/medicalweekly_jun2024.pdf", year: 2024 },
    { title: "Wellness Monthly - May 2024", date: "2024-05-17", pdfUrl: "/pdfs/wellness_may2024.pdf", year: 2024 },
    { title: "Care Focus - April 2023", date: "2023-04-17", pdfUrl: "/pdfs/carefocus_apr2023.pdf", year: 2023 },
];

export default function Home({
                                 language,
                                 editionsCount = 0,
                                 articlesCount = 0,
                                 popularArticles = [],
                                 setCurrentPage,
                                 setSelectedEditionDate,
                             }) {
    const [content, setContent] = useState({});
    const [selectedYear, setSelectedYear] = useState(null);
    const tabsRef = useRef(null);

    const years = [...new Set(allSpecialEditions.map(e => e.year))].sort((a, b) => b - a);
    const filteredEditions = selectedYear
        ? allSpecialEditions.filter(e => e.year === parseInt(selectedYear))
        : allSpecialEditions;

    const scrollLeft = () => tabsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    const scrollRight = () => tabsRef.current.scrollBy({ left: 300, behavior: "smooth" });

    useEffect(() => {
        const en = {
            heading: "PharmaCare",
            subheading: "Your Trusted Health Companion",
            text: "PharmaCare brings you the latest news, health tips, and pharmaceutical updates. Stay informed and stay healthy!",
            latestBtn: "Latest Edition",
            editionsLabel: "Editions",
            articlesLabel: "Articles",
            popularTitle: "Articles",
            specialTitle: "Special Editions",
            selectYear: "Select Year",
            allYears: "All Years",
            noEditions: "No special editions found for",
            quickLinks: "Quick Links",
            contactUs: "Contact Us",
            homePage: "Home",
            aboutPage: "About",
            editionsPage: "Editions",
            articlesPage: "Articles",
            contactPage: "Contact",
            addressLine1: "A/P Baragaon-Pimpri, Tal. Sinnar, Dist. Nashik - 422103.",
            addressLine2: "Published at Flat No.8, Atharv Apartment, Vijay Nagar, Sinnar.",
            addressLine3: "Dist. Nashik, Pin Code-422103, Maharashtra.",
        };

        const mr = {
            heading: "फार्मकेअर",
            subheading: "आपला विश्वासार्ह आरोग्य साथी",
            text: "फार्मकेअर आपल्याला नवीनतम बातम्या, आरोग्य टिप्स आणि औषधी अद्यतन उपलब्ध करून देते.",
            latestBtn: "नवीनतम आवृत्ती",
            editionsLabel: "आवृत्त्या",
            articlesLabel: "लेख",
            popularTitle: "लेख",
            specialTitle: "विशेष आवृत्त्या",
            selectYear: "वर्ष निवडा",
            allYears: "सर्व वर्षे",
            noEditions: "साठी कोणतीही विशेष आवृत्त्या आढळल्या नाहीत",
            quickLinks: "द्रुत दुवे",
            contactUs: "आमच्याशी संपर्क साधा",
            homePage: "मुख्यपृष्ठ",
            aboutPage: "आमच्याबद्दल",
            editionsPage: "आवृत्त्या",
            articlesPage: "लेख",
            contactPage: "संपर्क",
            addressLine1: "ए/पी बरगाव-पिंपरी, तालुका सिन्नर, जिल्हा नाशिक - 422103.",
            addressLine2: "प्रकाशन: फ्लॅट क्र.8, अथर्व अपार्टमेंट, विजय नगर, सिन्नर.",
            addressLine3: "जिल्हा नाशिक, पिन कोड-422103, महाराष्ट्र.",
        };

        setContent(language === "en" ? en : mr);
    }, [language]);

    return (
        <>
            {/* Home Section */}
            <section className="home-section">
                <div className="home-container">
                    <div className="home-left">
                        <h1>{content.heading}</h1>
                        <h2>{content.subheading}</h2>
                        <p>{content.text}</p>

                        <button className="latest-edition-btn">{content.latestBtn}</button>

                        <div className="counts">
                            <div className="count-item">
                                <h3>{editionsCount}</h3>
                                <span>{content.editionsLabel}</span>
                            </div>
                            <div className="count-item">
                                <h3>{articlesCount}</h3>
                                <span>{content.articlesLabel}</span>
                            </div>
                        </div>
                    </div>

                    <div className="home-right">
                        <h3>{content.popularTitle}</h3>
                        <div className="popular-articles">
                            {popularArticles.slice(0, 5).map((article, index) => (
                                <div
                                    key={index}
                                    className="article-card"
                                    onClick={() => setCurrentPage("articles")}
                                >
                                    <h4>{article.title}</h4>
                                    <p>{article.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Editions Section */}
            <section className="special-page">
                <h1 className="special-title">{content.specialTitle}</h1>

                <div className="year-selector-container">
                    <label htmlFor="year-selector">{content.selectYear}:</label>
                    <select
                        id="year-selector"
                        value={selectedYear || ""}
                        onChange={(e) => setSelectedYear(e.target.value || null)}
                        className="year-selector"
                    >
                        <option value="">{content.allYears}</option>
                        {years.map((year, idx) => (
                            <option key={idx} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="tabs-wrapper">
                    <button className="scroll-btn left-scroll" onClick={() => tabsRef.current.scrollBy({ left: -300, behavior: "smooth" })}>
                        {"<"}
                    </button>

                    <div className="tabs-container" ref={tabsRef}>
                        {filteredEditions.length === 0 ? (
                            <p className="no-editions">
                                {content.noEditions} {selectedYear}
                            </p>
                        ) : (
                            filteredEditions.map((edition, index) => (
                                <div
                                    key={index}
                                    className="tab-card"
                                    onClick={() => {
                                        setSelectedEditionDate(edition.date);
                                        setCurrentPage("editions");
                                    }}
                                >
                                    <div className="tab-preview">
                                        <p>Page 1</p>
                                    </div>
                                    <h3 className="tab-title">{edition.title}</h3>
                                </div>
                            ))
                        )}
                    </div>

                    <button className="scroll-btn right-scroll" onClick={() => tabsRef.current.scrollBy({ left: 300, behavior: "smooth" })}>
                        {">"}
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>{content.quickLinks}</h4>
                        <ul>
                            <li><button onClick={() => setCurrentPage("home")}>{content.homePage}</button></li>
                            <li><button onClick={() => setCurrentPage("about")}>{content.aboutPage}</button></li>
                            <li><button onClick={() => setCurrentPage("editions")}>{content.editionsPage}</button></li>
                            <li><button onClick={() => setCurrentPage("articles")}>{content.articlesPage}</button></li>
                            <li><button onClick={() => setCurrentPage("contact")}>{content.contactPage}</button></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{content.contactUs}</h4>
                        <p><b>Email:</b> pharmacare0823@gmail.com</p>
                        <p><b>Phone:</b> +91 98229 54912 | +91 97658 00266 | +91 94220 21419</p>
                        <p><b>Address:</b> {content.addressLine1}</p>
                        <p>{content.addressLine2}</p>
                        <p>{content.addressLine3}</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
