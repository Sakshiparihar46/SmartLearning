import React, { useState } from 'react';
// Import main dashboard styling
import './StudentDashboard.css'; 

// Import all sub-components (assuming they are in sibling files/directories of student_dashboard)
import DailyFocusSection from './DailyFocusSection'; 
import StudentProfile from './StudentProfile';
import ResumeAnalyzer from './ResumeAnalyzer';
import DoubtSolving from './DoubtSolving'; 

/**
 * The main component for the student's logged-in environment.
 * It manages the current view state and passes the logout handler.
 */
const StudentDashboard = ({ onLogout }) => {
  // State to control which main page the user sees: 
  // 'dashboard', 'profile', 'analyzer', or 'doubt'
  const [currentView, setCurrentView] = useState('dashboard'); 
  
  const handleViewChange = (view) => {
      setCurrentView(view);
  };
  
  // Helper function to return to the main dashboard view
  const handleBackToDashboard = () => handleViewChange('dashboard');

  /**
   * Renders the content based on the currentView state.
   */
  const renderContent = () => {
      // 1. Student Profile View
      if (currentView === 'profile') {
          return <StudentProfile onBackToDashboard={handleBackToDashboard} />;
      }
      
      // 2. Resume Analyzer View
      if (currentView === 'analyzer') {
          return <ResumeAnalyzer onBackToDashboard={handleBackToDashboard} />;
      }

      // 3. Doubt Solving View
      if (currentView === 'doubt') {
          return <DoubtSolving onBackToDashboard={handleBackToDashboard} />;
      }

      // 4. Default Dashboard View (The main landing page content)
      return (
          <>
            <h1 className="welcome-message">Welcome Back, [Student Name]! 👋</h1>
            
            <DailyFocusSection />

            {/* Key Dashboard Metrics */}
            <section className="metrics-grid">
                <div className="metric-card progress-card">
                    <h3>Current Progress</h3>
                    <div className="progress-value">75% Complete</div>
                    <p>Course: Advanced React Hooks</p>
                </div>
                
                <div className="metric-card points-card">
                    <h3>Reward Points</h3>
                    <div className="points-value">12,500 PTS ✨</div>
                    <p>Next Reward: Exclusive Course Access (25,000 PTS)</p>
                </div>
                
                <div className="metric-card schedule-card">
                    <h3>Today's Focus</h3>
                    <div className="schedule-value">2 Hours 🗓️</div>
                    <p>Topic: Data Structures Algorithms</p>
                </div>
            </section>

            {/* Quick Action Links */}
            <section className="quick-actions">
                <h2>Quick Access</h2>
                <div className="action-links-grid">
                    <a href="#ai-questions" className="action-link">
                        <span className="action-icon">🧠</span> AI Question Generator
                    </a>
                    
                    {/* Doubt Solving Link */}
                    <a href="#" onClick={() => handleViewChange('doubt')} className="action-link">
                        <span className="action-icon">❓</span> Doubt Solving
                    </a>

                    <a href="#mock-interviews" className="action-link">
                        <span className="action-icon">🎤</span> Start Mock Interview
                    </a>
                    
                    {/* Resume Analyzer Link */}
                    <a href="#" onClick={() => handleViewChange('analyzer')} className="action-link">
                        <span className="action-icon">💼</span> Analyze Resume
                    </a>
                </div>
            </section>
          </>
      );
  };

  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <div className="dashboard-logo">EduFlux</div>
        <nav className="dashboard-nav">
          {/* Home Link */}
          <a href="#" onClick={() => handleViewChange('dashboard')}>Home</a>
          
          {/* Other Static Nav Links (These would often use routing, but here are placeholders) */}
          <a href="#courses">Courses</a>
          <a href="#analytics">Analytics</a>
          
          {/* Profile Link (triggers view change) */}
          <a href="#" onClick={() => handleViewChange('profile')}>Profile</a> 
          
          {/* Logout Button */}
          <button className="logout-btn" onClick={onLogout}>Logout</button> 
        </nav>
      </header>
      
      <main className="dashboard-content">
        {renderContent()} {/* Renders the currently active view */}
      </main>
      
      <footer className="dashboard-footer">
          <p>EduFlux &copy; {new Date().getFullYear()} - Smart Learning Platform</p>
      </footer>
    </div>
  );
};

export default StudentDashboard;