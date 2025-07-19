import React from 'react';
import { PartnerCode } from '../types';
import { useConfig } from '../hooks/useConfig';

interface PartnerCodeSelectorProps {
  selectedPartner: PartnerCode;
  onPartnerSelect: (partner: PartnerCode) => void;
}

const PartnerCodeSelector: React.FC<PartnerCodeSelectorProps> = ({
  selectedPartner,
  onPartnerSelect
}) => {
  const { partners, loading, error } = useConfig();

  const handlePartnerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = event.target.value;
    const partner = partners.find(p => p.code === selectedCode);
    if (partner) {
      onPartnerSelect(partner);
    }
  };

  return (
    <div className="parameter-group">
      <label>Partner Code</label>
      
      {loading ? (
        <div className="loading-message">Loading partners...</div>
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        <select 
          value={selectedPartner.code} 
          onChange={handlePartnerChange}
          className="parameter-select"
        >
          <option value="">Select Partner</option>
          {partners
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(partner => (
              <option key={partner.code} value={partner.code}>
                {partner.name} ({partner.code})
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default PartnerCodeSelector;