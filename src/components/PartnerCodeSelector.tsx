import React from 'react';
import { PartnerCode } from '../types';
import { useConfig } from '../hooks/useConfig';
import SearchableDropdown from './SearchableDropdown';
import './SearchableDropdown.css';

interface PartnerCodeSelectorProps {
  selectedPartner: PartnerCode;
  onPartnerSelect: (partner: PartnerCode) => void;
}

const PartnerCodeSelector: React.FC<PartnerCodeSelectorProps> = ({
  selectedPartner,
  onPartnerSelect
}) => {
  const { partners, loading, error } = useConfig();

  const handlePartnerChange = (selectedCode: string) => {
    const partner = partners.find(p => p.code === selectedCode);
    if (partner) {
      onPartnerSelect(partner);
    }
  };

  // Transform partners to dropdown options
  const partnerOptions = partners.map(partner => ({
    value: partner.code,
    label: partner.name,
    sublabel: partner.baseUrl ? new URL(partner.baseUrl).hostname : undefined
  }));

  return (
    <div className="parameter-group">
      <label>Partner Code</label>
      
      <SearchableDropdown
        options={partnerOptions}
        value={selectedPartner.code}
        onChange={handlePartnerChange}
        placeholder="Search partners by name or code..."
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default PartnerCodeSelector;