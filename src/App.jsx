import React, { useState } from 'react';
import Header from './Header'; 
import HeroSection from './HeroSection'; 
import FeaturesSection from './FeaturesSection'; 
import RewardsSection from './RewardsSection'; 
import Footer from './Footer'; 
import LoginModal from './LoginModal'; 
import SignupModal from './SignupModal'; 
import StudentDashboard from './student_dashboard/StudentDashboard'; 

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSuccessfulSignup = () => {
      closeSignupModal(); 
      setIsUserLoggedIn(true); 
  };
  
  const handleLogout = () => {
      setIsUserLoggedIn(false); 
      console.log("User logged out. Showing landing page.");
  };

  const openLoginModal = () => {
    setIsSignupModalOpen(false); 
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  
  const openSignupModal = () => {
    setIsLoginModalOpen(false); 
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const switchToLogin = () => {
    closeSignupModal();
    openLoginModal();
  };

  const switchToSignup = () => {
    closeLoginModal();
    openSignupModal();
  };

  if (isUserLoggedIn) {
      return <StudentDashboard onLogout={handleLogout} />; 
  }

  return (
    <div className="App">
      <Header 
        onLoginClick={openLoginModal} 
        onSignupClick={openSignupModal} 
      />
      
      <HeroSection 
        onGetStartedClick={openSignupModal} 
      /> 

      <main>
        <FeaturesSection />
        <RewardsSection /> 
      </main>

      <Footer /> 

      {/* Modals */}
      {isLoginModalOpen && (
        <LoginModal 
          onClose={closeLoginModal} 
          onSwitchToSignup={switchToSignup} 
        />
      )}
      
      {isSignupModalOpen && (
        <SignupModal 
          onClose={closeSignupModal} 
          onSwitchToLogin={switchToLogin} 
          onSuccessfulSignup={handleSuccessfulSignup} 
        />
      )}
    </div>
  );
}

export default App;