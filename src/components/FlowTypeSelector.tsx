import React from 'react';
import { getFlowsForProduct } from '../config/flows';

interface FlowTypeSelectorProps {
  selectedFlowType: string;
  onFlowTypeSelect: (flowType: string) => void;
  productType: 'FD' | 'PL' | 'SCC';
}

const FlowTypeSelector: React.FC<FlowTypeSelectorProps> = ({
  selectedFlowType,
  onFlowTypeSelect,
  productType
}) => {
  const flowTypes = getFlowsForProduct(productType);

  return (
    <div className="parameter-group">
      <label>Flow Type</label>
      <select 
        value={selectedFlowType} 
        onChange={(e) => onFlowTypeSelect(e.target.value)}
        className="parameter-select"
      >
        <option value="">Select Flow Type</option>
        {flowTypes.map(type => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FlowTypeSelector;