import React from 'react';

interface DeviceSelectorProps {
  selectedDevice: 'iOS' | 'Android';
  onDeviceSelect: (device: 'iOS' | 'Android') => void;
}

const DeviceSelector: React.FC<DeviceSelectorProps> = ({
  selectedDevice,
  onDeviceSelect
}) => {
  const devices: Array<'iOS' | 'Android'> = ['iOS', 'Android'];

  return (
    <div className="parameter-group">
      <label>Device</label>
      <div className="chip-group">
        {devices.map(device => (
          <button
            key={device}
            type="button"
            className={`chip ${selectedDevice === device ? 'chip-active' : ''}`}
            onClick={() => onDeviceSelect(device)}
          >
            {device}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeviceSelector;