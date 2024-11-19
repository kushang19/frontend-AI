import React from "react";
import "./CorrectionDashboard.css";

const CorrectionDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="header">
        <div className="logo">
          <h1>QUANTIQUE</h1>
          <span>Metadata Pvt Ltd</span>
        </div>
        <h2>Correction Statistics</h2>
        <p>
          View detailed correction statistics to gain insights into data
          accuracy. Analyze discrepancies and make informed decisions.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="stats-bar">
        <div className="stat-item total-records">
          <h3>Total Records</h3>
          <p>2228</p>
        </div>
        <div className="stat-item">
          <h3>Make Match</h3>
          <p>100%</p>
        </div>
        <div className="stat-item">
          <h3>Model Match</h3>
          <p>100%</p>
        </div>
        <div className="stat-item">
          <h3>Variant Match</h3>
          <p>100%</p>
        </div>
      </div>

      {/* Processed Records */}
      <div className="content-section">
        <div className="processed-records">
          <h3>Processed Records</h3>
          <div className="doughnut-chart">
            <div className="chart">
              <div className="inner-circle">
                <span>2228</span>
              </div>
            </div>
          </div>
          <div className="correction-stats">
            <div>
              <h4>Make Corrections</h4>
              <p>5</p>
            </div>
            <div>
              <h4>Model Corrections</h4>
              <p>140</p>
            </div>
            <div>
              <h4>Variant Corrections</h4>
              <p>355</p>
            </div>
          </div>
        </div>

        {/* Discrepancy Pattern */}
        <div className="discrepancy-pattern">
          <h3>Discrepancy Pattern</h3>
          <div className="trend-chart">
            {/* Placeholder for Radar Chart */}
          </div>
          <ul>
            <li>
              <strong>Misspelled makes</strong>: Common across manufacturers,
              highlighting the need for improved data quality checks.
            </li>
            <li>
              <strong>Tata</strong>: Issues with variant information, indicating
              potential inconsistencies in data reporting.
            </li>
            <li>
              <strong>IndiCore Inputs</strong>: High frequency of errors related
              to model names.
            </li>
          </ul>
        </div>
      </div>

      {/* Correction Logs */}
      <div className="correction-logs">
        <h3>Correction Logs</h3>
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Vehicle Name</th>
              <th>Discrepancy In</th>
              <th>Before Correction</th>
              <th>After Correction</th>
              <th>Vehicle Master ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>APRILIA CAPONORD</td>
              <td>Variant</td>
              <td>1200ABS</td>
              <td>1200 ABS</td>
              <td>2200001</td>
            </tr>
            {/* Add additional rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CorrectionDashboard;
