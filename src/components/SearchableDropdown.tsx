import React, { useState, useRef, useEffect, useCallback } from 'react';

interface Option {
  value: string;
  label: string;
  sublabel?: string;
}

interface SearchableDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  loading?: boolean;
  error?: string | null;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Search and select...",
  loading = false,
  error = null
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    option.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the currently selected option
  const selectedOption = options.find(option => option.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
          break;
        case 'Enter':
          event.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            handleOptionSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSearchTerm('');
          setHighlightedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, filteredOptions, handleOptionSelect]);

  const handleInputClick = () => {
    setIsOpen(true);
    setSearchTerm('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOptionSelect = useCallback((option: Option) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm('');
    setHighlightedIndex(-1);
  }, [onChange]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setHighlightedIndex(-1);
  };

  return (
    <div className="searchable-dropdown" ref={dropdownRef}>
      <div className="dropdown-container">
        <input
          ref={inputRef}
          type="text"
          className={`dropdown-input ${isOpen ? 'dropdown-input-open' : ''}`}
          value={isOpen ? searchTerm : (selectedOption ? `${selectedOption.label} (${selectedOption.value})` : '')}
          onChange={handleSearchChange}
          onClick={handleInputClick}
          placeholder={loading ? "Loading..." : placeholder}
          disabled={loading}
          readOnly={!isOpen}
        />
        <div className="dropdown-arrow">
          {loading ? (
            <div className="dropdown-spinner">⏳</div>
          ) : (
            <span className={`dropdown-chevron ${isOpen ? 'dropdown-chevron-up' : ''}`}>
              ▼
            </span>
          )}
        </div>
      </div>

      {error && (
        <div className="dropdown-error">{error}</div>
      )}

      {isOpen && (
        <div className="dropdown-menu">
          {filteredOptions.length === 0 ? (
            <div className="dropdown-no-results">
              {searchTerm ? `No partners found for "${searchTerm}"` : 'No partners available'}
            </div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                className={`dropdown-option ${
                  index === highlightedIndex ? 'dropdown-option-highlighted' : ''
                } ${option.value === value ? 'dropdown-option-selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                <div className="dropdown-option-main">
                  {option.label}
                </div>
                <div className="dropdown-option-code">
                  {option.value}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;