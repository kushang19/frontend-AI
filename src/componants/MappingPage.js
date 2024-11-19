import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mapping.css'; // Import the CSS file
import logo from '../logo.svg'; // Ensure the correct path to your logo file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons

function VehicleMappingSystem() {
  const navigate = useNavigate();

  const handleVehicleSelection = (vehicleType) => {
    // Navigate to a different page based on vehicle type
    navigate(`/${vehicleType.toLowerCase()}`); // Use the vehicleType to construct the path (e.g., '/two-wheeler')
  };

  return (
    <div className="vehicle-mapping-system">
      {/* Logo section */}
      <div className="logo">
        <img src={logo} alt="Quantique Logo" />
      </div>

      <h1>Welcome to the Vehicle Mapping System</h1>
      <p>Kindly select the vehicle specifications from the options provided to proceed.</p>

      {/* Vehicle options section */}
      <div className="vehicle-options">
        <div className="vehicle-card" onClick={() => handleVehicleSelection('TwoWheelerPage')}>
          <div className="vehicle-icon">
            <i className="fa-solid fa-motorcycle"></i>
          </div>
          <h3>Two-Wheeler</h3>
          <p>Includes motorcycles, scooters, and mopeds designed for personal use.</p>
        </div>

        <div className="vehicle-card" onClick={() => handleVehicleSelection('FourWheelerPage')}>
          <div className="vehicle-icon">
            <i className="fa-solid fa-car"></i>
          </div>
          <h3>Private-Car</h3>
          <p>Covers cars, sedans, SUVs, and light trucks for personal/family use.</p>
        </div>

        <div className="vehicle-card" onClick={() => handleVehicleSelection('CommercialPage')}>
          <div className="vehicle-icon">
            <i className="fa-solid fa-truck"></i>
          </div>
          <h3>Commercial</h3>
          <p>Covers trucks, vans, buses, and other business/industrial vehicles.</p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2024 QuantiqueMetadata. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default VehicleMappingSystem;
