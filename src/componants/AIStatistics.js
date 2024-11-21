import React from "react";
import image1 from "../assets/ProcessedRecords_new.png"; //559x576
import image2 from "../assets/DiscrepancyPattern_new.png"; // 461x576
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
          variant: { percentage: 90.2, status: "completed" },
        }}
        currentStep={2}
      />
      <div className="wrapper">
        <div className="top-wrap">
          <div className="left-wrap" style={{backgroundColor: "#211F24", borderRadius: "12px"}} >
            <img src={image1} width="559" height="570" alt="Processed Records" />
          </div>
          <div className="right-wrap">
            <img src={image2} width="461" height="585" alt="Discrepancy Pattern" />
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