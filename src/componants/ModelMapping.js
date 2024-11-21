import React, { useState } from "react";
import "./ModelMapping.css";
import MappingResults from "./MappingResult";
import { useNavigate } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"

const VehicleMatchingDashboard = () => {
  const vehicleData = [
    {
      make: "HONDA",
      models: "ACTIVIA, DUO, CB SHINE, HARNET, UNICARN",
      score: "81%",
    },
    {
      make: "HERO",
      models: "SPLENDER, PASSION PRO PRO, XPLUSE 200, GLAMOUR, HF CD DELUXE",
      score: "72%",
    },
    {
      make: "TVS",
      models: "APACHE RTR, JUPYTER, NTORQE, XL100, ZEST",
      score: "83%",
    },
    {
      make: "BAJAJ",
      models: "PULSER, AVENGAR, CT100, DOMINOR, PLATINA",
      score: "79%",
    },
    {
      make: "YAMAHA",
      models: "FZ, R15, MT15, FASSINO, RAYE ZR",
      score: "82%",
    },
  ];
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0); // Add state for progress


  const handleProceed = () => {
    setIsLoading(true); // Set loading to true when button is clicked
    let progress = 0;

    // Simulate loading process with an interval
    const loadingInterval = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        setLoadingPercent(progress); // Update the loading progress
      } else {
        clearInterval(loadingInterval); // Stop the interval when loading is complete
        navigate("/CorrectModel"); // Change '/another-page' to your target route
        window.scrollTo(0,0);
      }
    }, 300); // Simulate loading every 500ms
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="loader-container">
        <div className="spinner"></div>
        <div className="loading-percent">{loadingPercent}%</div>
        <div className="loading-text">Loading.....Please Wait</div>
      </div>
      ) : 
      (
        <>
        <Header />
        <MappingResults
          title="Mapping Results"
          description="Explore the mapping results to gain valuable insights. Analyze the data to enhance accuracy and decision-making."
          totalRecords={794}
          mappingData={{
            make: { percentage: 100, status: "completed" },
            model: { percentage: 81, status: "active" },
            variant: { percentage: 73, status: "pending" },
          }}
          currentStep={2}
        />
        <div className="dashboard">
          {/* Header Section */}
          
          <div className="header">
  
            <div className="stats">
              <div className="stat-item">
                <span className="stat-label">OVERALL MATCH PERCENTAGE</span>
                <span className="stat-value match">81%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">DISCREPANCY</span>
                <span className="stat-value discrepancy">19%</span>
              </div>
            </div>
  
            <div className="controls">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
              <div className="make-model-dropdown">
              <select className="select-control">
                <option>Make</option>
              </select>
              <select className="select-control">
                <option>Model</option>
              </select>
              </div>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="main-content">
            {/* Vehicle Table */}
            <div className="vehicle-table">
              <div className="table-header">
                <div>Vehicle Make</div>
                <div>Vehicle Model/s</div>
                <div>Score</div>
              </div>
  
              <div className="table-body">
                {vehicleData.map((vehicle, index) => (
                  <div key={index} className="table-row">
                    <div>{vehicle.make}</div>
                    <div>{vehicle.models}</div>
                    <div>{vehicle.score}</div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Summary Section */}
            <div className="summary-section">
              <div className="card">
                <h2 className="card-title">Summary</h2>
                <div className="card-content">
                  <h3 className="section-title">Matched Models</h3>
                  <p className="section-text">
                  FZ, R15, MT15, CT100, PLATINA, GLAMOUR, CB SHINE .........
                  </p>
  
                  <h3 className="section-title">Un-Matched Models</h3>
                  <p className="section-text">ACTIVIA, DUO, HARNET, UNICARN, SPLENDER ......</p>
                </div>
              </div>
  
              <div className="card">
                <h2 className="card-title">Insights</h2>
                <div className="card-content">
                  <h3 className="section-title">Reason For Discrepancy</h3>
                  <p className="section-text">• No Such Model ("ACTIVIA, DUO, HARNET, UNICARN, SPLENDER ......") Found.</p>
  
                  <h3 className="section-title">Actionable Insights</h3>
                  <p className="section-text">• Verify Data Source</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Footer */}
          <div className="footer">
            <span className="pagination-info"></span>
            <button className="action-button" onClick={handleProceed}>Correct Discrepancies →</button>
          </div>
        </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default VehicleMatchingDashboard;
