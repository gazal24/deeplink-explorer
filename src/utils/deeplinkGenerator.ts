import { DeeplinkConfig } from '../types';

export const generateDeeplink = (config: DeeplinkConfig): string => {
  const { partner, flowType } = config;
  
  if (!partner.code || !flowType) {
    return '';
  }

  // Determine the base URL for the partner
  const baseUrl = partner.baseUrl || 'https://upswing.access.partner';
  
  // For standard deeplinks, encode the route for URL safety
  const encodedRoute = encodeURIComponent(flowType);
  return `${baseUrl}/${partner.code}?action=webview&redirect=${encodedRoute}`;
};