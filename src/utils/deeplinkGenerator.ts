import { DeeplinkConfig } from '../types';

export const generateDeeplink = (config: DeeplinkConfig): string => {
  const { partner, flowType } = config;
  
  if (!partner.code || !flowType) {
    return '';
  }

  // Encode the route for URL safety (especially for routes with | symbol)
  const encodedRoute = encodeURIComponent(flowType);
  
  // Follow the structure from the guide: https://upswing.access.partner/${partnerCode}?action=webview&redirect=${route}
  return `https://upswing.access.partner/${partner.code}?action=webview&redirect=${encodedRoute}`;
};