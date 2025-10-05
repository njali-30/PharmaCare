import React, { useState } from "react";
import "./Articles.css";

export default function Articles({ language = "en" }) {
    const [selectedArticle, setSelectedArticle] = useState(null);

    // --- Categories ---
    const categories =
        language === "en"
            ? [
                "Clinical and Therapeutics",
                "Business and Industry",
                "Policy and Regulation",
                "Practice and Education",
                "Opinion and Insights",
            ]
            : [
                "क्लिनिकल आणि उपचारशास्त्र",
                "व्यवसाय आणि उद्योग",
                "धोरणे आणि नियमावली",
                "प्रॅक्टिस आणि शिक्षण",
                "मत आणि अंतर्दृष्टी",
            ];

    // --- Example Articles ---
    const articles = {
        [categories[0]]: [
            {
                title: language === "en" ? "New Antibiotic Shows Promising Results" : "नवीन अँटीबायोटिक आशादायक निकाल दर्शवते",
                date: language === "en" ? "August 2025" : "ऑगस्ट 2025",
                text: language === "en"
                    ? "A recent study highlights a breakthrough antibiotic effective against drug-resistant bacteria. Clinical trials show 92% recovery rates within 7 days."
                    : "अलीकडील अभ्यासात औषध-प्रतिरोधक जंतूवर प्रभावी नवीन अँटीबायोटिक दर्शविला आहे. क्लिनिकल चाचण्यांमध्ये 7 दिवसांत 92% सुधारणा नोंदली गेली.",
            },
            {
                title: language === "en" ? "AI in Drug Discovery" : "औषध शोधामध्ये AI",
                date: language === "en" ? "July 2025" : "जुलै 2025",
                text: language === "en"
                    ? "AI algorithms are accelerating drug discovery by predicting compound interactions and side effects early in development stages."
                    : "AI अल्गोरिदम औषध शोध प्रक्रिया गतीशील करतात, संयुगांच्या परस्पर क्रिया आणि दुष्परिणाम लवकर चरणात भाकीत करून.",
            },
        ],
        [categories[1]]: [
            {
                title: language === "en" ? "Pharma Mergers Drive Market Growth" : "फार्मा विलिनीकरण बाजार वाढीस चालना",
                date: language === "en" ? "June 2025" : "जून 2025",
                text: language === "en"
                    ? "Recent mergers between leading pharma giants have boosted innovation and reduced competition barriers, reshaping the global market."
                    : "आघाडीच्या फार्मा कंपन्यांमधील अलीकडील विलिनीकरणांनी नवोन्मेष वाढविला आणि स्पर्धात्मक अडथळे कमी केले, जागतिक बाजारपेठ पुनर्रचित केली.",
            },
            {
                title: language === "en" ? "India's Generic Drug Exports Surge" : "भारताची सामान्य औषधे निर्यात वाढली",
                date: language === "en" ? "May 2025" : "मे 2025",
                text: language === "en"
                    ? "India has become the largest supplier of affordable generic medicines, accounting for over 20% of global exports."
                    : "भारत सर्वात मोठा परवडणारा सामान्य औषधे पुरवठादार बनला आहे, जागतिक निर्यातातील 20% पेक्षा अधिक हिस्सा घेत आहे.",
            },
        ],
        [categories[2]]: [
            {
                title: language === "en" ? "New Drug Regulation Policy Announced" : "नवीन औषध नियमन धोरण जाहीर",
                date: language === "en" ? "May 2025" : "मे 2025",
                text: language === "en"
                    ? "The government introduced new quality control measures and price capping for essential drugs to improve public health access."
                    : "सरकारने सार्वजनिक आरोग्य प्रवेश सुधारण्यासाठी आवश्यक औषधांसाठी नवीन गुणवत्ता नियंत्रण उपाय आणि किंमत मर्यादा जाहीर केली.",
            },
        ],
        [categories[3]]: [
            {
                title: language === "en" ? "Pharmacy Education Goes Digital" : "फार्मसी शिक्षण डिजिटल झाले",
                date: language === "en" ? "March 2025" : "मार्च 2025",
                text: language === "en"
                    ? "Colleges have adopted virtual labs and AI-based simulators to enhance pharmacy training and clinical understanding."
                    : "कॉलेजांनी फार्मसी प्रशिक्षण आणि क्लिनिकल समज वाढवण्यासाठी वर्चुअल लॅब्स आणि AI-आधारित सिम्युलेटर स्वीकारले आहेत.",
            },
        ],
        [categories[4]]: [
            {
                title: language === "en" ? "Ethics in Pharma Marketing" : "फार्मा विपणनातील नैतिकता",
                date: language === "en" ? "January 2025" : "जानेवारी 2025",
                text: language === "en"
                    ? "Experts debate the fine line between promotion and misinformation, emphasizing patient-first ethics in all marketing activities."
                    : "तज्ञ प्रचार आणि चुकीच्या माहितीच्या सीमारेषेवर चर्चा करतात, सर्व विपणन क्रियाकलापांमध्ये रुग्ण-प्रथम नैतिकतेवर भर देतात.",
            },
        ],
    };

    return (
        <section className="articles-page">
            <h1 className="page-heading">
                {language === "en" ? "Articles" : "लेख"}
            </h1>

            {categories.map((category, index) => (
                <div key={index} className="category-section">
                    <h2 className="category-title">{category}</h2>

                    <div className="scroll-container">
                        {articles[category].map((article, i) => (
                            <div
                                key={i}
                                className="article-card"
                                onClick={() => setSelectedArticle(article)}
                            >
                                <h3>{article.title}</h3>
                                <p>{article.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Modal Popup */}
            {selectedArticle && (
                <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedArticle.title}</h2>
                        <p className="modal-date">{selectedArticle.date}</p>
                        <p className="modal-text">{selectedArticle.text}</p>
                        <button onClick={() => setSelectedArticle(null)} className="close-btn">
                            {language === "en" ? "Close" : "बंद करा"}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
