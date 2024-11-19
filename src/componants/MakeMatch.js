import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MakeMatch.css';
import logo from '../logo.svg';
import MappingResults from "./MappingResult";
 
const MakeMatch = ({
  totalRecords = 794,
  makeMatch = 87,
  modelMatch = 83,  
  variantMatch = 72,
  matchedMakes = [],
  unmatchedMakes = [],
  discrepancy = 13,
  insights = { reasons: [], actions: [] }
}) => {
  const navigate = useNavigate();
 
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0); // Add state for progress
 
  const handleButtonClick = () => {
    setIsLoading(true); // Set loading to true when button is clicked
    let progress = 0;
   
    // Simulate loading process with an interval
    const loadingInterval = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        setLoadingPercent(progress); // Update the loading progress
      } else {
        clearInterval(loadingInterval); // Stop the interval when loading is complete
        navigate('/CorrectedMake'); // Change '/another-page' to your target route
      }
    }, 500); // Simulate loading every 500ms
  };
 
  return (
    <div className="mapping-results-container">
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
          <header className="mapping-results-header">
            <div className="mapping-results-logo">
              <img src={logo} alt="Quantique Logo" />
            </div>
            {/* <h1>Mapping Results</h1>
            <p>Explore the mapping results to gain valuable insights. Analyze the data to enhance accuracy and decision-making.</p> */}
          </header>
 
          {/* <div className="mapping-results-summary">
            <div className="mapping-results-total-records">
              <span>Total Records:</span> {totalRecords}
            </div>
            <div className="mapping-results-progress-bars">
              <div className="mapping-results-progress">
                <span>Make Match</span>
                <div className="mapping-results-progress-bar">
                  <div style={{ width: `${makeMatch}%` }} className="make-match-fill"></div>
                  {makeMatch}%
                </div>
              </div>
              <div className="mapping-results-progress">
                <span>Model Match</span>
                <div className="mapping-results-progress-bar">
                  <div style={{ width: `${modelMatch}%` }} className="model-match-fill"></div>
                  {modelMatch}%
                </div>
              </div>
              <div className="mapping-results-progress">
                <span>Variant Match</span>
                <div className="mapping-results-progress-bar">
                  <div style={{ width: `${variantMatch}%` }} className="variant-match-fill"></div>
                  {variantMatch}%
                </div>
              </div>
            </div>
          </div> */}

          <MappingResults
                  title="Mapping Results"
                  description="Explore the mapping results to gain valuable insights. Analyze the data to enhance accuracy and decision-making."
                  totalRecords={794}
                  mappingData={{
                    make: { percentage: 87, status: "active" },
                    model: { percentage: 81, status: "pending" },
                    variant: { percentage: 73, status: "pending" },
                  }}
                  currentStep={1}
          />
          <div className="mapping-results-match-results">
            <div className="mapping-results-match-overview">
              <h2>Make Match Results</h2>
              <div className="mapping-results-match-percentage">
                <span>Overall Match Percentage:</span> {makeMatch}%
              </div>
              <div className="mapping-results-discrepancy">
                <span>Discrepancy:</span> {discrepancy}%
              </div>
            </div>
           
            <div className="mapping-results-summary">
              <h3>Summary</h3>
              <div className="mapping-results-matched-makes">
                <li>Matched Makes</li>
                <p>{matchedMakes.length > 0 ? matchedMakes.join(', ') : 'HERO (23%), HONDA (19%), TVS (27%), BAJAJ (21%), YAMAHA (13%), SUZUKI (9%), ROYAL ENFIELD (17%), KTM (8%), VESPA (2%), JAWA (3%).'}</p>
              </div>
              <div className="mapping-results-unmatched-makes">
                <li>Un-Matched Makes</li>
                <p>{unmatchedMakes.length > 0 ? unmatchedMakes.join(', ') : 'Heron (5.1%), YAMAHAA (3%).......'}</p>
              </div>
            </div>
 
            <div className="mapping-results-insights">
              <h3>Insights</h3>
              <li>Reason For Discrepancy:</li>
              <ul>
                {insights.reasons.length > 0 ? insights.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                )) : <h5>Typo in Records</h5>}
              </ul>
              <li>Actionable Insights:</li>
              <ul>
                {insights.actions.length > 0 ? insights.actions.map((action, index) => (
                  <li key={index}>{action}</li>
                )) : <h5>Varify Data Source</h5>}
              </ul>
            </div>
          </div>
 
          <button className="mapping-results-correct-discrepancies-button" onClick={handleButtonClick}>
            Correct Discrepancies
          </button>
 
          <footer className="mapping-results-footer">
            © quantiquemetadata@2024 all rights reserved  
          </footer>
        </>
      )}
    </div>
  );
};
 
export default MakeMatch;