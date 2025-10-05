import React, { useState, useEffect } from "react";
import "./Editions.css";

export default function Editions({ language, selectedEditionDate }) {
    const [selectedDate, setSelectedDate] = useState(
        selectedEditionDate || new Date().toISOString().substr(0, 10)
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [zoom, setZoom] = useState(1);
    const [fullscreen, setFullscreen] = useState(false);

    const totalPages = 8;

    const editions = [
        { date: "2025-09-17", enTitle: "PharmaCare - September 2025 Edition", mrTitle: "फार्माकेअर - सप्टेंबर 2025 आवृत्ती" },
        { date: "2025-08-17", enTitle: "PharmaCare - August 2025 Edition", mrTitle: "फार्माकेअर - ऑगस्ट 2025 आवृत्ती" },
        { date: "2025-07-17", enTitle: "PharmaCare - July 2025 Edition", mrTitle: "फार्माकेअर - जुलै 2025 आवृत्ती" },
        // add more editions as needed
    ];

    // update selectedDate if prop changes
    useEffect(() => {
        if (selectedEditionDate) setSelectedDate(selectedEditionDate);
    }, [selectedEditionDate]);

    const selectedEdition = editions.find(ed => ed.date === selectedDate);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleZoomIn = () => setZoom(prev => prev + 0.1);
    const handleZoomOut = () => setZoom(prev => (prev > 0.5 ? prev - 0.1 : prev));
    const handleFullscreen = () => {
        setFullscreen(!fullscreen);
        if (!fullscreen) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
    };
    const handleShare = () => alert(language === "en" ? "Share feature coming soon!" : "सामायिक करण्याची सुविधा लवकरच येईल!");
    const handleDownload = () => alert(language === "en" ? "Download feature coming soon!" : "डाउनलोड करण्याची सुविधा लवकरच येईल!");

    return (
        <div className="editions-page">
            {/* Top Info */}
            <div className="editions-top-info">
                <div className="paper-details">
                    {selectedEdition ? (
                        <>
                            <h1 className="paper-title">{language === "en" ? selectedEdition.enTitle : selectedEdition.mrTitle}</h1>
                            <p className="publication-date">
                                <strong>{language === "en" ? "Publication Date:" : "प्रकाशन तारीख:"}</strong> {selectedEdition.date}
                            </p>
                        </>
                    ) : (
                        <p style={{ color: "red", fontWeight: "bold" }}>
                            {language === "en" ? "No edition exists for this date." : "या तारखेसाठी कोणतीही आवृत्ती नाही."}
                        </p>
                    )}
                </div>

                {/* Date Picker */}
                <div className="date-picker-container">
                    <label>
                        {language === "en" ? "Select Date:  " : "तारीख निवडा:"}
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </label>
                </div>

                <div className="editions-controls">
                    <button onClick={handleZoomOut}>🔍-</button>
                    <button onClick={handleZoomIn}>🔍+</button>
                    <button onClick={handleFullscreen}>{fullscreen ? (language === "en" ? "Exit Fullscreen" : "पूर्ण स्क्रीन बाहेर") : "⛶"}</button>
                    <button onClick={handleShare}>{language === "en" ? "Share" : "सामायिक करा"}</button>
                    <button onClick={handleDownload}>{language === "en" ? "Download" : "डाउनलोड"}</button>
                </div>
            </div>

            {/* Fullscreen Page Viewer */}
            {selectedEdition && (
                <div className="page-viewer">
                    <button className="page-btn left-btn" onClick={handlePrevPage}>{"<"}</button>

                    <div className="page-container" style={{ transform: `scale(${zoom})` }}>
                        <div className="page">
                            <p><strong>{language === "en" ? "Page:" : "पृष्ठ:"}</strong> {currentPage} / {totalPages}</p>
                            <p>{language === "en" ? `Content of Page ${currentPage} goes here.` : `पृष्ठ ${currentPage} ची सामग्री येथे आहे.`}</p>
                        </div>
                    </div>

                    <button className="page-btn right-btn" onClick={handleNextPage}>{">"}</button>
                </div>
            )}
        </div>
    );
}
