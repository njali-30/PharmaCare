import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Editions from "./components/Editions";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Articles from "./components/Articles";
import AdminWrapper from "./components/Admin"; // AdminLogin + AdminPanel wrapper
import "./App.css";

function App() {
    const [language, setLanguage] = useState("en");
    const [currentPage, setCurrentPage] = useState("home");
    const [selectedEditionDate, setSelectedEditionDate] = useState(null);
    const [showAdminLogin, setShowAdminLogin] = useState(false); // toggle admin login
    const [isAdmin, setIsAdmin] = useState(false); // tracks admin logged in

    const editionsCount = 10;
    const articlesCount = 25;
    const popularArticles = language === "en"
        ? [
            { title: "Clinical and Therapeutics" },
            { title: "Business and Industry" },
            { title: "Policy and Regulation" },
            { title: "Practice and Education" },
            { title: "Opinion and Insights" },
        ]
        : [
            { title: "क्लिनिकल आणि उपचारशास्त्र" },
            { title: "व्यवसाय आणि उद्योग" },
            { title: "धोरणे आणि नियमावली" },
            { title: "प्रॅक्टिस आणि शिक्षण" },
            { title: "मत आणि अंतर्दृष्टी" },
        ];

    const handleAdminClick = () => {
        setShowAdminLogin(true); // show admin login page
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        setShowAdminLogin(false);
        setCurrentPage("home");
    };

    const handleBackFromLogin = () => {
        setShowAdminLogin(false); // go back to home
    };

    return (
        <div className="app-container">
            {/* Show Navbar only if admin login page is NOT open */}
            {!showAdminLogin && (
                <Navbar
                    language={language}
                    setLanguage={setLanguage}
                    setCurrentPage={setCurrentPage}
                    onAdminClick={handleAdminClick}
                    isAdmin={isAdmin} // hide normal navbar links if admin
                />
            )}

            {showAdminLogin ? (
                <AdminWrapper
                    onLogout={handleAdminLogout}
                    onLoginBack={handleBackFromLogin}
                />
            ) : (
                <>
                    {currentPage === "home" && (
                        <Home
                            language={language}
                            editionsCount={editionsCount}
                            articlesCount={articlesCount}
                            popularArticles={popularArticles}
                            setCurrentPage={setCurrentPage}
                            setSelectedEditionDate={setSelectedEditionDate}
                        />
                    )}
                    {currentPage === "about" && <About language={language} />}
                    {currentPage === "editions" && (
                        <Editions
                            language={language}
                            selectedEditionDate={selectedEditionDate}
                        />
                    )}
                    {currentPage === "articles" && <Articles language={language} />}
                    {currentPage === "contact" && <ContactUs language={language} />}
                </>
            )}
        </div>
    );
}

export default App;
