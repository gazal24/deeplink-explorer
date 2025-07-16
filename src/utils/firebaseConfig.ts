import { PartnerFirebaseConfig } from '../types';

export const partnerFirebaseConfig: PartnerFirebaseConfig = {
  'STBM': {
    firebaseHost: 'stablemoney.page.link'
  },
  'EDHS': {
    firebaseHost: 'edhas.page.link'
  }
};

export const getPartnerFirebaseHost = (partnerCode: string): string | null => {
  return partnerFirebaseConfig[partnerCode]?.firebaseHost || null;
};