export interface PartnerCode {
  name: string;
  code: string;
}

export interface DeeplinkConfig {
  partner: PartnerCode;
  device: 'iOS' | 'Android';
  productType: 'FD' | 'PL' | 'SCC';
  flowType: string;
}

export interface DeeplinkTemplate {
  ios: string;
  android: string;
}

export interface DeeplinkConfigMap {
  [partnerCode: string]: DeeplinkTemplate;
}