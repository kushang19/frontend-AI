import React from 'react';
import './CorrectionLogs.css';



const CorrectionLogs = () => {
  const data = [
    {
      srNo: 1,
      vehicleName: "ASTON MARTIN DB11 V12",
      discrepancyIn: "Variant",
      beforeCorrection: "DB11 V10",
      afterCorrection: "DB11 V12",
      vehicleMasterId: "2200001"
    },
    {
      srNo: 2,
      vehicleName: "ASTON MARTIN DB11 V8",
      discrepancyIn: "Variant",
      beforeCorrection: "DB11 V11",
      afterCorrection: "DB11 V8",
      vehicleMasterId: "2200002"
    },
    {
      srNo: 3,
      vehicleName: "ASTON MARTIN VANTAGE COUPE",
      discrepancyIn: "None",
      beforeCorrection: "--",
      afterCorrection: "--",
      vehicleMasterId: "2200003"
    },
    {
      srNo: 4,
      vehicleName: "ASTON MARTIN VANTAGE ROADS",
      discrepancyIn: "None",
      beforeCorrection: "--",
      afterCorrection: "--",
      vehicleMasterId: "2200004"
    },
    {
      srNo: 5,
      vehicleName: "ASTON MARTIN RAPIDE S",
      discrepancyIn: "None",
      beforeCorrection: "--",
      afterCorrection: "--",
      vehicleMasterId: "2200005"
    },
    {
      srNo: 6,
      vehicleName: "ASTON MARTIN RAPIDE AMR",
      discrepancyIn: "None",
      beforeCorrection: "--",
      afterCorrection: "--",
      vehicleMasterId: "2200006"
    }
  ];
  return (
    <div className="correction-logs-container">
      <h1>Correction Logs</h1>
      <div className='head-wrap'>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>
      <div className="filters">
        <button className="filter-button">Make</button>
        <button className="filter-button">Model</button>
        <button className="filter-button">Variant</button>
      </div>
      </div>
      <div className="table-container">
        <table className="correction-table">
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
            {data && data.length > 0 ? (
              data.map((item) => (
                <tr key={item.srNo}>
                  <td>{item.srNo}</td>
                  <td>{item.vehicleName}</td>
                  <td>{item.discrepancyIn}</td>
                  <td>{item.beforeCorrection}</td>
                  <td>{item.afterCorrection}</td>
                  <td>{item.vehicleMasterId}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <span>Showing Results</span>
        <select>
          <option value="1">1</option>
          {/* Add more options as needed */}
        </select>
        <span>500</span>
        <div className="page-controls">
          <button>◀</button>
          <span>2</span>
          <button>▶</button>
        </div>
      </div>
    </div>
  );
};

export default CorrectionLogs;
