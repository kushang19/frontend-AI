import React, { useState } from "react";
import "./CorrectVariant.css";
import MappingResults from "./MappingResult";
import { useNavigate } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"

const VehicleMatchingDashboard = () => {
  const vehicleData = [
    {
      make: "HONDA",
      models: "ACTIVA",
      variant: "Activa 125, Activa 6G, Activa i",
      score: "95%",
    },
    {
      make: "HERO",
      models: "PASSION PRO",
      variant: "Passion Pro BS6, Passion Pro Xtec",
      score: "100%",
    },
    {
      make: "TVS",
      models: " JUPITER",
      variant: "Jupiter Classic, Jupiter ZX, Jupiter SmartXonnect",
      score: "100%",
    },
    {
      make: "BAJAJ",
      models: "PULSAR",
      variant: "Pulsar NS160, Pulsar 150 Neon, Pulsar RS200",
      score: "100%",
    },
    {
      make: "YAMAHA",
      models: "RAY ZR",
      variant: "Ray ZR Street Rally, Ray ZR 125 Fi",
      score: "100%",
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
        navigate("/AIStatistics"); // Change '/another-page' to your target route
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
            make: { percentage: 100, status: "completed"},
            model: { percentage: 100, status: "active" },
            variant: { percentage: 85, status: "pending" },
          }}
          currentStep={3}
        />
        <div className="dashboard">
          {/* Header Section */}
          <div className="header">
            <div className="stats">
              <div className="stat-item">
                <span className="stat-label">OVERALL MATCH PERCENTAGE</span>
                <span className="stat-value match">85%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">DISCREPANCY</span>
                <span className="stat-value discrepancy">15%</span>
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
              <select className="select-control">
                <option>Variant</option>
              </select>
              </div>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="main-content">
            {/* Vehicle Table */}
            <div className="vehicle-table">
              <div className="table-header varaint-mapping">
                <div>Vehicle Make</div>
                <div>Vehicle Model/s</div>
                <div>Vehicle Variant/s</div>
                <div>Score</div>
              </div>
  
              <div className="table-body">
                {vehicleData.map((vehicle, index) => (
                  <div key={index} className="table-row varaint-mapping">
                    <div>{vehicle.make}</div>
                    <div>{vehicle.models}</div>
                    <div>{vehicle.variant}</div>
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
                    3015 TT (20%), MAV (6X2) (18%), 1920 (15%), 2670 (12%), 2690
                    (10%), 3670 (8%)
                  </p>
  
                  <h3 className="section-title">Un-Matched Models</h3>
                  <p className="section-text">3970 (3%)</p>
                </div>
              </div>
  
              <div className="card">
                <h2 className="card-title">Corrected Entries</h2>
                <div className="card-content">
                  <p className="section-text">
                    73%
                    →
                    85%
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Footer */}
          <div className="footer">
            <span className="pagination-info">Showing Results 1-7 of 100</span>
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
