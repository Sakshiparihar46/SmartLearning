import React from 'react';
import './FeaturesSection.css';

const featuresData = [
    { title: "Scheduling", icon: "📅", description: "Master your time with intelligent scheduling and personalized study reminders." },
    { title: "AI Questions", icon: "🧠", description: "Generate custom, adaptive practice questions tailored to your knowledge gaps." },
    { title: "Doubt Solving", icon: "💬", description: "Get instant, 24/7 clarification on complex topics from our dedicated AI assistant." },
    
    { title: "Mock Interviews", icon: "🎤", description: "Practice behavioral and technical questions with realistic, AI-powered interview simulations." },
    { title: "Goal Setting", icon: "🏆", description: "Define clear learning milestones and track your progress toward certification or career goals." },
    { title: "Community Forum", icon: "🧑‍🤝‍🧑", description: "Connect with peers and experts to share knowledge and collaborate on projects." },

    { title: "Analytics", icon: "📈", description: "Track progress and identify key areas for improvement with deep, actionable insights." },
    { title: "Resume Analysis", icon: "💼", description: "Optimize your resume for target jobs using AI-driven feedback and scorecards." },
    { title: "Skill Gap Bridging", icon: "🎯", description: "Personalized roadmaps to close skill gaps and achieve specific career targets." },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="section-header">
        {/* Title Logo and Title */}
        <div className="title-container">
            <span className="title-logo">💡</span> 
            <h2 className="section-title">Core Features of EduFlux</h2>
        </div>
        
        {/* description */}
        <p className="section-description">
          Our intelligent suite of tools is designed to streamline your learning process, from planning your study time to mastering advanced skills.
        </p>
      </div>

      {/*(Grid) */}
      <div className="features-grid-container">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;