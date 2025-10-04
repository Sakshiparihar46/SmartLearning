import React from 'react';
import './RewardsSection.css';

const earningMethods = [
    { icon: '🧠', title: 'Master AI Questions', points: 50, description: 'Earn points for correctly answering AI-generated practice questions.' },
    { icon: '📅', title: 'Complete Schedule', points: 100, description: 'Hit your daily or weekly study targets as planned in your scheduler.' },
    { icon: '📈', title: 'Improve Analytics Score', points: 200, description: 'Gain bonus points for significant jumps in your overall progress score.' },
    { icon: '✅', title: 'Finish a Course Module', points: 300, description: 'Successfully complete all lessons and quizzes in a structured course module.' },
    { icon: '🤝', title: 'Refer a Friend', points: 500, description: 'Invite a friend to EduFlux, and both of you earn a massive point bonus.' },
];

const rewardTiers = [
    { points: '10,000', reward: 'Mastery Certificate', description: 'Official digital certificates to showcase completion of core learning paths.', target: 10000 },
    { points: '25,000', reward: 'Exclusive Course', description: 'Unlock premium, in-depth courses not available to standard users.', target: 25000 },
    { points: '50,000', reward: 'Career Reference', description: 'Earn professional references or LinkedIn endorsements from EduFlux mentors.', target: 50000 },
    { points: '75,000', reward: 'Industry Coupon', description: 'Receive discount codes for industry events, certifications, or partner software.', target: 75000 },
];

const MAX_REWARD_TARGET = 100000;

const RewardsSection = () => {
    return (
        <section className="rewards-section" id="rewards">
            <div className="section-header">
                <div className="title-container">
                    <span className="title-logo">⭐</span> 
                    <h2 className="section-title">The EduFlux Rewards Program</h2>
                </div>
                <p className="section-description">
                    Earn points by mastering new skills and completing targets. The more you learn, the more you unlock!
                </p>
            </div>

            {/*How to Earn Points */}
            <h3 className="subsection-title">🎯 Ways to Earn Points</h3>
            <div className="earning-methods-grid">
                {earningMethods.map((method, index) => (
                    <div key={index} className="earning-card">
                        <div className="earning-icon-container">
                            <span className="earning-icon">{method.icon}</span>
                        </div>
                        <h4 className="earning-card-title">{method.title}</h4>
                        <p className="earning-card-description">{method.description}</p>
                        <div className="point-badge">+{method.points} PTS</div>
                    </div>
                ))}
            </div>

            {/* Reward Tier */}
            <h3 className="subsection-title rewards-title-margin">🎁 Complete the Target, Get Rewarded</h3>
            <div className="rewards-tiers-list">
                <p className="rewards-list-description">Reach these point thresholds to unlock your rewards. Max Tier: 100,000 Points</p>
                {rewardTiers.map((tier, index) => {
                    const percentage = (tier.target / MAX_REWARD_TARGET) * 100;
                    return (
                        <div key={index} className={`reward-tier-card tier-${index + 1}`}>
                            <div className="reward-content">
                                <h4 className="reward-card-title">{tier.reward}</h4>
                                <p className="reward-card-description">{tier.description}</p>
                            </div>

                            <div className="progress-bar-wrapper">
                                <div className="reward-progress-bar">
                                    <div 
                                        className="progress-fill" 
                                        style={{ width: `${percentage}%` }}
                                    >
                                        <span className="progress-label-inner">{tier.reward}</span>
                                    </div>
                                </div>
                                <span className="progress-points-goal">{tier.points} PTS</span>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RewardsSection;