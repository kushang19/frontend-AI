import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './componants/LoginPage'; 
import MappingPage from './componants/MappingPage'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import TwoWheelerPage from './componants/TwoWheelerPage';
import FourWheelerPage from './componants/FourWheelerPage';
import CommercialPage from './componants/CommercialPage';
import TaxiCarPage from './componants/TaxiCarPage';
import GccV from './componants/GccV';
import PccV from './componants/PccV';
import MisV from './componants/MisV';
import MakeMatch from './componants/MakeMatch';
import CorrectedMake from './componants/CorrectedMake';
import CorrectionDashboard from './componants/CorrectionDashboard';
import ModelMapping from './componants/ModelMapping';
import VariantMapping from './componants/VariantMapping';
import CorrectModel from './componants/CorrectModel';
import CorrectVariant from './componants/CorrectVariant';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MappingPage" element={<MappingPage />} /> 
        <Route path="/TwoWheelerPage" element={<TwoWheelerPage />} />
        <Route path="/FourWheelerPage" element={<FourWheelerPage />} />
        <Route path="/CommercialPage" element={<CommercialPage />} /> 
        <Route path="/TaxiCarPage" element={<TaxiCarPage />} />
        <Route path="/GccV" element={<GccV />} />
        <Route path="/PccV" element={<PccV />} /> 
        <Route path="/MisV" element={<MisV />} /> 
        <Route path='/MakeMatch' element={<MakeMatch/>}/>
        <Route path='/CorrectedMake' element={<CorrectedMake/>}/>
        <Route path='/CorrectionDashboard' element={<CorrectionDashboard/>}/>
        <Route path='/ModelMapping' element={<ModelMapping/>}/>
        <Route path='/CorrectModel' element={<CorrectModel/>}/>
        <Route path='/VariantMapping' element={<VariantMapping/>}/>
        <Route path='/CorrectVariant' element={<CorrectVariant/>}/>
      </Routes>
    </Router>
  );
}

export default App;

