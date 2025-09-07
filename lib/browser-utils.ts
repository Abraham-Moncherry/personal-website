export function isInAppBrowser(): boolean {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // Check for common in-app browser patterns
  const inAppPatterns = [
    'FBAN', 'FBAV',                    // Facebook
    'Instagram',                        // Instagram
    'LinkedInApp',                      // LinkedIn
    'Twitter', 'TwitterAndroid',        // Twitter/X
    'Snapchat',                         // Snapchat
    'Pinterest',                        // Pinterest
    'WhatsApp',                         // WhatsApp
    'Line',                             // Line
    'WeChat', 'MicroMessenger',        // WeChat
    'QQ',                               // QQ
    'Weibo',                            // Weibo
    'TikTok', 'BytedanceWebview',      // TikTok
    'musical_ly',                       // TikTok (old)
    'DuckDuckGo',                       // DuckDuckGo
    'SamsungBrowser',                   // Samsung Internet
    'Slack',                            // Slack
    'Discord',                          // Discord
    'Telegram',                         // Telegram
    'Reddit',                           // Reddit
  ];
  
  return inAppPatterns.some(pattern => ua.includes(pattern));
}

export function supportsWebRTC(): boolean {
  try {
    return !!(
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === 'function' &&
      window.RTCPeerConnection
    );
  } catch {
    return false;
  }
}

export function getOpenInBrowserUrl(): string {
  // Get the current URL
  const currentUrl = window.location.href;
  
  // Return URL that should open in default browser
  return currentUrl;
}