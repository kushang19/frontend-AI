import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CorrectedMake.css";
import logo from '../logo.svg';
import MappingResults from "./MappingResult";
import Header from "./Header"
import Footer from "./Footer"

const CorrectedMake = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0); // Add state for progress
  const [data, setData] = useState(null)

  useEffect(() => {
    // Simulating a backend fetch call
    const fetchData = async () => {
      try {
        // Replace the URL with your backend endpoint
        const response = await fetch("https://api.example.com/mapping-results");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Using dummy data in case of error
        setData({
          totalRecords: 794,
          progress: { makeMatch: 100, modelMatch: 97, variantMatch: 80 },
          matchedMakes: [
            'HERO (23.1%)', 
            'HONDA (11.4%)', 
            'TVS (13%)', 
            'BAJAJ (8.2%)', 
            'YAMAHA (15.3%)', 
            'SUZUKI (9.1%)', 
            'ROYAL ENFIELD (6.1%)', 
            'KTM (8.5%)', 
            'VESPA (2.1%)', 
            'JAWA (3.2%)',
          ],
          unmatchedMakes: [],
          correctedEntries: [
            { incorrect: "Heron", correct: "HERO" },
            { incorrect: "YAMAHAA", correct: "YAMAHA" },
            { incorrect: "", correct: "" },
          ],
          overallMatch: 100,
          discrepancy: 0,
        });
      }
    };

    fetchData();
  }, []);


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
        navigate("/ModelMapping"); // Change '/another-page' to your target route
        window.scrollTo(0,0);
      }
    }, 300); // Simulate loading every 500ms
  };


  return (
    <div className="mapping-results-container">
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

      <main>
        {/* <h1 className="title">Mapping Results</h1>
        <p className="description">
          Explore the mapping results to gain valuable insights. Analyze the data to enhance accuracy and decision-making.
        </p> */}

        {/* <div className="summary-card">
          <div className="total-records">
            <h2>Total Records</h2>
            <span className="record-count">{data.totalRecords || 0}</span>
          </div>

          <div className="progress-bars">
            <div className="progress">
              <span>Make Match</span>
              <div
                className={`progress-bar ${getProgressColor(data?.progress?.makeMatch)}`}
                style={{ width: `${data?.progress?.makeMatch || 0}%` }}
              />
              <span>{data?.progress?.makeMatch || 0}%</span>
            </div>
            <div className="progress">
              <span>Model Match</span>
              <div
                className={`progress-bar ${getProgressColor(data?.progress?.modelMatch)}`}
                style={{ width: `${data?.progress?.modelMatch || 0}%` }}
              />
              <span>{data?.progress?.modelMatch || 0}%</span>
            </div>
            <div className="progress">
              <span>Variant Match</span>
              <div
                className={`progress-bar ${getProgressColor(data?.progress?.variantMatch)}`}
                style={{ width: `${data?.progress?.variantMatch || 0}%` }}
              />
              <span>{data?.progress?.variantMatch || 0}%</span>
            </div>
          </div>
        </div> */}

            <div>

            <MappingResults
                  title="Mapping Results"
                  description="Explore the mapping results to gain valuable insights. Analyze the data to enhance accuracy and decision-making."
                  totalRecords={794}
                  mappingData={{
                    make: { percentage: 100, status: "active" },
                    model: { percentage: 81, status: "pending" },
                    variant: { percentage: 73, status: "pending" },
                  }}
                  currentStep={1}
          />
            </div>

        <div className="summary">
          <h4>Matched Makes</h4>
          <p>{data?.matchedMakes?.join(", ") || "--"}</p>

          <h4>Un-Matched Makes</h4>
          <p>{data?.unmatchedMakes?.length ? data.unmatchedMakes.join(", ") : "--"}</p>

          <div className="corrected-entries">
            <h4>Corrected Entries</h4>
            <ul>
              {data?.correctedEntries?.map((entry, index) => (
                <li key={index}>
                  {entry.incorrect} ➔ {entry.correct}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="proceed-button" onClick={handleProceed}>
          Proceed To Model Mapping
        </button>
      </main>
        </>
      )}
        <Footer />
    </div>
  );
};

export default CorrectedMake;
