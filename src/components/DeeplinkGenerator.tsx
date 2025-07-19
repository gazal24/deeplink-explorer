import React, { useState } from 'react';
import { DeeplinkConfig } from '../types';
import PartnerCodeSelector from './PartnerCodeSelector';
import DeviceSelector from './DeviceSelector';
import ProductTypeSelector from './ProductTypeSelector';
import FlowTypeSelector from './FlowTypeSelector';
import DeeplinkButton from './DeeplinkButton';
import { generateDeeplink } from '../utils/deeplinkGenerator';
import './DeeplinkGenerator.css';

const DeeplinkGenerator: React.FC = () => {
  const [config, setConfig] = useState<DeeplinkConfig>({
    partner: { name: '', code: '' },
    device: 'Android',
    productType: 'FD',
    flowType: ''
  });

  const updateConfig = (updates: Partial<DeeplinkConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const generatedDeeplink = generateDeeplink(config);

  return (
    <div className="deeplink-generator">
      <div className="parameter-section">
        <h2>Configure Parameters</h2>
        
        <PartnerCodeSelector 
          selectedPartner={config.partner}
          onPartnerSelect={(partner) => updateConfig({ partner })}
        />
        
        <DeviceSelector
          selectedDevice={config.device}
          onDeviceSelect={(device) => updateConfig({ device })}
        />
        
        <ProductTypeSelector
          selectedProductType={config.productType}
          onProductTypeSelect={(productType) => updateConfig({ productType, flowType: '' })}
        />
        
        <FlowTypeSelector
          selectedFlowType={config.flowType}
          onFlowTypeSelect={(flowType) => updateConfig({ flowType })}
          productType={config.productType}
        />
      </div>

      <div className="deeplink-section">
        <h2>Generated Deeplink</h2>
        <div className="deeplink-preview">
          {generatedDeeplink || 'Configure parameters to generate deeplink'}
        </div>
        
        <DeeplinkButton 
          deeplink={generatedDeeplink}
          disabled={!generatedDeeplink}
        />
      </div>
    </div>
  );
};

export default DeeplinkGenerator;