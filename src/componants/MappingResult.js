import React from 'react';
import './MappingResult.css';

// Step status enumeration for better type safety
const StepStatus = {
  PENDING: 'pending',
  ACTIVE: 'active',
  COMPLETED: 'completed'
};

const MappingResults = ({ 
  title = "Mapping Results",
  description = "Explore the mapping results to gain valuable insights. Analyze the data to enhance accuracy and decision-making.",
  totalRecords = 0,
  mappingData = {
    make: { percentage: 0, status: StepStatus.PENDING },
    model: { percentage: 0, status: StepStatus.PENDING },
    variant: { percentage: 0, status: StepStatus.PENDING }
  },
  currentStep = 1
}) => {
  // Helper function to determine progress bar color based on percentage
  const getProgressColor = (percentage) => {
    if (percentage >= 95) return 'green';
    if (percentage >= 80) return 'yellow';
    return 'orange';
  };

  // Helper function to get step circle content
  const getStepContent = (stepNumber, status) => {
    if (status === StepStatus.COMPLETED) return '✓';
    return stepNumber;
  };

  // Define steps configuration
  const steps = [
    { 
      id: 1, 
      label: 'Make Mapping', 
      status: mappingData.make.percentage === 100 ? StepStatus.COMPLETED : 
             currentStep === 1 ? StepStatus.ACTIVE : StepStatus.PENDING 
    },
    { 
      id: 2, 
      label: 'Model Mapping', 
      status: mappingData.model.percentage === 100 ? StepStatus.COMPLETED : 
             currentStep === 2 ? StepStatus.ACTIVE : StepStatus.PENDING 
    },
    { 
      id: 3, 
      label: 'Variant Mapping', 
      status: mappingData.variant.percentage === 100 ? StepStatus.COMPLETED : 
             currentStep === 3 ? StepStatus.ACTIVE : StepStatus.PENDING 
    }
  ];

  return (
    <div className="mapping-results" style={{borderRadius: "10px", marginBottom: "20px"}}>
      <h1>{title}</h1>
      <p className="description">{description}</p>

      <div className="metrics-container">
        <div className="total-records">
          <span className="label">Total Records:</span>
          <span className="value">{totalRecords.toLocaleString()}</span>
        </div>

        <div className="metrics">
          {/* Make Match */}
          <div className="metric">
            <div className="metric-header">
              <span>Make Match</span>
              <span className="percentage">{mappingData.make.percentage} %</span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress ${getProgressColor(mappingData.make.percentage)}`}
                style={{width: `${mappingData.make.percentage}%`}}
              ></div>
            </div>
          </div>

          {/* Model Match */}
          <div className="metric">
            <div className="metric-header">
              <span>Model Match</span>
              <span className="percentage">{mappingData.model.percentage} %</span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress ${getProgressColor(mappingData.model.percentage)}`}
                style={{width: `${mappingData.model.percentage}%`}}
              ></div>
            </div>
          </div>

          {/* Variant Match */}
          <div className="metric">
            <div className="metric-header">
              <span>Variant Match</span>
              <span className="percentage">{mappingData.variant.percentage} %</span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress ${getProgressColor(mappingData.variant.percentage)}`}
                style={{width: `${mappingData.variant.percentage}%`}}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mapping-steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`step ${step.status}`}>
              <div className="step-circle">
                {getStepContent(step.id, step.status)}
              </div>
              <span className={`step-text ${step.status === StepStatus.ACTIVE ? 'yellow' : ''}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && <div className="step-connector"></div>}
            {index === steps.length - 1 && (
              <>
                <div className="step-connector"></div>
                <div className="step final">
                  <div className={`step-circle ${steps.every(s => s.status === StepStatus.COMPLETED) ? 'completed' : ''}`}>
                    ✓
                  </div>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MappingResults;