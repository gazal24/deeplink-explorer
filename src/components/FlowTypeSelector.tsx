import React from 'react';

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
  const getFlowTypes = () => {
    switch (productType) {
      case 'FD':
        return [
          { label: 'Single Bank Selection', value: 'deeplink-manager/fd/FSI_FILTER?fsiList=UTKSIN' },
          { label: 'Multiple Bank Selection', value: 'deeplink-manager/fd/FSI_FILTER?fsiList=UTKSIN|SMCBIN' },
          { label: 'My Investments', value: 'deeplink-manager/fd/VIEW_INVESTMENTS' },
          { label: 'Booked FDs', value: 'deeplink-manager/fd/VIEW_INVESTMENTS?section=BOOKED' },
          { label: 'Pending Journeys', value: 'deeplink-manager/fd/VIEW_INVESTMENTS?section=PENDING' },
          { label: 'Matured FDs', value: 'deeplink-manager/fd/VIEW_INVESTMENTS?section=CLOSED' },
          { label: 'View All Transactions', value: 'deeplink-manager/fd/VIEW_ALL_TRANSACTIONS' },
          { label: 'View Tickets', value: 'deeplink-manager/fd/VIEW_TICKETS' },
          { label: 'Create New Ticket', value: 'deeplink-manager/fd/CREATE_TICKET' },
          { label: 'Help Center Home', value: 'deeplink-manager/fd/OPEN_HELP_CENTER' },
          { label: 'Senior Citizen FDs', value: 'deeplink-manager/fd/VIEW_PLAN_CATEGORY?category=SENIOR_CITIZEN' },
          { label: 'Safest FDs (Banks Only)', value: 'deeplink-manager/fd/VIEW_PLAN_CATEGORY?category=BANKS_ONLY' },
          { label: 'High Return FDs (>9%)', value: 'deeplink-manager/fd/VIEW_PLAN_CATEGORY?category=YIELD_GREATER_THAN_9' },
          { label: 'Tax Saver FDs', value: 'deeplink-manager/fd/VIEW_PLAN_CATEGORY?category=TAX_SAVER_FIXED_DEPOSIT' }
        ];
      case 'SCC':
        return [
          { label: 'Card Home', value: 'deeplink-manager/scc/VIEW_CARD_HOME' },
          { label: 'Card Management', value: 'deeplink-manager/scc/VIEW_MANAGE_TAB' },
          { label: 'Card Transactions', value: 'deeplink-manager/scc/VIEW_TRANSACTIONS_HISTORY_TAB' },
          { label: 'SCC Deposits', value: 'deeplink-manager/scc/VIEW_DEPOSITS_TAB' }
        ];
      case 'PL':
        return [
          { label: 'PL Home', value: 'deeplink-manager/pl/HOME' },
          { label: 'PL Apply', value: 'deeplink-manager/pl/APPLY' }
        ];
      default:
        return [];
    }
  };

  const flowTypes = getFlowTypes();

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