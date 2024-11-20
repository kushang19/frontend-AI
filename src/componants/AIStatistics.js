import React from "react";
import image1 from "../assets/ProcessedRecords.png";
import image2 from "../assets/DiscrepancyPattern.png";
import image3 from "../assets/MappingTrend.png";
import MappingResults from "./MappingResult";
import CorrectionLogs from "./CorrectionLogs";
import "./AIStatistics.css";
import Header from "./Header";
import Footer from "./Footer";

const AIStatistics = () => {
  return (
    <div className="ai-container">
      <Header />
      <MappingResults
        title="Correction Statistics"
        description="View detailed correction statistics to gain insights into data accuracy. Analyze discrepancies and make informed decisions."
        totalRecords={794}
        mappingData={{
          make: { percentage: 100, status: "completed" },
          model: { percentage: 100, status: "completed" },
          variant: { percentage: 100, status: "completed" },
        }}
        currentStep={2}
      />
      <div className="wrapper">
        <div className="top-wrap">
          <div className="left-wrap">
            <img src={image1} alt="Processed Records" />
          </div>
          <div className="right-wrap">
            <img src={image2} alt="Discrepancy Pattern" />
          </div>
        </div>
        <div className="mid-wrap">
          <img src={image3} alt="Mapping Trend" />
        </div>
        <div className="bottom-wrap">
          <CorrectionLogs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIStatistics;
