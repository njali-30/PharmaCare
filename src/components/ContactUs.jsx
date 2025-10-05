import React from "react";
import "./ContactUs.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = ({ language }) => {
    const content = {
        en: {
            contactTitle: "Contact Us",
            contactSubtitle:
                "Have questions, suggestions, or feedback? We'd love to hear from you. Get in touch with our team.",
            sendMessage: "Send us a Message",
            fullName: "Full Name",
            email: "Email Address",
            message: "Message",
            sendBtn: "Send Message",
            getInTouch: "Get in Touch",
            emailLabel: "Email Address",
            phoneLabel: "Phone Numbers",
            addressLabel: "Address",
            addressText:
                "A/P Baragaon-Pimpri, Tal. Sinnar, Dist. Nashik - 422103. Published at Flat No.8, Atharv Apartment, Vijay Nagar, Sinnar, Dist. Nashik, Pin Code-422103, Maharashtra",
        },
        mr: {
            contactTitle: "संपर्क करा",
            contactSubtitle:
                "आपल्याकडे काही प्रश्न, सूचना किंवा अभिप्राय आहे का? आम्हाला तुमच्याकडून ऐकायला आवडेल. आमच्या टीमशी संपर्क साधा.",
            sendMessage: "आम्हाला संदेश पाठवा",
            fullName: "पूर्ण नाव",
            email: "ईमेल पत्ता",
            message: "संदेश",
            sendBtn: "संदेश पाठवा",
            getInTouch: "संपर्क साधा",
            emailLabel: "ईमेल पत्ता",
            phoneLabel: "फोन नंबर",
            addressLabel: "पत्ता",
            addressText:
                "A/P Baragaon-Pimpri, Tal. Sinnar, Dist. Nashik - 422103. फ्लॅट क्रमांक ८, अथर्व अपार्टमेंट, विजय नगर, सिन्नर, जिल्हा नाशिक, पिन कोड-४२२१०३, महाराष्ट्र येथे प्रकाशित",
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(language === "en" ? "Message sent successfully!" : "संदेश यशस्वीरित्या पाठवला गेला!");
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">{content[language].contactTitle}</h1>
            <p className="contact-subtitle">{content[language].contactSubtitle}</p>

            <div className="contact-container">
                {/* Left Box - Form */}
                <div className="contact-box">
                    <h2>{content[language].sendMessage}</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder={content[language].fullName} required />
                        <input type="email" placeholder={content[language].email} required />
                        <textarea placeholder={content[language].message} rows="5" required></textarea>
                        <button type="submit">{content[language].sendBtn}</button>
                    </form>
                </div>

                {/* Right Box - Info */}
                <div className="contact-box">
                    <h2>{content[language].getInTouch}</h2>
                    <div className="contact-info">
                        <FaEnvelope className="icon" />
                        <div>
                            <h4>{content[language].emailLabel}</h4>
                            <p>pharmacare0823@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-info">
                        <FaPhone className="icon" />
                        <div>
                            <h4>{content[language].phoneLabel}</h4>
                            <p>+91 98229 54912</p>
                            <p>+91 97658 00266</p>
                            <p>+91 94220 21419</p>
                        </div>
                    </div>

                    <div className="contact-info">
                        <FaMapMarkerAlt className="icon" />
                        <div>
                            <h4>{content[language].addressLabel}</h4>
                            <p>{content[language].addressText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
