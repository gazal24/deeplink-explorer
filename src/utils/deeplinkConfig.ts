import { DeeplinkConfigMap } from '../types';

export const deeplinkConfigs: DeeplinkConfigMap = {
  'PARTNER001': {
    ios: 'upswing://partner001',
    android: 'upswing://partner001'
  },
  'PARTNER002': {
    ios: 'upswing://partner002',
    android: 'upswing://partner002'
  },
  'PARTNER003': {
    ios: 'upswing://partner003',
    android: 'upswing://partner003'
  }
};

export const getDeeplinkTemplate = (partnerCode: string): { ios: string; android: string } | null => {
  return deeplinkConfigs[partnerCode] || null;
};