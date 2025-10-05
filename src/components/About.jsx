import React from "react";
import atul from "../assets/atul.jpg";
import ravindra from "../assets/ravindra.jpg";
import sachin from "../assets/sachin.jpg";
import "./About.css";

function About({ language }) {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                {/* Vision Section */}
                <div className="vision-section">
                    <h2 className="about-title">
                        {language === "en" ? "Our Vision" : "आमचे ध्येय"}
                    </h2>
                    <p className="about-text">
                        {language === "en" ? (
                            <>
                                For over <strong>3 years</strong>, PharmaCare has been dedicated
                                to delivering insightful health news, trusted pharmaceutical
                                updates, and reliable healthcare knowledge.
                                <br /><br />
                                Our goal is to empower readers with accurate information that
                                helps them make better health decisions — one edition at a time.
                            </>
                        ) : (
                            <>
                                गेल्या <strong>३ वर्षांपासून</strong>, फार्माकेअर वाचकांना आरोग्यविषयक
                                बातम्या, विश्वासार्ह औषधविषयक माहिती आणि आरोग्य ज्ञान देण्यासाठी समर्पित आहे.
                                <br /><br />
                                आमचे उद्दिष्ट वाचकांना योग्य माहिती देऊन आरोग्य निर्णय अधिक चांगल्या पद्धतीने
                                घेण्यास सक्षम करणे — एका आवृत्तीनंतर दुसरी अशी आहे.
                            </>
                        )}
                    </p>
                </div>

                {/* Team / Founder Section */}
                {/* Team / Founder Section */}
                <div className="team-section">
                    {/* Left */}
                    <div className="team-member">
                        <img src={ravindra} alt="Ravindra" className="team-photo" />
                        <h3 className="team-name">
                            {language === "en" ? "Ravindra Pawar" : "रविंद्र पवार"}
                        </h3>
                        <p className="team-role">
                            {language === "en" ? "Executive Editor" : "कार्यकारी संपादक"}
                        </p>
                    </div>

                    {/* Center Founder */}
                    <div className="team-member founder">
                        <img src={atul} alt="Founder" className="team-photo large" />
                        <h3 className="team-name">
                            {language === "en" ? "Mr. Atul Jhalke" : "श्री. अतुल झळके"}
                        </h3>
                        <p className="team-role">
                            {language === "en" ? "Founder & Visionary" : "संस्थापक व दूरदृष्टी"}
                        </p>
                    </div>

                    {/* Right */}
                    <div className="team-member">
                        <img src={sachin} alt="Sachin" className="team-photo" />
                        <h3 className="team-name">
                            {language === "en" ? "Sachin Valunj" : "सचिन वाळुंज"}
                        </h3>
                        <p className="team-role">
                            {language === "en" ? "Deputy Editor" : "उपसंपादक"}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
