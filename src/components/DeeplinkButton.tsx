import React from 'react';

interface DeeplinkButtonProps {
  deeplink: string;
  disabled: boolean;
}

const DeeplinkButton: React.FC<DeeplinkButtonProps> = ({ deeplink, disabled }) => {
  const handleClick = () => {
    if (deeplink) {
      window.open(deeplink, '_blank');
    }
  };

  const copyToClipboard = async () => {
    if (deeplink) {
      try {
        await navigator.clipboard.writeText(deeplink);
        alert('Deeplink copied to clipboard!');
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
        Copy to Clipboard
      </button>
    </div>
  );
};

export default DeeplinkButton;