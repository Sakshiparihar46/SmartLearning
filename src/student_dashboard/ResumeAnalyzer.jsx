import React, { useState } from 'react';
// Assuming you'll create a dedicated CSS file
import './ResumeAnalyzer.css'; 

const ResumeAnalyzer = ({ onBackToDashboard }) => {
    // State to hold the uploaded file object (File API)
    const [selectedFile, setSelectedFile] = useState(null);
    // State to hold the extracted text data from the resume
    const [analysisResult, setAnalysisResult] = useState('');
    // State for loading/processing simulation
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        // Get the first file selected by the user
        const file = e.target.files[0];
        setSelectedFile(file);
        setAnalysisResult(''); // Clear previous results
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!selectedFile) {
            alert("Please select a resume file (PDF or DOCX) to analyze.");
            return;
        }

        setIsLoading(true);
        setAnalysisResult('');

        // --- SIMULATED RESUME PROCESSING ---
        // In a real application, you would send 'selectedFile' to a backend API 
        // that uses a library (like Tesseract, Apache Tika, or a commercial NLP API) 
        // to parse the file and extract text and keywords.

        console.log(`Analyzing file: ${selectedFile.name}...`);

        // Simulate network delay and processing time
        await new Promise(resolve => setTimeout(resolve, 3000)); 

        // Simulated extracted data (formatted as plain text)
        const mockAnalysis = `
        --- RESUME ANALYSIS RESULTS ---

        File Name: ${selectedFile.name}
        File Size: ${(selectedFile.size / 1024).toFixed(2)} KB
        Upload Date: ${new Date().toLocaleDateString()}

        *** Extracted Text Content Summary ***

        [Name]: John Doe
        [Contact]: john.doe@mail.com | (555) 123-4567 | London, UK
        
        [Professional Summary]: 
        Highly motivated and results-driven Full Stack Developer with 5+ years of experience in building and deploying scalable web applications using React and Node.js. Expertise in Agile methodologies and cloud deployment (AWS). Seeking a challenging role to leverage technical skills in a dynamic environment.

        [Technical Skills]:
        Frontend: React, Redux, JavaScript (ES6+), HTML5, CSS3, SCSS
        Backend: Node.js, Express, Python, Django, REST APIs
        Database: PostgreSQL, MongoDB
        Tools & Cloud: Git, Docker, AWS (EC2, S3), CI/CD

        [Experience]:
        - Senior Developer @ TechCorp (2022 - Present): Led migration to microservices, boosting performance by 30%.
        - Developer @ WebSolutions (2019 - 2022): Developed core features for e-commerce platform.

        [Education]:
        - M.Sc. Computer Science, University of Manchester

        *** Keywords Identified ***
        Full Stack, React, Node.js, AWS, REST API, Microservices, Agile, Deployment, PostgreSQL.
        `;

        setAnalysisResult(mockAnalysis);
        setIsLoading(false);
        console.log("Analysis complete.");
    };

    return (
        <div className="resume-analyzer-page">
            <header className="analyzer-header">
                <h1>📄 Resume Analyzer Tool</h1>
                <button 
                    className="btn-back" 
                    onClick={onBackToDashboard}
                >
                    ← Back to Dashboard
                </button>
            </header>

            <section className="analyzer-content-grid">
                
                {/* --- 1. Upload Form --- */}
                <div className="upload-card">
                    <h2>Upload Your Resume</h2>
                    <p>Upload your latest resume (PDF or DOCX) for detailed analysis and personalized feedback.</p>
                    
                    <form onSubmit={handleSubmit} className="upload-form">
                        <input 
                            type="file" 
                            id="resume-file-input"
                            accept=".pdf, .docx" 
                            onChange={handleFileChange}
                            className="file-input-hidden"
                        />
                        <label htmlFor="resume-file-input" className="file-upload-label">
                            {selectedFile ? selectedFile.name : "Choose File (PDF/DOCX)"}
                        </label>
                        
                        <button 
                            type="submit" 
                            className="btn-submit-analyze"
                            disabled={!selectedFile || isLoading}
                        >
                            {isLoading ? 'Analyzing...' : 'Submit & Analyze Resume'}
                        </button>
                    </form>
                </div>

                {/* --- 2. Analysis Results --- */}
                <div className="results-card">
                    <h2>Analysis Results</h2>
                    {isLoading && (
                        <p className="loading-message">
                            Processing resume, please wait... 🧠
                        </p>
                    )}

                    {analysisResult ? (
                        <textarea 
                            className="analysis-text-area"
                            readOnly
                            value={analysisResult}
                        />
                    ) : (
                        !isLoading && <p>Upload a file to see the extracted text and properties here.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ResumeAnalyzer;