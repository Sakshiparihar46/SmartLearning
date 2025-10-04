import React from 'react';
import './DailyFocusSection.css'; 

const dailyTasks = [
    { id: 1, text: "Review React Redux module 3", completed: false },
    { id: 2, text: "Complete 15 AI-generated practice questions", completed: false },
    { id: 3, text: "Join the 4:00 PM Live Doubt Session", completed: true },
    { id: 4, text: "Update resume based on AI analysis feedback", completed: false },
];

const performanceData = [80, 75, 85, 90, 88, 92, 95];

const DailyFocusSection = () => {
  return (
    <section className="daily-focus-section">
        
        {/* 1. Daily Task List */}
        <div className="daily-tasks-card">
            <h2>📝 Your Daily Tasks</h2>
            <ul className="task-list">
                {dailyTasks.map(task => (
                    <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                        <span className="task-checkbox">{task.completed ? '✅' : '☐'}</span>
                        <span className="task-text">{task.text}</span>
                    </li>
                ))}
            </ul>
            <button className="view-all-tasks-btn">View Full Planner →</button>
        </div>

        {/* 2. Mini Analytics Card */}
        <div className="analytics-summary-card">
            <h2>📈 Weekly Performance</h2>
            <p className="avg-score">Average Score: **89%**</p>
            
            {/* Simple Graphical Representation (Mini Bar Chart) */}
            <div className="mini-bar-chart-container">
                {performanceData.map((score, index) => (
                    <div key={index} className="bar-wrapper">
                        {/* Bar height is proportional to the score (e.g., 95% of the max height) */}
                        <div 
                            className="performance-bar" 
                            style={{ height: `${score}%` }} 
                            title={`Day ${index + 1}: ${score}%`}
                        ></div>
                    </div>
                ))}
            </div>
            <p className="analytics-insight">You've improved **+10%** over the last 7 days!</p>
        </div>
    </section>
  );
};

export default DailyFocusSection;