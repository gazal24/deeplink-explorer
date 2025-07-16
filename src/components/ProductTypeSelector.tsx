import React from 'react';

interface ProductTypeSelectorProps {
  selectedProductType: 'FD' | 'PL' | 'SCC';
  onProductTypeSelect: (productType: 'FD' | 'PL' | 'SCC') => void;
}

const ProductTypeSelector: React.FC<ProductTypeSelectorProps> = ({
  selectedProductType,
  onProductTypeSelect
}) => {
  const productTypes: Array<'FD' | 'PL' | 'SCC'> = ['FD', 'PL', 'SCC'];

  return (
    <div className="parameter-group">
      <label>Product Type</label>
      <div className="chip-group">
        {productTypes.map(type => (
          <button
            key={type}
            type="button"
            className={`chip ${selectedProductType === type ? 'chip-active' : ''}`}
            onClick={() => onProductTypeSelect(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductTypeSelector;