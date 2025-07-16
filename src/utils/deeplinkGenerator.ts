import { DeeplinkConfig } from '../types';
import { getPartnerFirebaseHost } from './firebaseConfig';

export const generateDeeplink = (config: DeeplinkConfig): string => {
  const { partner, flowType } = config;
  
  if (!partner.code || !flowType) {
    return '';
  }

  // Get Firebase host for the partner
  const firebaseHost = getPartnerFirebaseHost(partner.code);
  
  // If Firebase host is configured, use Firebase Dynamic Link format
  if (firebaseHost) {
    // For Firebase Dynamic Links, we need to construct the target URL differently
    // The Firebase link should redirect to the Upswing deeplink
    const encodedRoute = encodeURIComponent(flowType);
    const targetUrl = `https://upswing.access.partner/${partner.code}?action=webview&redirect=${encodedRoute}`;
    
    // Firebase Dynamic Links format
    return `https://${firebaseHost}?link=${encodeURIComponent(targetUrl)}`;
  }
  
  // For standard deeplinks, encode the route for URL safety
  const encodedRoute = encodeURIComponent(flowType);
  return `https://upswing.access.partner/${partner.code}?action=webview&redirect=${encodedRoute}`;
};