import React, { useState } from 'react';
// Assuming StudentDashboard.css will be used for general styling
import './Studentprofile.css'; 

// Mock Data for the student profile
const initialProfileData = {
    name: "Aisha Sharma",
    fatherName: "Mr. Rakesh Sharma",
    course: "Full Stack Development",
    dob: "2002-05-21",
    address: "Plot No. 45, Green Park Avenue",
    pincode: "110016",
    state: "Delhi",
    phoneNumber: "+91 98765 43210",
    email: "aisha.sharma@example.com"
};

const StudentProfile = ({ onBackToDashboard }) => {
    // State to hold the current profile data
    const [profile, setProfile] = useState(initialProfileData);
    // State to toggle between view and edit mode
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        // In a real application:
        // 1. Send updated 'profile' data to the backend API.
        // 2. Handle success/failure messages.
        console.log("Saving changes:", profile);
        setIsEditing(false); // Switch back to view mode
    };

    return (
        <div className="student-profile">
            <header className="profile-header">
                <h1>📚 Student Profile</h1>
                <div className="profile-actions">
                    <button 
                        className="btn-back" 
                        onClick={onBackToDashboard}
                    >
                        ← Back to Dashboard
                    </button>
                    <button 
                        className={`btn-edit ${isEditing ? 'btn-save' : ''}`} 
                        onClick={() => { if (!isEditing) setIsEditing(true); }}
                        disabled={isEditing}
                    >
                        {isEditing ? 'Editing...' : 'Edit Profile'}
                    </button>
                </div>
            </header>

            <form className="profile-form-grid" onSubmit={handleSave}>
                {/* --- Personal Information --- */}
                <h2>Personal Information</h2>
                
                {/* Name */}
                <div className="input-group">
                    <label>Student Name</label>
                    <input type="text" name="name" value={profile.name} onChange={handleChange} disabled={!isEditing} required />
                </div>
                
                {/* Father's Name */}
                <div className="input-group">
                    <label>Father's Name</label>
                    <input type="text" name="fatherName" value={profile.fatherName} onChange={handleChange} disabled={!isEditing} required />
                </div>

                {/* Date of Birth */}
                <div className="input-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={profile.dob} onChange={handleChange} disabled={!isEditing} required />
                </div>
                
                {/* Course */}
                <div className="input-group">
                    <label>Course Enrolled</label>
                    <input type="text" name="course" value={profile.course} onChange={handleChange} disabled={true} /> {/* Course is typically not editable here */}
                </div>

                {/* --- Contact Information --- */}
                <h2>Contact Details</h2>

                {/* Phone Number */}
                <div className="input-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} disabled={!isEditing} required />
                </div>
                
                {/* Email */}
                <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={profile.email} onChange={handleChange} disabled={true} /> {/* Email often requires separate verification to change */}
                </div>
                
                {/* Address */}
                <div className="input-group grid-span-2">
                    <label>Address</label>
                    <input type="text" name="address" value={profile.address} onChange={handleChange} disabled={!isEditing} required />
                </div>

                {/* Pincode */}
                <div className="input-group">
                    <label>Pincode</label>
                    <input type="text" name="pincode" value={profile.pincode} onChange={handleChange} disabled={!isEditing} required />
                </div>

                {/* State */}
                <div className="input-group">
                    <label>State</label>
                    <input type="text" name="state" value={profile.state} onChange={handleChange} disabled={!isEditing} required />
                </div>

                {/* Save Button (only visible and enabled in edit mode) */}
                {isEditing && (
                    <button type="submit" className="btn-save-changes grid-span-2">
                        Save Changes
                    </button>
                )}
            </form>
        </div>
    );
};

export default StudentProfile;