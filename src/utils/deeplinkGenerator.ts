import { DeeplinkConfig } from '../types';
import { getPartnerFirebaseHost } from './firebaseConfig';

export const generateDeeplink = (config: DeeplinkConfig): string => {
  const { partner, flowType } = config;
  
  if (!partner.code || !flowType) {
    return '';
  }

  // Encode the route for URL safety (especially for routes with | symbol)
  const encodedRoute = encodeURIComponent(flowType);
  
  // Base deeplink following the structure from the guide
  const baseDeeplink = `https://upswing.access.partner/${partner.code}?action=webview&redirect=${encodedRoute}`;
  
  // Get Firebase host for the partner
  const firebaseHost = getPartnerFirebaseHost(partner.code);
  
  // If Firebase host is configured, prepend it to the deeplink
  if (firebaseHost) {
    return `https://${firebaseHost}/${encodeURIComponent(baseDeeplink)}`;
  }
  
  // Otherwise, return the standard deeplink
  return baseDeeplink;
};