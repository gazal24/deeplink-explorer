import { DeeplinkConfig } from '../types';

export const generateDeeplink = (config: DeeplinkConfig): string => {
  const { partner, device, flowType } = config;
  
  if (!partner.code || !flowType) {
    return '';
  }

  // For iOS, use the special scheme pattern
  if (device === 'iOS') {
    const scheme = `upswing-access-partner-${partner.code.toLowerCase()}`;
    const encodedRoute = encodeURIComponent(flowType);
    return `${scheme}://upswing?route=${encodedRoute}`;
  }

  // For Android, keep the existing pattern
  const baseUrl = partner.baseUrl || 'https://upswing.access.partner';
  const encodedRoute = encodeURIComponent(flowType);
  return `${baseUrl}/${partner.code}?action=webview&redirect=${encodedRoute}`;
};