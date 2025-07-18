import { DeeplinkConfig } from '../types';
import { getPartnerFirebaseHost } from './firebaseConfig';

export const generateDeeplink = (config: DeeplinkConfig): string => {
  const { partner, flowType } = config;
  
  if (!partner.code || !flowType) {
    return '';
  }

  // Get Firebase host for the partner
  const firebaseHost = getPartnerFirebaseHost(partner.code);
  
  // Determine the base URL for the partner
  const baseUrl = partner.baseUrl || 'https://upswing.access.partner';
  
  // If Firebase host is configured, use Firebase Dynamic Link format
  if (firebaseHost) {
    // For Firebase Dynamic Links, we need to construct the target URL differently
    // The Firebase link should redirect to the partner's base URL
    const encodedRoute = encodeURIComponent(flowType);
    const targetUrl = `${baseUrl}/${partner.code}?action=webview&redirect=${encodedRoute}`;
    
    // Firebase Dynamic Links format
    return `https://${firebaseHost}?link=${encodeURIComponent(targetUrl)}`;
  }
  
  // For standard deeplinks, encode the route for URL safety
  const encodedRoute = encodeURIComponent(flowType);
  return `${baseUrl}/${partner.code}?action=webview&redirect=${encodedRoute}`;
};