import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Twowheeler.css';
import logo from '../logo.svg'; // Ensure this path is correct
 
const TwoWheelerPage = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const navigate = useNavigate();
 
  const handleFile1Change = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || selectedFile.type === 'text/csv')) {
      setFile1(selectedFile);
    } else {
      alert('Please upload a valid .xlsx or .csv file.');
      event.target.value = null;
    }
  };
 
  const handleFile2Change = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || selectedFile.type === 'text/csv')) {
      setFile2(selectedFile);
    } else {
      alert('Please upload a valid .xlsx or .csv file.');
      event.target.value = null;
    }
  };
 
  const handleSubmit = () => {
    setIsLoading(true);
    setLoadingPercent(0);
 
    const loadingInterval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          navigate('/MakeMatch');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
 
  return (
    <div className="media-upload">
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <div className="loading-percent">{loadingPercent}%</div>
          <div className="loading-text">
            Loading.....Please Wait          
          </div>
        </div>
      ) : (
        <>
          <div className="logo">
            <img src={logo} alt="Quantique Logo" />
          </div>
 
          <h1>Media Upload</h1>
          <p>Upload your input and master files to begin the mapping process.</p>
 
          <div className="upload-section">
            <div className="upload-container">
              <label className="upload-label">Upload Your Input File</label>
              <p>Max file size is 200mb. Supported files are .csv and .xlsx</p>
             
              <div className="upload-box" onClick={() => document.getElementById('file-upload-input').click()}>
                <input
                  type="file"
                  id="file-upload-input"
                  onChange={handleFile1Change}
                  accept=".csv, .xlsx"
                  style={{ display: 'none' }}
                />
                <i className="fas fa-file-upload"></i>
                <p>Drag & drop your file or <span className="browse-link">Browse</span></p>
              </div>
              {file1 && <span className="file-name">{file1.name}</span>}
            </div>
 
            <div className="upload-container">
              <label className="upload-label">Upload Your Master File</label>
              <p>Max file size is 200mb. Supported files are .csv and .xlsx</p>
             
              <div className="upload-box" onClick={() => document.getElementById('file-upload-master').click()}>
                <input
                  type="file"
                  id="file-upload-master"
                  onChange={handleFile2Change}
                  accept=".csv, .xlsx"
                  style={{ display: 'none' }}
                />
                <i className="fas fa-file-upload"></i>
                <p>Drag & drop your file or <span className="browse-link">Browse</span></p>
              </div>
              {file2 && <span className="file-name">{file2.name}</span>}
            </div>
          </div>
 
          <button
            onClick={handleSubmit}
            disabled={!file1 || !file2}
            className="upload-button"
          >
            Perform Mapping →
          </button>
 
          <footer>
            <p>© 2024 QuantiqueMetadata. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
};
 
export default TwoWheelerPage;