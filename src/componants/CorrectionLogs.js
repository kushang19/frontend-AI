import React from 'react';
import './CorrectionLogs.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Download } from 'lucide-react';
 
const CorrectionLogs = () => {
  const data = [
    {
      srNo: 1,
      vehicleName: "HONDA Activa 125",
      discrepancyIn: "Variant",
      beforeCorrection: "Activa 125s",
      afterCorrection: "Activa 125",
      vehicleMasterId: "Q2200001"
    },
    {
      srNo: 2,
      vehicleName: "AHONDA Activa i",
      discrepancyIn: "Variant",
      beforeCorrection: "HONDA Activa iI",
      afterCorrection: "HONDA Activa i",
      vehicleMasterId: "Q2200002"
    },
    {
      srNo: 3,
      vehicleName: "HERO Splendor Plus",
      discrepancyIn: "Make",
      beforeCorrection: "Heron",
      afterCorrection: "HERO",
      vehicleMasterId: "Q2200003"
    },
    {
      srNo: 4,
      vehicleName: "HONDA Activa 6G",
      discrepancyIn: "Model",
      beforeCorrection: "ACTIVIA",
      afterCorrection: "ACTIVA",
      vehicleMasterId: "Q2200004"
    },
    {
      srNo: 5,
      vehicleName: "YAMAHA MT15 Version 2.0",
      discrepancyIn: "Make",
      beforeCorrection: "YAMAHAA",
      afterCorrection: "YAMAHA",
      vehicleMasterId: "Q2200005"
    },
    {
      srNo: 6,
      vehicleName: "HERO Passion Pro BS6",
      discrepancyIn: "None",
      beforeCorrection: "Passion Pro BS6e",
      afterCorrection: "Passion Pro BS6",
      vehicleMasterId: "Q2200006"
    }
  ];
 
  const downloadHandler = () => {
    toast.success("Your file is being downloaded!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };
 
  return (
    <div className="correction-logs-container">
      <div className='correction-logs-head'>
      <h1>Correction Logs</h1>
      <div className='download-btn' onClick={downloadHandler} >
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_160_7773)">
          <path d="M2 12.3408H4V17.3408H20V12.3408H22V17.3408C22 18.4508 21.11 19.3408 20 19.3408H4C2.9 19.3408 2 18.4508 2 17.3408V12.3408ZM12 15.3408L17.55 9.88082L16.13 8.47082L13 11.5908V2.34082H11V11.5908L7.88 8.47082L6.46 9.89082L12 15.3408Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_160_7773">
          <rect width="24" height="24" fill="white" transform="translate(0 0.34082)"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      </div>
      <ToastContainer />
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