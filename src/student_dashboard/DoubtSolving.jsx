import React, { useState } from 'react';
import './DoubtSolving.css';
const mockDoubts = [
    { 
        id: 1, 
        topic: "React State Management", 
        question: "What's the difference between Redux and Context API for small applications?", 
        author: "Priya M.", 
        status: "Unsolved", 
        filters: ["React", "Advanced"], 
        answers: 0 
    },
    { 
        id: 2, 
        topic: "Python Syntax", 
        question: "Why do we use 'self' in Python class methods?", 
        author: "Aarav S.", 
        status: "Solved", 
        filters: ["Python", "Beginner"], 
        answers: 3 
    },
    { 
        id: 3, 
        topic: "AWS Deployment", 
        question: "Best practice for setting up CI/CD pipeline for a Node.js API?", 
        author: "Admin", 
        status: "Unsolved", 
        filters: ["DevOps"], 
        answers: 1 
    },
];

const DoubtSolving = ({ onBackToDashboard }) => {
    const [activeTab, setActiveTab] = useState('solve'); // 'ask' or 'solve'
    const [doubts, setDoubts] = useState(mockDoubts);
    const [filterStatus, setFilterStatus] = useState('All');
    const [filterTopic, setFilterTopic] = useState('All');

    const handleAskDoubtSubmit = (e) => {
        e.preventDefault();
        alert("Doubt submitted! It will be reviewed by the community shortly.");
        // In a real app: API call to post doubt, clear form.
        e.target.reset();
        setActiveTab('solve'); // Switch to solve tab to see the list
    };

    const handleSolveDoubt = (id) => {
        // Placeholder for navigating to a detail page to post an answer
        alert(`You are now attempting to solve Doubt ID: ${id}.`);
    };

    // --- Filtering Logic ---
    const filteredDoubts = doubts.filter(doubt => {
        const statusMatch = filterStatus === 'All' || doubt.status === filterStatus;
        const topicMatch = filterTopic === 'All' || doubt.filters.includes(filterTopic);
        return statusMatch && topicMatch;
    });

    const uniqueTopics = [...new Set(mockDoubts.flatMap(d => d.filters))];

    return (
        <div className="doubt-solving-page">
            <header className="doubt-header">
                <h1>❓ Doubt Solving Community</h1>
                <button className="btn-back" onClick={onBackToDashboard}>
                    ← Back to Dashboard
                </button>
            </header>

            {/* --- Tabs: Ask or Solve --- */}
            <div className="doubt-tabs">
                <button 
                    className={`tab-btn ${activeTab === 'solve' ? 'active' : ''}`}
                    onClick={() => setActiveTab('solve')}
                >
                    Solve Doubts
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'ask' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ask')}
                >
                    Ask a Doubt
                </button>
            </div>

            {/* --- Ask a Doubt Area --- */}
            {activeTab === 'ask' && (
                <div className="ask-doubt-container">
                    <h2>Upload Your Doubt</h2>
                    <form className="ask-doubt-form" onSubmit={handleAskDoubtSubmit}>
                        <input type="text" placeholder="Doubt Topic (e.g., Python Syntax)" required />
                        <textarea placeholder="Describe your doubt in detail..." required></textarea>
                        
                        {/* Simple File Upload (for images/code snippets) */}
                        <div className="file-upload-group">
                            <label htmlFor="doubt-upload">Attach File (Optional)</label>
                            <input type="file" id="doubt-upload" accept="image/*, .zip, .txt" />
                        </div>

                        <button type="submit" className="btn-submit-doubt">Submit Doubt</button>
                    </form>
                </div>
            )}

            {/* --- Solve Doubts Area --- */}
            {activeTab === 'solve' && (
                <div className="solve-doubts-container">
                    <div className="doubt-filters">
                        <h3>Filter Doubts:</h3>
                        
                        {/* Filter by Status (Solved/Unsolved) */}
                        <select 
                            value={filterStatus} 
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="All">All Statuses</option>
                            <option value="Unsolved">Unsolved (Help Needed!)</option>
                            <option value="Solved">Solved</option>
                        </select>
                        
                        {/* Filter by Topic */}
                        <select 
                            value={filterTopic} 
                            onChange={(e) => setFilterTopic(e.target.value)}
                        >
                            <option value="All">All Topics</option>
                            {uniqueTopics.map(topic => (
                                <option key={topic} value={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>

                    {/* Doubt List */}
                    <div className="doubt-list">
                        {filteredDoubts.length > 0 ? (
                            filteredDoubts.map(doubt => (
                                <div key={doubt.id} className={`doubt-card ${doubt.status.toLowerCase()}`}>
                                    <div className="doubt-header-info">
                                        <h4>{doubt.topic}</h4>
                                        <span className={`doubt-status ${doubt.status.toLowerCase()}`}>{doubt.status}</span>
                                    </div>
                                    <p className="doubt-question-text">{doubt.question}</p>
                                    <div className="doubt-footer-info">
                                        <span>Author: {doubt.author}</span>
                                        <span>Answers: {doubt.answers}</span>
                                        <button 
                                            className="btn-solve-now" 
                                            onClick={() => handleSolveDoubt(doubt.id)}
                                        >
                                            {doubt.status === 'Solved' ? 'View Answers' : 'Solve Now'}
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-doubts">No doubts match your current filters. Try submitting one!</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoubtSolving;