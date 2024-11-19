import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Commercial.css';
import logo from '../logo.svg'; // Update this path as needed

const CommercialPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleProceed = () => {
    if (selectedOption ==='Taxi PCCV') {
      navigate('/TaxiCarPage'); 
    }
    if (selectedOption === 'Truck GCCV' ) {
        navigate('/GccV'); 
    }
    if (selectedOption === 'Bus PCCV' ) {
        navigate('/PccV'); 
    }
    if (selectedOption === 'Misc D' ) {
        navigate('/MisV');
    }
  };

  return (
    <div className="commercial-vehicle-page">
      <div className="logo">
        <img src={logo} alt="Quantique Logo" />
      </div>

      <h1>Kindly Provide Additional Specifications For The <span className="highlight">Commercial Vehicles</span>.</h1>
      <p>Select from the available vehicle specifications to continue.</p>

      <div className="options">
        <input
          type="radio"
          id="taxi"
          value="Taxi PCCV"
          checked={selectedOption === 'Taxi PCCV'}
          onChange={handleOptionChange}
        />
        <label htmlFor="taxi">
          <span className="radio-inner-circle"></span> Taxi Car
        </label>

        <input
          type="radio"
          id="truck"
          value="Truck GCCV"
          checked={selectedOption === 'Truck GCCV'}
          onChange={handleOptionChange}
        />
        <label htmlFor="truck">
          <span className="radio-inner-circle"></span> GCCV
        </label>

        <input
          type="radio"
          id="bus"
          value="Bus PCCV"
          checked={selectedOption === 'Bus PCCV'}
          onChange={handleOptionChange}
        />
        <label htmlFor="bus">
          <span className="radio-inner-circle"></span> PCCV
        </label>

        {/* <input
          type="radio"
          id="three-wheeler"
          value="Three Wheeler"
          checked={selectedOption === 'Three Wheeler'}
          onChange={handleOptionChange}
        />
        <label htmlFor="three-wheeler">
          <span className="radio-inner-circle"></span> Three Wheeler
        </label> */}

        <input
          type="radio"
          id="misc"
          value="Misc D"
          checked={selectedOption === 'Misc D'}
          onChange={handleOptionChange}
        />
        <label htmlFor="misc">
          <span className="radio-inner-circle"></span> Misc D
        </label>
      </div>

      <button
        onClick={handleProceed}
        disabled={!selectedOption}
        className="proceed-button"
      >
        Proceed →
      </button>
      
      <footer>
        <p>© 2024 QuantiqueMetadata. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CommercialPage;
