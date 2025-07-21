import React, { useState } from 'react';

interface DeeplinkButtonProps {
  deeplink: string;
  disabled: boolean;
}

const DeeplinkButton: React.FC<DeeplinkButtonProps> = ({ deeplink, disabled }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (deeplink) {
      window.open(deeplink, '_blank');
    }
  };

  const copyToClipboard = async () => {
    if (deeplink) {
      try {
        await navigator.clipboard.writeText(deeplink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="deeplink-actions">
      <button 
        onClick={handleClick}
        disabled={disabled}
        className="primary-button"
      >
        Open Deeplink
      </button>
      
      <button 
        onClick={copyToClipboard}
        disabled={disabled}
        className="secondary-button"
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
};

export default DeeplinkButton;