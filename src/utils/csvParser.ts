import { PartnerCode } from '../types';

export const parsePartnerCodesFromCSV = (csvText: string): PartnerCode[] => {
  const lines = csvText.trim().split('\n');
  const partners: PartnerCode[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      const [name, code] = line.split(',').map(item => item.trim().replace(/"/g, ''));
      if (name && code) {
        partners.push({ name, code });
      }
    }
  }
  
  return partners;
};