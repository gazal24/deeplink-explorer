export interface PartnerCode {
  name: string;
  code: string;
  baseUrl?: string;
}

export interface DeeplinkConfig {
  partner: PartnerCode;
  device: 'iOS' | 'Android';
  productType: 'FD' | 'PL' | 'SCC';
  flowType: string;
}


